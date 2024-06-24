import logo from './logo.svg';
import './App.css';
import Frame from './Componentes/Frame.jsx';
import themeParams from './theme.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme(themeParams);
  return (
    <ThemeProvider theme={theme}>

      <Frame/>
   {/* <iframe title="TPGRUPAL" width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>

     <p>REPORTE GER</p>
     <iframe title="ReporteGerFinal" width="800" height="836" src="https://app.powerbi.com/view?r=eyJrIjoiYzU5MmVkYmEtMDllNC00NzA3LTllMGMtYzU4OWVjZjViYmViIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> */}
  
   </ThemeProvider>);
}

export default App;
