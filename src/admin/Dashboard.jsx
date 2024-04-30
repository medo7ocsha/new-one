import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/dashboard.css";

import Helmet from "../components/Helmet/Helmet";

import useGetData from "../custom-hooks/useGetData";

function Dashboard() {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");
  const { data: orders } = useGetData("orders");

  return (
    
   <>
   <Helmet title={"Dashboard"}>
      <section>
      
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Total Sales</h5>
                <span>EGP 0</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="order__box">
                <h5>Orders</h5>
                <span>{orders.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5>Total Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </Helmet>
    </>
    
  );
}

export default Dashboard;
