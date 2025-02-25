import React from "react";
import Link from "next/link";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import thumbtwo from "public/images/service/thumb-two.png";
import visual1 from "public/images/service/visual3.png";
import visual2 from "public/images/service/visual.jpg";

const Visual = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        className="cmn-banner service-single-banner bg-img"
        style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
      >
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-5 col-xl-7">
              <div className="text-center text-lg-start">
                <h2 className="title title-anim">Visual Identity Design</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house"></i>
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="our-services">Our Services</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Visual Identity Design
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="slide-group justify-content-center justify-content-lg-end">
                <Link href="service-single" aria-label="previous item" className="slide-btn">
                  <i className="fa-light fa-angle-left"></i>
                </Link>
                <Link href="service-single" aria-label="next item" className="slide-btn">
                  <i className="fa-light fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="section service-details fade-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="service-details__slider">
                <div className="service-details__slider-single">
                  <div className="poster fade-top">
                    <Image  src={visual1} alt="Image" />
                  </div>
                  <div className="details-group section__cta text-start">
                    <h3 className="title-anim">Transform Your Brand with a Unique Visual Identity</h3>
                    <p>
                      It is a long established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The point of using
                      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                      making it look like readable English.
                    </p>
                    <h3 className="title-anim">Why Choose Us</h3>
                    <p>
                    ✔ Custom & Unique Designs – Tailored specifically to your business needs. <br />
                    ✔ Experienced Designers – Skilled professionals with a creative vision. <br />
                    ✔ Brand-Centric Approach – We focus on what makes your brand stand out. <br />
                    ✔ Seamless Integration – Ensuring consistency across all branding materials. <br />
                    </p>
                  </div>
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">Our Visual Identity Services</h3>
                          <p>
                          ✅ Logo Design – A powerful, custom-designed logo that represents your brand identity. <br />
                          ✅ Brand Color Palette – Carefully selected colors that evoke emotions and ensure consistency. <br />
                          ✅ Typography & Fonts – Professional and legible fonts that reflect your brand’s tone. <br />
                          ✅ Brand Guidelines – A comprehensive guide for maintaining consistency across platforms. <br />
                          ✅ Stationery Design – Business cards, letterheads, and other branded materials. <br />
                          ✅ Social Media Branding – Optimized visuals for social media platforms. <br />
                          ✅ Website & Digital Assets – Consistent brand visuals for your online presence. <br />
                          </p>
                          
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image src={visual2} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Visual;