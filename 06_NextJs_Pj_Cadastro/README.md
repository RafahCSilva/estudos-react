# Seção 6: Projeto Cadastro - Integração com Banco de dados (Firestore)

[https://github.com/cod3rcursos/next-crud](https://github.com/cod3rcursos/next-crud)

````shell
npx create-next-app pj_cadastro
cd pj_cadastro
npm run dev
````

- pasta Pages é um mapeamento de rotas
  - criar um arquivo na pasta **pages** te dá uma rota
    - `/src/pages/teste.jsx` ==> `http://localhost:3000/teste` (case sensitive)
  - neste deve `export default` uma função que retorne JSX
  - um arquivo index é a rota `/`
    - (ex: `/src/pages/testando/index.jsx ==> http://localhost:3000/testando`)
  - para parametros, basta ter o nome do arquivo/pasta com colchetes
    - `/src/pages/cliente/[filial]/[codigo].jsx ==> http://localhost:3000/cliente/sp/123`
- CSS Global
  - fica no arquivo `/src/styles/globals.css`
  - deve ser referenciado (importado) no `/src/pages/_app.jsx`
- CSS Modularizado
  - crie o arquiovo CSS com o sufixo `*.module.css` (em qlqr lugar ou em `/styles`)
  - faça `import styles from '../styles/Estiloso.module.css'` no seu componente e adicione ao elemento como acesso a objeto `className={ styles.roxo }`
- Componetes
  - do jeito padrao do React, basta instanciar no JSX `<MeuComponente/>`
