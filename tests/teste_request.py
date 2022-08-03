import json
import requests

data = {
    'cep': '15804-145'
}

header = {
    'Content-Type': 'application/json'
}

fa = json.dumps(data)

print(fa)

url_cloud = 'http://0.0.0.0:8080'

# for index in range(60):

response_cloud = requests.post(url_cloud, headers=header, data=fa)

print(response_cloud.text)
