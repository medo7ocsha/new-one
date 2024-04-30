import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../style/shop.css";
import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: products, loading } = useGetData("products");

  const [productsData, setProductsData] = useState("products");

  const handleFiter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "dress") {
      const filteredProducts = products.filter(
        (item) => item.category === "dress"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "shirt") {
      const filteredProducts = products.filter(
        (item) => item.category === "shirt"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "shose") {
      const filteredProducts = products.filter(
        (item) => item.category === "shose"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "bages") {
      const filteredProducts = products.filter(
        (item) => item.category === "bages"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "jenes") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  console.log(products)
  return (
    <Helmet title="Shop">
      <CommonSection title="المنتجات" />

      <section>
        <Container>
          <Row>
            <Col lg="3" mb="6">
              <div className="filter__widget">
                <select onChange={handleFiter}>
                  <option>Fillter By Category</option>
                  <option value="dress">اخشاب</option>
                  <option value="shirt">لوح</option>
                  <option value="shose">اجهزه</option>
                  <option value="bags">تحف فنيه</option>
                  <option value="jenes">انتيكات</option>
                </select>
              </div>
            </Col>
            <Col lg="3" mb="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="asctending">Asctending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" mb="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {loading ? (
        <h4 className="fw-bolld">Loading......</h4>
      ) : (
        <section className="pt-0">
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1 className="text-center fs-4">لا يوجد منتجات متاحه!</h1>
              ) : (
                <ProductsList data={products} />
              )}
            </Row>
          </Container>
        </section>
      )}
    </Helmet>
  );
};

export default Shop;
