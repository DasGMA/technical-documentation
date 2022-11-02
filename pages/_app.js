import BottomNavigation from "../components/BottomPageNavigation";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import "../style/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainNavigation />
      <main id="main-doc">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
