import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="visual_id">Visual Identity Design
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Logo</li>
                        <li>Fonts</li>
                        <li>Colors</li>
                        <li>Shapes</li>
                        <li>Branding</li>
                      </ul>
                      <div className="cta">
                        <Link href="visual_id">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          {/* <Link href="service-single">Brand Strategy</Link> */}
                          <Link href="strategy">Brand Strategy</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Market Research</li>
                        <li> Brand Positioning</li>
                        <li> Competitive Analysis</li>
                        <li>Brand Messaging</li>
                        <li>Target Audience</li>
                      </ul>
                      <div className="cta">
                        <Link href="strategy">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          {/* <Link href="service-single"> Packaging Design</Link> */}
                          <Link href="design"> Packaging Design</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Label Design</li>
                        <li>Eco-friendly Packaging</li>
                        <li>Structural Design</li>
                        <li>Retail Packaging</li>
                        <li>Custom Packaging</li>
                      </ul>
                      <div className="cta">
                        <Link href="design">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="website"> Website Development</Link>
                        </h4>

                      </div>
                      <ul>
                        <li> UI/UX Design</li>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>SEO Optimization</li>
                        <li>Mobile Responsiveness</li>
                      </ul>
                      <div className="cta">
                        <Link href="website">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="corporate">Corporate Branding</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Brand Awareness</li>
                        <li>Brand Reputation</li>
                        <li>Product Line Extension</li>
                        <li>Advertising Strategy</li>
                        <li>Corporate Identity</li>
                      </ul>
                      <div className="cta">
                        <Link href="corporate">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          06
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>

                    
                          <Link href="photoshoot">Photoshoots & Video Productions</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Photography</li>
                        <li>Commercial Videos</li>
                        <li>Social Media Content</li>
                        <li>Editing & Retouching</li>
                        <li>Studio Setup</li>
                      </ul>
                      <div className="cta">
                        <Link href="photoshoot">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          07
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>

                    
                          <Link href="advertising">Advertising Agency</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Photography</li>
                        <li>Commercial Videos</li>
                        <li>Social Media Content</li>
                        <li>Editing & Retouching</li>
                        <li>Studio Setup</li>
                      </ul>
                      <div className="cta">
                        <Link href="advertising">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          08
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>

                    
                          <Link href="social">Social Media</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Photography</li>
                        <li>Commercial Videos</li>
                        <li>Social Media Content</li>
                        <li>Editing & Retouching</li>
                        <li>Studio Setup</li>
                      </ul>
                      <div className="cta">
                        <Link href="social">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          09
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>

                    
                          <Link href="marketing">Performance marketing</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Photography</li>
                        <li>Commercial Videos</li>
                        <li>Social Media Content</li>
                        <li>Editing & Retouching</li>
                        <li>Studio Setup</li>
                      </ul>
                      <div className="cta">
                        <Link href="marketing">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          10
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>

                    
                          <Link href="OnlinePrPage">Online PR</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Photography</li>
                        <li>Commercial Videos</li>
                        <li>Social Media Content</li>
                        <li>Editing & Retouching</li>
                        <li>Studio Setup</li>
                      </ul>
                      <div className="cta">
                        <Link href="OnlinePrPage">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          11
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>

                    
                          <Link href="search">Search Engine</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Photography</li>
                        <li>Commercial Videos</li>
                        <li>Social Media Content</li>
                        <li>Editing & Retouching</li>
                        <li>Studio Setup</li>
                      </ul>
                      <div className="cta">
                        <Link href="search">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          12
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>

                    
                          <Link href="startup">Startup Assistance</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Photography</li>
                        <li>Commercial Videos</li>
                        <li>Social Media Content</li>
                        <li>Editing & Retouching</li>
                        <li>Studio Setup</li>
                      </ul>
                      <div className="cta">
                        <Link href="startup">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                
                
                
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
