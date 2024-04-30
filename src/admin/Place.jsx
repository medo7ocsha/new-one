import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../style/checkout.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";

const Place = () => {
  return (
    <Helmet title={"من نحن"}>
      <CommonSection title="من نحن" />
     <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Biling Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter Your Name" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter Your Email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone Number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Home number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  ToTal Qty: <span> items</span>
                </h6>
                <h6>
                  Subtotal: <span>EGP</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> free shipping
                  </span>
                  <span>EGP0</span>
                </h6>

                <h4>
                  Total Cost: <span>EGP</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Place;
