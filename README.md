Para instalar o aplicativo, é necessário ter instalado NodeJS e NPM.

Na pasta raiz, digitar npm install, ao término: npm start

Para rodar testes: npm test

Uma versão demo do aplicativo se encontra em: https://milton-mazetto-github-list.surge.sh

A principal feature do ES6 utilizada nessa aplicação foi a função map. Ela foi utilizada para a transformação de uma array de dados estruturados em uma array de componentes React, que pudessem ser renderizados na tela.

A opção pelo uso de map ao invés de um for loop se justifica por sua semantica própria para transformações e também por conta da atual otimização da maior parte dos compiladores JS para o seu uso.

Outra feature do ES6 bastante utilizada é o uso de arrow functions ( () => {} ). A vantagem da declaração das arrow functions é que, ao contrário da declaração normal, ela possuí escopo léxico, não dependendo de bind no constructor para poder fazer uso do termo this no componente React.
