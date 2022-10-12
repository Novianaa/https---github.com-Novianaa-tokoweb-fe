import { useEffect } from "react"
import { Helmet } from "react-helmet"
// import './styles.css'      

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container navbar-wrapper d-flex">
          <div className="navbar-left d-flex">
            <div className="navbar-left-menu color-secondary poppins-500">Toko Ikan</div>
          </div>
          <div className="navbar-center d-flex">
            <div className="navbar-center-menu ">Beranda</div>
            <div className="navbar-center-menu">Keunggulan</div>
            <div className="navbar-center-menu">Fitur Aplikasi</div>
            <div className="navbar-center-menu">Testimonial</div>
          </div>
          <div className="navbar-right d-flex ">
            <button className="btn-download background-primary d-none d-md-block d-l-none" value="">Download
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
