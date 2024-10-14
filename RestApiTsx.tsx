npm init/ yarn init
npm install/ yarn add 
npm run/ yarn 
npx/ yarn 

API Node/Express/Typescript
mkdir app-express
cd app-express
yarn init --yes

// tsc --init (tsconfig.json)
"compilerOptions": {
    "target": "es6",   
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
}


// package.json
"scripts": {
    "dev": "ts-node ./src/index.ts",
    "build": "tsc",
    "start": "node ./dist/index.js"
},

//instalar módulos
yarn add @types/node typescript
yarn add -D ts-node
yarn add -D nodemon

//Express/CORS
yarn add express
yarn add cors

//Types módulos 
yarn add @types/express
yarn add @types/cors

yarn dev

//Testes Endpoints (Postman/Insomnia)

//Controle de versão 
git init
git add 
git commit -m "Inicia projeto de servidor Node com Express e SQLite"
git remote add origin {url}
git branch -M main
git push -u origin main
