import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import Helmet from "../components/Helmet/Helmet";

import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ======= add product to the firebase database ========

    try {
      const docRef = await collection(db, "products");

      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        () => {
          toast.error("images not uploaded!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              caregory: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("product successfully added!");
      navigate("/dashboard/all-products");
    } catch (err) {
      setLoading(false);
      toast.error("product not added!");
    }
  };

  return (
    <Helmet title={"Add Product"}>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5 ">Loading.......</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Products</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className="form__group">
                    <span>Product title</span>
                    <input
                      type="text"
                      placeholder="Double Name"
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="Short Desc......."
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description....."
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="EGP100"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                      >
                        <option>Select Category</option>
                        <option value="dress">اثاث</option>
                        <option value="shirt">زخارف</option>
                        <option value="shose">انتيكات</option>
                        <option value="bags">لوحات</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form__group">
                      <span>Product Image</span>
                      <input
                        type="file"
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>

                  <button className="buy__btn" type="submit">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  );
};

export default AddProducts;
