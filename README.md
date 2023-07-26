# Testes na API de "Star Wars" com Playwright

## Sobre o projeto

Essa é uma aplicação de testes automatizados em uma API com informações sobre a saga de filmes "Star Wars". Os testes foram aplicados em todos os endpoints da API, cujos resultados são disponibilizados em relatório gerado pelo Allure. 

Além disso, foi desenvolvida uma pipeline no Github Actions para que os testes sejam executados e o relatórios sejam gerados a cada push ou pull request na branch main do repositório.

## Link da API
https://swapi.dev/

## Tecnologias utilizadas

- Playwright
- Allure Report
- Github Actions

## Endpoints com testes automatizados

- [GET] Listar todos os filmes (/films)
- [GET] Obter um filme específico (/films/{id})
- [GET] Listar todos os personagens (/people)
- [GET] Obter um personagem específico (/people/{id})
- [GET] Listar todos os planetas (/planets)
- [GET] Obter um planeta específico (/planets/{id})
- [GET] Listar todas as espécies (/species)
- [GET] Obter uma espécie específica (/species/{id})
- [GET] Listar todas as espaçonaves (/starships)
- [GET] Obter uma espaçonave específica (/starships/{id})
- [GET] Listar todos os veículos (/vehicles)
- [GET] Obter um veículo específico (/vehicles/{id})

## Relatório gerado
![image](https://github.com/pauloliveiram/swapi-playwright/assets/39312072/1be6b3aa-3cde-4174-8fd0-445fa7068915)

## Como executar os testes

### Pré-requisitos

- Node instalado na máquina

```bash

# Clonar repositório
git clone https://github.com/pauloliveiram/swapi-playwright.git

# Entrar na pasta do projeto
cd swapi-playwright

# Instalar dependências especificadas no arquivo package.json 
npm install
	
# Executar os testes e gerar arquivos na pasta allure-results
npx playwright test
					
# Gerar os relatórios a partir dos arquivos da pasta allure-results e abrir o browser com os relatórios
npm run allure-report
								
# Caso queira executar os testes e gerar os relatórios novamente, antes é necessário limpar a pasta allure-results com o seguinte comando:
npm run clean:folders					
```

 ### ESLint e Prettier
No projeto foram utilizadas as ferramentas ESLint e Prettier para garantir uma melhor qualidade do código desenvolvido. 
- **ESLint:** é responsável por analisar o código e identificar problemas de acordo com regras pré-estabelecidas
- **Prettier:** é responsável por formatar o código de acordo com regras pré-estabelecidas

```bash

# Executar o ESLint
npx eslint . --ext .ts

# Executar o Prettier
npx prettier . --write
```

# Autor

Paulo Oliveira
