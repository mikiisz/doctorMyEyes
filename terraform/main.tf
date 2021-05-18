data "aws_caller_identity" "current" {}

module "transcript_gateway" {
  source = "./transcript-gateway"
  aws_region = var.region
  transcript_lambda = module.speech_to_text_lambda.lambda_arn
}

module "speech_to_text_lambda" {
  source = "./speech-to-text-lambda"
  aws_region = var.region
  gateway_config = module.transcript_gateway.gateway_config
  account_id = data.aws_caller_identity.current.account_id
}
