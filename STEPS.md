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

'''
npm run start:dev
'''
