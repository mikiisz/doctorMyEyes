remote_state {
  backend = "s3"

  config = {
    encrypt = true
    bucket = "doctormyeyes-state"
    key = "terraform.state"
    region = "us-east-1"
  }
}

terraform {
  source = "./terraform"
}

inputs = {
  region = "us-east-1"
}
