import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
     margin:0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Monsterrat', sans-serif;
 }
 html {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
}
 html::-webkit-scrollbar{
     display: none;
 }
`

export default GlobalStyle