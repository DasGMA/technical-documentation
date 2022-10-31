import MainNavigation from "../components/MainNavigation";
import "../style/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainNavigation />
      <main id="main-doc">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
