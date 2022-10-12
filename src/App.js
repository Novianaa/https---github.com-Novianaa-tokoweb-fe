import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Slider from "react-slick";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import gplay from './Assets/gplay.png'
import fish1 from './Assets/fish-1.png'
import fish2 from './Assets/fish-2.png'
import fish3 from './Assets/fish-3.png'
import fish4 from './Assets/fish-4.png'
import hp1 from './Assets/hp-1.png'
import hp2 from './Assets/hp-2.png'
import hp3 from './Assets/hp-3.png'
import hp4 from './Assets/hp-4.png'
import Group1 from './Assets/Group1.png'
import Group2 from './Assets/Group2.png'
import Group3 from './Assets/Group3.png'
import Group4 from './Assets/Group4.png'
import Group5 from './Assets/Group5.png'
import Group6 from './Assets/Group6.png'
import Person1 from './Assets/person1.png'
import Person2 from './Assets/person2.svg'
import Person3 from './Assets/person3.svg'
import Person4 from './Assets/person4.png'
import Man from './Assets/man-courrier-JGB-1.png'
import Click from './Assets/Vector.png'
import { FaApple } from "react-icons/fa";
import { BsBoxSeam, } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    import('bootstrap')
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <title>Landing page</title>
      </Helmet>
      <Navbar />
      <main>
        <section className="hero-1 d-flex">
          <div className="hero-1-left">
            <div className="hero-1-left-header poppins-700">Kirim berbagi jenis ikan dengan mudah</div>
            <div className="hero-1-left-main poppins-500">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
            <div className="hero-1-left-button d-flex">
              <button className="hero-1-left-button-left d-flex">
                <img src={gplay} alt='google-play' />
                <div className="gplay-text">
                  <div className="gplay-text-header gilroy-500">GET IN ON</div>
                  <div className="gplay-text-main gilroy-700">Google Play</div>
                </div>
              </button>
              <button className="hero-1-left-button-right d-flex">
                <FaApple className='icon-apple' />
                <div className="apple-text">
                  <div className="apple-text-header gilroy-500">Download on the</div>
                  <div className="apple-text-main gilroy-700">App Store</div>
                </div>
              </button>
            </div>
            <div className="hero-1-left-more d-flex">
              <div className="field-more">
                <div className="count color-primary gilroy-700">1.9k+</div>
                <div className="desc gilroy-500">Active Users</div>
              </div>
              <div className="field-more">
                <div className="count color-primary gilroy-700">20+</div>
                <div className="desc gilroy-500">New Features</div>
              </div>
            </div>
          </div>
          <div className="hero-1-right">
            <img src={Group1} alt='group1' className='group1' />
            <img src={fish1} alt='fish1' className='fish1' />
            <div className='wrapper-hp1'>
              <img src={hp1} alt='hp1' className='hp1' />
            </div>
          </div>
        </section>
        <section>
          <img src={Group2} alt="group2" className='group2' />
          <div className="hero-2 d-flex">
            <div className="wrapper-hero-2 text-center ">
              <div className="wrapper-hero-2-header color-white poppins-600">Lacak Pengiriman anda</div>
              <div className="wrapper-hero-2-main color-white gilroy-500">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text </div>
              <div className="wrapper-hero-2-btn text-center">
                <input type="text" name="no" id="no" placeholder='Lacak Pengiriman' className='input-text-hero-2' />
                <button type="button" value="btn-input" className='btn-hero-2 background-secondary color-white' >Lacak</button>
              </div>
            </div>
            <div className="hero-2-line">l</div>
            <div className="wrapper-hero-2 text-center">
              <div className="wrapper-hero-2-header-right poppins-600 color-white">Cek Tarif Pengirman Anda</div>
              <div className="wrapper-hero-2-input ">
                <input type="text" name="origin" id="origin" placeholder='Origin' className='input-location1' />
                <input type="text" name="destination" id="destination" placeholder='Destination' className='input-location' />
              </div>
              <button className='btn-ongkir background-secondary color-white'>Check</button>
            </div>
          </div>
        </section>
        <section>
          <div className="container hero-3">
            <div className="hero-3-header text-center">
              <div className="hero-3-header-text poppins-700">Keunggulan kami</div>
              <div className="hero-3-header-text-main poppins-500 text-muted">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.</div>
            </div>
            <div className="wrapper-plus d-flex">
              <div className="wrapper-plus-sub text-center">
                <div className="wrapper-img-plus ">
                  <BsBoxSeam className='color-primary icon-plus' />
                </div>
                <div className="wrapper-text-header-plus poppins-600">Kirim Ke Berbagai Negara</div>
                <div className="wrapper-text-main-plus poppins-500 text-muted">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
              </div>
              <div className="wrapper-plus-sub text-center">
                <div className="wrapper-img-plus ">
                  <img src={Click} alt="clicked" />
                </div>
                <div className="wrapper-text-header-plus poppins-600">Mudah Di Gunakan</div>
                <div className="wrapper-text-main-plus poppins-500 text-muted">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
              </div>
              <div className="wrapper-plus-sub text-center">
                <div className="wrapper-img-plus ">
                  <AiOutlineSafety className='color-primary icon-plus' />
                </div>
                <div className="wrapper-text-header-plus poppins-600">Pengiriman Aman</div>
                <div className="wrapper-text-main-plus poppins-500 text-muted">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
              </div>

            </div>
          </div>
        </section>
        <section className='hero-4 d-flex'>
          <div className="hero-4-left">
            <div className="hero-4-left-text poppins-700">Berbagai Metode Pengiriman</div>
            <div className="hero-4-left-text-main poppins-500 text-muted">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</div>
          </div>
          <div className="hero-4-right">
            <img src={Group3} alt='group3' className='group3' />
            <div className="wrapper-hero-4-img">
              <img src={fish2} alt="fish2" className='fish2' />
              <img src={hp2} alt="hp2" className='hp2' />
            </div>
          </div>
        </section>
        <section className='hero-5 d-flex'>
          <div className="hero-5-left">
            <img src={Group4} alt='group4' className='group4' />
            <div className="wrapper-hero-5-img d-flex">
              <img src={hp3} alt="hp3" className='hp3' />
              <img src={fish3} alt="fish3" className='fish3' />
            </div>
          </div>
          <div className="hero-5-right">
            <div className="hero-5-right-text poppins-700">Lacak status pengiriman
              anda</div>
            <div className="hero-5-right-text-main poppins-500 text-muted">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown.
              A Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
          </div>
        </section>
        <section className='hero-6 d-flex'>
          <div className="hero-6-left">
            <div className="hero-6-left-text poppins-700">Cek schedule pengiriman anda</div>
            <div className="hero-6-left-text-main poppins-500 text-muted">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</div>
          </div>
          <div className="hero-6-right">
            <img src={Group5} alt='group5' className='group5' />
            <div className="wrapper-hero-6-img">
              <img src={fish4} alt="fish4" className='fish4' />
              <img src={hp4} alt="hp4" className='hp4' />
            </div>
          </div>
        </section>
        <section>
          <div className="container testimonial">
            <div className="testimonial-header text-center">
              <div className="testimonial-header-text gilroy-700">Testimonial</div>
              <div className="testimonial-header-text-main gilroy-500">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text </div>
            </div>
            <div className="wrapper-list-testi">
              <Slider {...settings}>
                <div className='testi-card'>
                  <div className='testi-detail d-flex'>
                    <img src={Person1} alt="person" className='person ' />
                    <div className="user-detail">
                      <h5>Floyd Miles</h5>
                    </div>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className='testi-card'>
                  <div className='testi-detail d-flex'>
                    <img src={Person2} alt="person" className='person ' />
                    <div className="user-detail">
                      <h5>Ronald Richards</h5>
                    </div>
                  </div>
                  <p>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className='testi-card'>
                  <div className='testi-detail d-flex'>
                    <img src={Person3} alt="person" className='person ' />
                    <div className="user-detail">
                      <h5>Harry Styles</h5>
                    </div>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className='testi-card'>
                  <div className='testi-detail d-flex'>
                    <img src={Person4} alt="person" className='person ' />
                    <div className="user-detail">
                      <h5>Harry Styles</h5>
                    </div>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>

              </Slider>
            </div>
          </div>
        </section>
        <section className='downloader'>
          <img src={Group6} alt="Group6" className='Group6' />
          <div className=" container wrapper-downloader d-flex">
            <div className="wrapper-downloader-left">
              <div className="hero-1-left-header poppins-700 color-white">Available and Download Anytime!</div>
              <div className="hero-1-left-main poppins-500 color-white">A Lorem Ipsum is simply dummy text of the printing and </div>
              <div className="hero-1-left-button d-flex">
                <button className="hero-1-left-button-left d-flex">
                  <img src={gplay} alt='google-play' />
                  <div className="gplay-text">
                    <div className="gplay-text-header gilroy-500">GET IN ON</div>
                    <div className="gplay-text-main gilroy-700">Google Play</div>
                  </div>
                </button>
                <button className="hero-1-left-button-right d-flex">
                  <FaApple className='icon-apple' />
                  <div className="apple-text">
                    <div className="apple-text-header gilroy-500">Download on the</div>
                    <div className="apple-text-main gilroy-700">App Store</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="wrapper-downloader-right text-center">
              <img src={Man} alt='man' className='img-man' />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
