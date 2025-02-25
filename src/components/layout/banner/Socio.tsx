import React from "react";
import Link from "next/link";
import Image from "next/image";

import social from "public/images/service/social.png";
import social1 from "public/images/service/soc.jpg";
import social2 from "public/images/service/social1.jpg";



const  Socio= () => {
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
              <h2 className="title title-anim">Social Media</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="our-services">our-services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Social media
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
                  <Image src={social} alt="Image" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Why do we use it?</h3>
                  <p>
                  When we think of a “brand,” we think of the popular global brands. However, there is more to branding than spending millions of dollars to create global recognition for your brand like these large companies.


                  </p>
                  <p>
                  In today’s connected world, people are bombarded by businesses, products, services, promotional messages and advertisements in just about every channel. In such a cluttered marketplace, how do you stand out and create a positive image of your business with the right audience?

This is where professional branding agency plays a vital role by providing their branding services.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">The need for professional branding services</h3>
                        <p>
                        Many business owners make the mistake of only thinking of their brand after their business or products launch. Even the company logo is often forgotten. When the realization of the need for a logo finally dawns, many businesses either retain the services of freelance designers or buy a pre-designed logo online. Most believe that it does not matter. By the time reality sets in, the damage is done. You do not get a second chance to make a first impression, and your logo is often the very first thing someone will notice about your business.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={social1} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section__content-cta">
                  <div className="row gaper">

                  <div className=" col-12 col-lg-7">
                      <div className="poster-small">
                        <Image src={social2} alt="Image" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="details-group">
                        <h3 className="title-anim">Branding services for a company include</h3>
                        
                        <p>
                        1. Business, product or service name selection <br />
2. Developing a brand identity usage guidelines <br />
3. Brand messaging statements <br />
4. Brand marketing and promotion strategy <br />
5. Developing marketing collaterals <br />
6. Presentation design <br />



                        </p>
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

export default Socio;










