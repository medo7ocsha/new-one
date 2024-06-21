import React from "react";
import "../style/About.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";

import CommonSection from "../components/UI/CommonSection";
// import "../style/About.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";
import AboutImg from "../assets/images/ana.jpg";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Place = () => {
  return (
    <Helmet title={"من نحن"}>
      <CommonSection title="من نحن" />
      <div className="heading">
        <h1>من نحن ؟ </h1>
        <p>
        نحن موقع روبابكيا احد اجدد المواقع المختصه في بيع الاثاث والتحف القديمه ياسرع وسال البيع و اجود المنتجات وافضل الخدمات
        </p>
      </div>
      <div className="container">
        <section>
          <div className="new-image">
            <img src={AboutImg} />
          </div>
          <div className="about-content">
            <h2> we will have it or we not i dont know</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam
              minima esse eveniet possimus ullam unde eligendi necessitatibus
              eum assumenda nemo, culpa eius iusto officiis consequatur fuga
              sequi suscipit architecto.
            </p>
            <button className="read-more" >تعرف علي المزيد</button>
          </div>
        </section>
      </div>
    </Helmet>
  );
};

export default Place;
