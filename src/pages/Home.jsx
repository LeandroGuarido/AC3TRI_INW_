import NavbarD from "../components/navbar";
import Footer from "../components/footer";

import Intro1 from "../assets/images/landing1.webp";
import Intro2 from "../assets/images/landing 2.jpg";
import Intro3 from "../assets/images/landing3.png";

import perf1 from "../assets/images/212_black.jpg";
import perf2 from "../assets/images/dior.webp";
import perf3 from "../assets/images/ferrari.jpg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const produtos = [
  {
    nome: "212 black",
    preco: "R$ 256,99",
    img: perf1,
  },
  {
    nome: "dior",
    preco: "R$ 390,00",
    img: perf2,
  },
  {
    nome: "Ferrari",
    preco: "R$ 150,00",
    img: perf3,
  },
];
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavbarD />

      <section>
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="tadeu">Bleik perfumes</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro3} alt="Second slide" />

            <Carousel.Caption>
              <h3 className="tadeu">Bleik perfumes</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro2} alt="Third slide" />

            <Carousel.Caption>
              <h3 className="tadeu">Bleik perfumes</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="Produtos row ha">
          {produtos.map(({ nome, preco, img }) => (
            <Card style={{ width: "18rem" }} key={nome}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Text className="e">{nome}</Card.Text>
                <Card.Title className="f">{preco}</Card.Title>
                <Button variant="primary">Adicionar ao carrinho</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
