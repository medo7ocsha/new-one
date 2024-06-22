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
          مرحبًا بكم في موقع "روبابكيا" - وجهتكم الأولى لبيع وشراء الأثاث القديم
          والمستعمل
        </p>
      </div>
      <div className="container">
        <section>
          <div className="new-image">
            <img src={AboutImg} />
          </div>
          <div className="about-content">
            <h2> رؤيتنا</h2>
            <p>
              نسعى إلى خلق منصة متكاملة تتيح للأفراد إمكانية إعادة استخدام
              وتدوير الأثاث بشكل يسهم في الحفاظ على البيئة وتقليل النفايات. نؤمن
              بأن كل قطعة أثاث تستحق فرصة ثانية لتكون جزءًا من منزل جديد يحمل
              نفس الحب والتقدير.
            </p>
          </div>

          <div className="about-content">
            <h2> مهمتنا</h2>
            <p>
              تتمثل مهمتنا في توفير تجربة سلسة وممتعة لعملائنا من خلال:{" "}
              <br></br>سهولة الاستخدام: منصة بديهية تمكنكم من عرض وشراء الأثاث
              بكل يسر.<br></br> جودة المعروضات: نحرص على ضمان جودة الأثاث
              المعروض وصلاحيته للاستخدام. الأمان والثقة: نضمن عملية بيع وشراء
              آمنة وموثوقة، مع توفير دعم فني مستمر.
            </p>
          </div>

          <div className="about-content">
            <h2> خدماتنا</h2>
            <p>
              يقدم موقع "روبابكيا" مجموعة متنوعة من الخدمات تشمل: <br></br>عرض الأثاث
              للبيع: يمكن للبائعين عرض قطع الأثاث التي يرغبون في بيعها مع تفاصيل
              دقيقة وصور عالية الجودة. <br></br>شراء الأثاث: يمكن للمشترين تصفح مجموعة
              واسعة من الأثاث القديم واختيار ما يناسب أذواقهم واحتياجاتهم.<br></br> خدمات
              التوصيل: نعمل مع شركاء موثوقين لضمان توصيل الأثاث بأمان إلى وجهته
              الجديدة. <br></br>نحن في "روبابكيا" نفخر بكوننا جزءًا من رحلتكم في البحث عن
              القطع التي تضيف طابعًا فريدًا إلى منازلكم. انضموا إلينا اليوم،
              واكتشفوا عالم الأثاث العتيق بطريقة جديدة ومبتكرة.
            </p>
          </div>
        </section>
      </div>
    </Helmet>
  );
};

export default Place;
