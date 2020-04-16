import { AppProps } from "next/app";
import Header from "../components/Header";
import AppTitle from "../components/AppTitle";
import Layout from "../components/Layout";
import GlobalStyles from "../components/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <AppTitle></AppTitle>
        <Header></Header>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}

export default App;
