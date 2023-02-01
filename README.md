<h1>Users API (Com Node, Express, MongoDB e TypeScript)</h1>
<p>Este projeto foi desenvolvido através do curso "Crie e Faça Deploy de uma API COMPLETA com Node, TypeScript & MongoDB" do Felipe Rocha</p>
<p>O projeto contém um CRUD (Create, Read, Update, Delete) de usuários utilizando os princípios de Clean Code, SOLID e DRY</p>
<p>Link para o vídeo com o curso: https://youtu.be/gU3kp7Aw0JI</p>

<h1>Breve Documentação</h1>
<p>Segue uma documentação das etapas do desenvolvimento da API que não estão relacionadas diretamente com a codificação mas que são necessárias para a criação do ambiente e referência para criação de outros possíveis projetos.</p>

<h2>Preparar o ambiente:</h2>

```
npm init -y
npm add -D ntypescript typescript ts-node
npm add -D nodemon
npx ntsc --init
```

<h2>Inicializar o git</h2>

```
git init
```

<h2>Criar o arquivo '.gitignore' com o seguinte conteúdo:</h2>

```
node_modules
.env
dist
```

<h2>Em package.json os scripts devem estar assim:</h2>

```
"scripts": {
  "build": "tsc",
  "prestart": "npm run build",
  "start": "node .",
  "start:dev": "nodemon --exec npx ts-node src/index.ts"
},
```

<h2>Em 'tsconfig.json' descomente 'outDir' e defina seu valor como 'dist'</h2>

```
"outDir": "dist"
```

<h2>Adicionar o Express e dependências</h2>

```
npm add express
npm add -D @types/express @types/node
```

<h2>Adicionar o Validator e seus types para algumas validações</h2>

```
npm add validator
npm add -D @types/validator
```

<h2>Instalar e configurar eslint and prettyer</h2>

```
npm add -D eslint prettier eslint-config-prettier
npx eslint --init

√ How would you like to use ESLint? · 'To check syntax and find problems'
√ What type of modules does your project use? · 'Javascript modules (import/export)'
√ Which framework does your project use? · 'None of these'
√ Does your project use TypeScript? · 'Yes'
√ Where does your code run? · 'Node'
√ What format do you want your config file to be in? · 'JSON'
√ Would you like to install them now? · 'Yes'
√ Which package manager do you want to use? 'npm'
```

<h2>No arquivo '.eslintrc.json' adicionar...</h2>

```
"parserOptions": {
...,
...,
"project": "./tsconfig.json"
}
```

<p>Instalar as extensões do VSCODE:</p>
<ul>
  <li>ESLint</li>
  <li>Prettier</li>
<ul>

<p>No VSCODE pressionar 'CTRL+,' buscar por "format on save" and marcar "Format a file on save."</p>
<p>Procurar também por "default formatter" and selecionar "Prettier".</p>
<p>Reiniciar VSCODE com 'CTRL+SHIFT+P' buscando por "reload window" e selecionando essa opção.</p>

<h2>Adicionar MongoDB</h2>

```
npm add mongodb
```

<h2>Criar Banco no MongoDB</h2>
<ol>
<li>Acesse https://www.mongodb.com/</li>
<li>Faça login ou crie uma conta.</li>
<li>Em "Database" na aba "Data Services" clique em "Build a Database"</li>
<li>Escolha o plano mais adequado (pode ser o shared que é gratuito)</li>
<li>Selecione o provedor e a região (ex: AWS e São Paulo)</li>
<li>Escolha um nome para o Cluster em "Cluster Name" (ex.: Cluster0)</li>
<li>Em "Quickstart - Security Quickstart" defina o nome de usuário e senha do banco.</li>
<li>Em IP Address, para que qualquer IP possa acessar o banco, digite "0.0.0.0/0"</li>
<li>Clique em "Add Entry"</li>
<li>Clique em "Finish and Close"</li>
<li>Clique em "Go to Databases"</li>
<li>O processo de criação do Banco de dados será iniciado e concluído em breve.</li>
</ol>

<h2>Adicionar dotenv</h2>

```
npm add -D dotenv
```

<h2>Criar o arquivo '.env' com as variáveis de ambiente na raíz do projeto.</h2>

```
PORT = 'insira aqui a porta utilizada ex.: PORT = 8000'

MONGODB_URL = 'a URL do seu banco ex.: MONGODB_URL = mongodb+srv://cluster0.abcdefg.mongodb.net
MONGODB_USERNAME = 'o usuário do seu banco de dados: ex.:  MONGODB_USERNAME = root'
MONGODB_PASSWORD = 'a senha do seu banco de dados ex.: MONGODB_PASSWORD = 12345'
```

<h2>Para executar o projeto com o Nodemon durante o desenvolvimento.</h2>

```
npm run start:dev
```

<h2>Para executar a build.</h2>

```
npm run build
```

<h2>Para fazer o deploy no https://railway.app/</h2>

<ol>
<li>Acesse: https://railway.app/</li>
<li>Faça login na sua conta ou crie uma nova conta.</li>
<li>Crie um novo projeto clicando em "Start New Project"</li>
<li>Selecione "Deploy from GitHub"</li>
<li>Clique em "Configure GitHubApp"</li>
<li>Selecione o repositpório do projeto em "Repository access" para que o railway tenha acesso e salve.</li>
<li>Selecione "Deploy from GitHub" novamente e o repositório permitido deve estar listado.</li>
<li>Selecione o repositório do projeto.</li>
<li>Selecione "Add variables"</li>
<li>Adicione as variáveis de ambiente MONGODB_URL, MONGODB_USERNAME, MONGODB_PASSWORD (a PORT não é necessária)</li>
<li>Em "Settings" na seção "Deploy" em "Start Command" digite "node dist/index.js"</li>
<li>Ainda na aba "Settings" em "Domains" clique em "Generate Domain" para que um domínio seja criado.</li>
<li>Na aba "Deployments", acompanhe o deploy do projeto e quando pronto acesse através do domínio criado.</li>
</ol>
