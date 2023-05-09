import requests
import json

URL = "http://localhost:3000/categories"

# PARA CHAMAR O MÉTODO GET DO SERVIÇO
response = requests.get(f"{URL}")
print(f"status code = {response.status_code}")
content = response.json()
print(content)

file = open("output/categories.txt", "w")
file.write(json.dumps(content, indent=4))
file.close()
