import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/mial2.png";
import two from "public/images/portfolio/lac11.png";
import three from "public/images/portfolio/bella2.png";
import four from "public/images/portfolio/six3.png";
import five from "public/images/portfolio/amor4.png";
import six from "public/images/portfolio/hous11.jpg";
import seven from "public/images/portfolio/berry.png";
import dot from "public/images/portfolio/dot.png";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section className="section portfolio pb-0 fade-wrapper position-relative">
 
     
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="our-services">
                  Visual Design
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="our-services">
                 Brand Strategy
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="our-services">
                Packaging Design
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="our-services">
                Corporate Branding
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="our-services">
                Website Development
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="our-services">
                Photoshoots 
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="our-services">
                Video Productions
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="portfolio__text-slider-single" style={{ display: "flex", justifyContent: "center", textAlign: "center" , marginBottom:"20px" }}
      >
      <h2 className="h1 str"> Our Pojects
        </h2>
        </div>
      <div className="container-fluid">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
            >
              <Link href="mialma">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="mialma">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="mialma">Mi Alma</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
            >
              <Link href="lechery">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="lechery">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="lechery">Lechery</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
            >
              <Link href="bella">
                <Image src={three} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="bella">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="bella">Bellaforte</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
            >
              <Link href="thesix">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="thesix">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="thesix">The Sixscents</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
            >
              <Link href="amor">
                <Image src={five} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="amor">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="amor">Amorblue</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
            >
              <Link href="house">
                <Image src={six} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="house">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="house">House of Celebs</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="our-projects">view all work</Link>
                </h4>
                <Link href="our-projects" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 6 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(6)}
            >
              <Link href="berry">
                <Image src={seven} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="berry">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="berry">Berry Essentials</Link>
                </h4> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default PortfolioText;
