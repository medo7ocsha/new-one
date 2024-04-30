import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import "../style/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero4.png";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import offerImg from "../assets/images/offer.png";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [dressProducts, setDressProducts] = useState([]);
  const [shoseProducts, setShoseProducts] = useState([]);
  const [populerProducts, setPopulerProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "dress"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredDressProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredShoseProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopulerProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setDressProducts(filteredDressProducts);
    setShoseProducts(filteredShoseProducts);
    setPopulerProducts(filteredPopulerProducts);
  }, [products]);

  console.log(products);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">افخم واجمل القطع الاثاث القديم </p>
                <h2>اجعل التصميم الداخلي الخاص بك أكثر ابداعا وحداثة</h2>
                <p>
                نحن هنا في دلتا لدينا أفضل المنتجات لتجعلك سعيدا طوال الوقت 
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">تسوق الان</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">المنتجات</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductsList data={products} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" mb="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-black fs-6 mb-2">عروض خاصه</h4>
                <h3 className="text-black fs-5 mb-3">From Delta</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">قم بزياره المتجر</Link>
              </motion.button>
            </Col>

            <Col lg="6" mb="12" className="text-end offer__img">
              <img src={offerImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">احدث المنتجات</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductsList data={products} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
