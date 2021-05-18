resource "aws_lambda_function" "speech_to_text_lambda" {
  function_name = "speech-to-text"
  handler = "main.lambda_handler"
  role = aws_iam_role.lambda_iam_role.arn
  memory_size = 128
  timeout = 5
  runtime = "python3.7"
  filename = data.archive_file.source_files.output_path
  source_code_hash = data.archive_file.source_files.output_base64sha256
}

resource "aws_iam_role" "lambda_iam_role" {
  name = "speech-to-text-role"
  assume_role_policy = data.aws_iam_policy_document.trust_policy.json
}

data "aws_iam_policy_document" "trust_policy" {
  statement {
    effect = "Allow"
    actions = [
      "sts:AssumeRole"
    ]
    principals {
      identifiers = [
        "lambda.amazonaws.com"
      ]
      type = "Service"
    }
  }
}

data "archive_file" "source_files" {
  output_path = "${path.module}/lambda.zip"
  source_dir = "${path.module}/../lambda/speech-to-text"
  type = "zip"
}

resource "aws_lambda_permission" "lambda_permission" {
  statement_id = "speech-to-text-allow-execution"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.speech_to_text_lambda.arn
  principal = "apigateway.amazonaws.com"
  source_arn = "arn:aws:execute-api:${var.aws_region}:${var.account_id}:${var.gateway_config.id}/*/${var.gateway_config.e2e_http_method}/${var.gateway_config.e2e_path_part}"
}