import { AppProps } from "next/app";
import Header from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps}></Component>
    </>
  );
}

export default App;
