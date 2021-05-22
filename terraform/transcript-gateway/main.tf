resource "aws_api_gateway_rest_api" "gateway" {
  name = "transcript-gateway"

  endpoint_configuration {
    types = [
      "REGIONAL"
    ]
  }

  policy = data.aws_iam_policy_document.gateway_policy.json

  binary_media_types = [
    "application/pdf"
  ]
}

data "aws_iam_policy_document" "gateway_policy" {
  statement {
    effect = "Allow"
    principals {
      identifiers = [
        "*"
      ]
      type = "*"
    }
    actions = [
      "execute-api:Invoke"
    ]
    resources = [
      "*"
    ]
  }
}

resource "aws_api_gateway_resource" "gateway_resource" {
  rest_api_id = aws_api_gateway_rest_api.gateway.id
  parent_id = aws_api_gateway_rest_api.gateway.root_resource_id
  path_part = "upload"
}

resource "aws_api_gateway_method" "gateway_method" {
  rest_api_id = aws_api_gateway_rest_api.gateway.id
  resource_id = aws_api_gateway_resource.gateway_resource.id
  http_method = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "gateway_integration" {
  rest_api_id = aws_api_gateway_rest_api.gateway.id
  resource_id = aws_api_gateway_resource.gateway_resource.id
  http_method = aws_api_gateway_method.gateway_method.http_method

  integration_http_method = "POST"
  type = "AWS_PROXY"

  uri = "arn:aws:apigateway:${var.aws_region}:lambda:path/2015-03-31/functions/${var.transcript_lambda}/invocations"
}

resource "aws_api_gateway_deployment" "gateway_deployment" {
  rest_api_id = aws_api_gateway_rest_api.gateway.id

  depends_on = [
    aws_api_gateway_integration.gateway_integration,
    aws_api_gateway_method.gateway_method
  ]

  stage_name = "transcript-gateway"
}

resource "aws_api_gateway_integration_response" "gateway_response" {
  rest_api_id = aws_api_gateway_rest_api.gateway.id
  resource_id = aws_api_gateway_resource.gateway_resource.id
  http_method = aws_api_gateway_method.gateway_method.http_method
  status_code = 200

  response_templates = {
    "application/pdf" = <<EOF
{
    "content": "$input.body"
}
EOF
  }
}