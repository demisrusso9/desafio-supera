import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: Roboto;
   }

   html, body, #root {
      height: 100vh;
      background-color: #226ce0;
   }

   a {
      text-decoration: none;
      cursor: pointer;
   }

   ul {
      list-style: none;
   }
`
