import Header from "./components/Header";
import "./app.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header
        logoName="Mainuddin Sani"
        home="Home"
        about="About"
        service="service"
        contact="Contact"
      />
      <Content />
      <Footer />
    </>
  );
}

export default App;
