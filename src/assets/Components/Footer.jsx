import React from "react";
import "../css/footer.css";
import envelope from "../img/envelope-outline.svg";
import footerImage from "../img/sofa.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerInfo">
          <div className="newsLetter">
            <div className="envelope">
              <img src={envelope} alt="" />
              <span>Subscribe to Newsletter</span>
            </div>
            <form className="footerBtns">
              <input id="name" type="text" placeholder="Enter your name..." />
              <input id="email" type="text" placeholder="Enter your email..." />
              <button id="submit">
                <FaTelegramPlane />
              </button>
            </form>
          </div>
          <div className="footerImg">
            <img src={footerImage} alt="" />
          </div>
        </div>
        <div className="footerNav">
          <div className="footerIcon">
            <h3>
              Furni <span>.</span>
            </h3>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <ul className="footerSocials">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="footerBody">
          <ul class="footerLinks">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <ul className="footerLinks">
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Knowledge Base</a>
            </li>
            <li>
              <a href="#">Live chat</a>
            </li>
          </ul>
          <ul class="footerLinks">
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
            <li>
              <a href="#">Leadership</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <ul class="footerLinks">
            <li>
              <a href="#">Nordic Chair</a>
            </li>
            <li>
              <a href="#">Kruzo Aero</a>
            </li>
            <li>
              <a href="#">Ergonomic Chair</a>
            </li>
          </ul>
          </div>
        </div>
        <div className="copyright">
          <h5>
            Copyright ©2024. All Rights Reserved. — Designed with love by
            Untree.co Distributed By <br /> ThemeWagon
          </h5>
          <div id="privacy">
            <p>
              <a href="#">Terms & Conditions</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
