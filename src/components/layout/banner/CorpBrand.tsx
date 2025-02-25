import React from "react";
import Link from "next/link";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import thumbtwo from "public/images/service/thumb-two.png";
import corporate from "public/images/service/corporate.png";
import corporate2 from "public/images/service/corporate2.jpg";


const CorpBrand = () => {
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
                <h2 className="title title-anim">Corporate Branding</h2>
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
                      Corporate Branding
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
                    <Image src={corporate} alt="Image" />
                  </div>
                  <div className="details-group section__cta text-start">
                    <h3 className="title-anim">Build a Strong, Trustworthy Corporate Identity</h3>
                    <p>
                    A well-defined corporate brand enhances credibility, fosters trust, and creates a lasting impression. At Oh Puhleeez, we develop corporate branding strategies that establish a strong market presence, align with your business values, and drive long-term success.
                    </p>
                    <p>
                    ✔ Strategic Approach – Customized solutions to fit your corporate goals. <br />
                    ✔ Experienced Branding Experts – Industry professionals with proven expertise. <br />
                    ✔ Consistent & Cohesive Branding – Unifying your brand’s presence across all touchpoints. <br />
                    ✔ End-to-End Solutions – Comprehensive corporate branding services from strategy to execution. <br />
                    </p>
                  </div>
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">Our Corporate Branding Services</h3>
                          
                          <p>
                          ✅ Corporate Identity Development – Creating a consistent and professional brand image. <br />
                          ✅ Brand Positioning & Messaging – Establishing a clear and compelling corporate voice. <br />
                          ✅ Logo & Visual Identity – Designing corporate logos and branding assets. <br /> 
                          ✅ Brand Guidelines – Ensuring consistency across all company materials. <br />
                          ✅ Internal Branding – Aligning company culture with brand values. <br />
                          ✅ Rebranding & Brand Refresh – Modernizing your brand with core identity. <br />
                         
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image src={corporate2} alt="Image" />
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

export default CorpBrand;