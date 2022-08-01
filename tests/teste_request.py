import json
import requests

data = {
    'cep': 15960000
}

header = {
    'Content-Type': 'application/json'
}

dado = './teste.json'

f = open(dado)

fe = f.read()

fa = json.dumps(fe)

print(fa)

# url = 'http://0.0.0.0:8080'
url_cloud = 'https://southamerica-east1-valiant-carrier-357523.cloudfunctions.net/function-1'

# response = requests.get(url, headers=None, json=data)
response_cloud = requests.get(url_cloud, headers=header, json=fa)

# print(response.text)
print(response_cloud.text)
# print(response.status_code)
