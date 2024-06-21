import React from "react";
import "../style/About.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="text-content">
            <h1>أفضل الخدمات العقارية بأيدي أمهر الخبراء</h1>
            <p>اطلع على وحدتك قبل أن تشتريها</p>
            <p>
              تصفح مشاريعنا المميزة .. احجز وحدتك .. استلم مفتاح منزلك في نفس
              اليوم
            </p>
            <button>اكتشف المزيد</button>
          </div>
          <div className="illustration">
            {/* Insert living room illustration here */}
          </div>
        </section>
        <section className="features">
          {/* Insert feature icons with descriptions here */}
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
