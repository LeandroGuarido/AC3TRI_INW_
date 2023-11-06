import "bootstrap/dist/css/bootstrap.min.css";
import NavbarD from "../components/navbar";
import Footer from "../components/footer";

function Sobre() {
  return (
    <>
      <NavbarD />
      <div className="sobre">
        <h1>Sobre</h1>
        <p className="sobremim">
        perfumes receba
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Sobre;
