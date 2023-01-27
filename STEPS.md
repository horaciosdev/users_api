### Preparar o ambiente
'''
npm init -y
git init
npm add -D ntypescript typescript ts-node
npm add -D nodemon
npx ntsc --init
'''

in package.json
replace:
"test": "echo \"Error: no test specified\" && exit 1"
with:
"start:dev": "nodemon --exec npx ts-node src/index.ts"

### rodar o projeto
'''
npm run start:dev
'''

### GIT
'''
git add .
git commit -m "initial commit with initial setup"
'''

### instalar e configurar extensões
Install eslint and prettyer
'''
npm add -D eslint prettier eslint-config-prettier
npx eslint --init
'''
Config:

√ How would you like to use ESLint? · 'To check syntax and find problems'
√ What type of modules does your project use? · 'Javascript modules (import/export)'
√ Which framework does your project use? · 'None of these'
√ Does your project use TypeScript? · 'Yes'
√ Where does your code run? · 'Node'
√ What format do you want your config file to be in? · 'JSON'
√ Would you like to install them now? · 'Yes'
√ Which package manager do you want to use? 'npm'

In .eslintrc.json
add to
"parserOptions": {
...,
...,
"project": "./tsconfig.json"
}

Install extensions to VSCODE:
ESLint
Prettier

In VSCODE press CTRL+, search for "format on save" and check "Format a file on save. ..."
and search for "default formatter" and select "Prettier".

Now press CTRL+SHIFT+P and search "reload window" and reload the VSCODE.


### GIT
### Utilizar conventional commits
'''
git add .
git commit -m "chore: add prettier and eslint setup"
'''

### SETUP do express
### Instalar express e dependências
'''
npm add express
npm add -D @types/express @types/node
'''
### Adicionar environment
'''
npm add -D dotenv
'''
Create '.env' file in the root directory




