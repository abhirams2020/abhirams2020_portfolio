import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import {
  SiLeetcode
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import {ImPhone} from "react-icons/im"
import {GrMail} from "react-icons/gr";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const resumeLink =
  "https://raw.githubusercontent.com/abhirams2020/abhirams2020_portfolio/main/src/Assets/resume.pdf";

function Contacts() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="contact-about-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="contact-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                How to <span className="purple"> Contact </span> me?
              </h1>
              <p className="contact-about-body">
                <b className="purple"> E-Mail : </b> abhirams2020@gmail.com <br></br>
                <b className="purple">Phone  : </b> +91 8921180389 <br></br>
                <b className="purple">Address : </b> Narayaneeyam, Chempazhanthy, Trivandrum
              </p>
            </Col>
            {/* <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col> */}
          </Row>
          <Row>
            <Col md={12} className="contact-about-social">              
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <h1><span className="purple">FIND</span> ME ON</h1>

              <ul className="contact-about-social-links">
                <li className="social-icons">
                  <a
                    href="mailto: abhirams2020@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  contact-social-icons"
                  >
                    <GrMail />
                  </a>
                </li>   
                <li className="social-icons">
                  <a
                    href="tel: +918921180389"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  contact-social-icons"
                  >
                    <ImPhone />
                  </a>
                </li>   
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/abhirams2020/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  contact-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>              
                <li className="social-icons">
                  <a
                    href="https://github.com/abhirams2020"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  contact-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                {/* <li className="social-icons">
                  <a
                    href="https://leetcode.com/abhirams2020"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  contact-social-icons"
                  >
                    <SiLeetcode />
                  </a>
                </li> */}
                {/* <li className="social-icons">
                  <a
                    href="https://twitter.com/abhirams20201"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  contact-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contacts;