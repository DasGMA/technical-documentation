import { useCallback, useEffect, useState } from "react";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import SideMainNavigation from "../components/SideMainNavigation";
import "../style/index.css";

function MyApp({ Component, pageProps }) {
  const [sideMainVisible, setSideMainVisible] = useState(false);

  const setVisible = useCallback(() => {
    setSideMainVisible((prevState) => !prevState);
  }, []);

  const resetVisible = useCallback(() => {
    setSideMainVisible(false);
  }, []);

  const resetSideVisible = useCallback(() => {
    if (window.innerWidth > 960) setSideMainVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resetSideVisible);

    return () => window.removeEventListener("resize", resetSideVisible);
  }, [resetSideVisible]);

  return (
    <>
      <MainNavigation setSideVisible={setVisible} />
      <SideMainNavigation
        sideMainVisible={sideMainVisible}
        resetVisible={resetVisible}
      />
      <main id="main-doc">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
