import requests

URL = "http://localhost:3000/categories"

# PARA CHAMAR O MÉTODO POST DO SERVIÇO
while True:
    print("para encerrar deixe qualquer um dos espaços em branco")
    icone = input("insira um emoji contendo o icone da categoria: ")
    nome = input("insira o nome da categoria: ")
    if icone == "" or nome == "":
        break
    registro = {"icon": icone, "name": nome}
    response = requests.post(f"{URL}", json=registro)
    print(f"status code = {response.status_code}")
    print(response.json())
print("programa encerrado")
