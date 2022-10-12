import React from "react"
import ImageCompany from '../Assets/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main container d-flex">
          <div className="footer-profile">
            <div className="footer-profile-img">
              <img src={ImageCompany} alt="logo" className="wrapper-img-company" />
            </div>
            <div className="footer-profile-text gilroy-500">
              A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.
            </div>
            <div className="footer-profile-sns d-flex">
              <div className="footer-profile-sns-icon"><FaFacebookF /></div>
              <div className="footer-profile-sns-icon"><FaTwitter /> </div>
              <div className="footer-profile-sns-icon"><FaInstagram /></div>

            </div>
          </div>
          <div className="footer-helper">
            <div className="footer-helper-header gilroy-700">Menu Bantuan</div>
            <div className="footer-helper-menu gilroy-400">
              <div className="footer-helper-sub-menu">Keunggulan</div>
              <div className="footer-helper-sub-menu">Fitur Aplikasi</div>
              <div className="footer-helper-sub-menu">Testimoni</div>
            </div>
          </div>
          <div className="footer-kontak">
            <div className="footer-kontak-header gilroy-700">Informasi kontak</div>
            <div className="footer-kontak-menu gilroy-400">
              <div className="footer-kontak-sub-menu">0812-9797-1227</div>
              <div className="footer-kontak-sub-menu">0812-9797-1227</div>
              <div className="footer-kontak-sub-menu">Jbgtranshipping@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="footer-closing text-center">
          All rights reserved@2022
        </div>
      </div>
    </>
  )
}
export default Footer