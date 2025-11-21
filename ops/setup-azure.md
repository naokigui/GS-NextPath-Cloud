# Deploy no Azure — Trilha B (App Service + Azure SQL)

Este documento descreve todos os passos realizados para publicar a SPA no Azure App Service e provisionar o banco de dados requerido para a trilha B.

---

# 1. Recursos Criados no Azure

Durante o processo de deploy e configuração do ambiente, foram criados os seguintes recursos:

## 1.1 Resource Group
Grupo que organiza todos os recursos do projeto.  
rg-gs-cloud-devops.

## 1.2 App Service Plan
Plano que define a capacidade de hospedagem (compute) do App Service.  
Inclui:
- Tipo: Azure for Students
- Região: Brazil South 

## 1.3 App Service
Serviço responsável por hospedar a aplicação SPA.

Funções:
- Armazenar o código publicado  
- Executar a aplicação em ambiente gerenciado  
- Disponibilizar a URL pública  

A aplicação passa a ficar acessível imediatamente após a publicação.

---

# 2. Deploy da Aplicação

O processo de publicação seguiu as etapas:

## 2.1 Criação do App Service
- Escolha do runtime (Node, HTML)
- Definição da região
- Associação ao App Service Plan

## 2.2 Configuração do Runtime
Foi selecionado o runtime apropriado para a SPA.  
Exemplo:
- **Node 18**, ou  
- **Static HTML** (caso a SPA seja somente HTML/CSS/JS)

## 2.3 Upload do Código (ZIP Deploy)
- Geração de um arquivo `.zip` contendo o conteúdo da pasta `/app`.
- Envio via:
  - **Deployment Center > Zip Deploy**

## 2.4 Validação da Aplicação
Após o deploy:
- A URL pública foi acessada  
- Verificado carregamento correto da SPA  
- Checados logs no painel do App Service  
- Confirmação de que a aplicação estava online e funcional

---

# 3. Diagrama de Fluxo do Projeto


![Diagrama de Arquitetura](./ops/esquema-de-arquitetura.jpg)

Fluxo representado:

Usuário → Navegador → Azure App Service (SPA)  
           ↓  
         Azure SQL Database

O diagrama ilustra:
- Componentes principais do projeto  
- Fluxo de acesso  
- Relação entre App Service e Banco  
- Ambiente completo da Trilha B
