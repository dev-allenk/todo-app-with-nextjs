import { AppProps } from "next/app";
import Header from "../components/Header";
import AppTitle from "../components/AppTitle";
import Wrapper from "../components/Wrapper";
import GlobalStyles from "../components/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AppTitle></AppTitle>
        <Header></Header>
        <Component {...pageProps}></Component>
      </Wrapper>
    </>
  );
}

export default App;
