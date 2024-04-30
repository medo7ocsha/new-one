import React from "react";
import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import "../style/cart.css"
import { motion } from "framer-motion";

import useGetData from "../custom-hooks/useGetData";
import { toast } from "react-toastify";

const Allproducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  console.log(productsData)

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h4 className="py-5 text-center fw-bold ">Loading......</h4>
                ) : (
                  productsData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.description}</td>
                      <td>EGP{item.price}</td>
                      <td>
                        <motion.i
                          whileTap={{ scale: 1.2 }}
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                          class="ri-delete-bin-line"
                        ></motion.i>
                    </td>
                    </tr>
              ))
                )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
    </section >
  );
};

export default Allproducts;


