import json


def lambda_handler(event, context):
    # TODO: integrate with AWS Transcript

    response = {
        'text': 'Hello World'
    }

    return {
        "statusCode": 200,
        "body": json.dumps(response)
    }
