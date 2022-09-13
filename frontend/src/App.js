import Routing from "./Routing/Routing";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
