import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./Routing/Routing";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/globalStyle";
import {
  fetchTrending,
  fetchTvSeries,
  fetchMovies,
} from "./Redux/Slices/bookmark/bookMarkSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchTvSeries());
    dispatch(fetchMovies());
  }, []);
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
