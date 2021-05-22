locals {
  gateway_config = {
    id = aws_api_gateway_rest_api.gateway.id
    e2e_http_method = aws_api_gateway_method.gateway_method.http_method
    e2e_path_part = aws_api_gateway_resource.gateway_resource.path_part
  }
}

output "gateway_config" {
  value = local.gateway_config
}