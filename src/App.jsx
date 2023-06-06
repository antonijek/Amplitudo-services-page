import "./App.css";
import Header from "./components/header/Header";
import MainTitle from "./components/titles/MainTitle";
import Introduction from "./components/introduction/Introduction";
import Products from "./components/products/Products";
import ContactUs from "./components/contactUs/ContactUs";
import Developments from "./components/developments/Developments";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <MainTitle text="Software development" />
      <Introduction />
      <Products />
      <ContactUs />
      <Developments />
      <Footer />
    </>
  );
}

export default App;
