import React from "react";
import logo2 from "../../pictures/logo2.png";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <div className="logo-heder">
        <div className="logo-circle"/>
        <div className="logo-text">MOVIESinfo</div>
         </div>
        <div className="workproject">Дипломный проект</div>
        <div className="about-made">
        <div className="made">Made by </div>
        <div className="madename">Набережный Евгений</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
