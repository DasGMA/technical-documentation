import Container from "../../layout-components/Container";

const MainNavigation = () => {
  return (
    <Container>
      <nav id="main-navigation">
        <span>LOGO</span>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documentation</a>
          </li>
          <li>
            <a>Examples</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default MainNavigation;
