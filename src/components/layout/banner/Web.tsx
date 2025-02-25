import React from "react";
import Link from "next/link";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import thumbtwo from "public/images/service/thumb-two.png";
import website from "public/images/service/website.jpg";
import website2 from "public/images/service/website2.png";

const Web = () => {
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
                <h2 className="title title-anim">Website Designing</h2>
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
                      Website Designing
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
                    <Image src={website2} alt="Image" />
                  </div>
                  <div className="details-group section__cta text-start">
                    <h3 className="title-anim">How the team at Oh Puhleeez Help! </h3>
                    <p>
                    As the backbone of your online presence, every type of communication, piece of content, or advertisement that you put online will drive the consumer back to your website. As such, it’s important that your website gives consumers a clear idea of what your brand is about and what types of products or services you offer.Your website serves as that “home base” where you can send customers when they want to make a purchase or learn more about a particular product or service you offer.
                    </p>
                    
                  </div>
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">Here are the different types of websites</h3>
                          <p>
                          1. Homepages <br />
                          2. Magazine websites <br />
                          3. E-commerce websites <br />
                          4. Blogs <br />
                          5. Portfolio website <br />
                          6. Landing pages <br />
                          7. Social media websites <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image src={website} alt="Image" />
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

export default Web;