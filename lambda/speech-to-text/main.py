import base64
import json
import boto3
import uuid


s3 = boto3.client('s3')
transcribe = boto3.client('transcribe')

# TODO: update the ENV varibale in lambda


def lambda_handler(event, context):
    file_content = base64.b64decode(event['content'])
    file_token = uuid.uuid4().hex
    file_format = event['format']
    file_path = "%s.%s" % (file_token, file_format)

    try:
        s3_response = s3.put_object(
            Bucket="doctormyeyes-state", Key=file_path, Body=file_content)
    except Exception as e:
        raise IOError(e)

    response = transcribe.start_transcription_job(
        TranscriptionJobName=file_token,
        LanguageCode='en-US',
        MediaFormat=file_format,
        Media={
            'MediaFileUri': "https://s3.amazonaws.com/%s/%s" % ("REPLACE WITH ENV", file_path)
        },
        OutputBucketName="REPLACE WITH ENV"
    )

    return {
        "statusCode": 200,
        "body": file_token
    }
