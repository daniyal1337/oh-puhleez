import React from "react";
import Link from "next/link";
import Image from "next/image";

import mark from "public/images/service/mark.png";
import mark1 from "public/images/service/mark1.jpg";
import mark2 from "public/images/service/mark2.jpg";



const  Mark= () => {
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
              <h2 className="title title-anim">Performance Marketing</h2>
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
                  Performance Marketing
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
                  <Image src={mark} alt="Image" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">What Makes It Unique?</h3>
                  <p>
                  Performance marketing has completely changed the way companies advertise and sell products. It has also impacted the way we measure the success of marketing campaigns. In the past, attribution was nearly impossible.

Today, performance marketing campaigns give you the ability to measure everything from brand reach to conversion rate down to a single ad.


                  </p>
                  <p>
                  This new age of data-driven marketing has given advertisers valuable insight into their performance, which has helped them optimize their campaigns according to the best cost per acquisition.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Measuring Success</h3>
                        <p>
                        Measurable ROI is the key to successful digital marketing. There are several ways to track performance, including the use of marketing tools.It’s important to track ROI regularly, but give your campaigns time to gather data. It’s impossible to optimize any campaign without adequate data.
                        </p>
                        <p>Thanks to new technology and advanced ad platforms, all your campaign metrics are tracked and reported for your convenience. In addition to better tracking, performance marketing is ROI-focused, which means less risk for the advertiser.</p>
                       
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={mark1} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section__content-cta">
                  <div className="row gaper">

                  <div className=" col-12 col-lg-7">
                      <div className="poster-small">
                        <Image src={mark2} alt="Image" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="details-group">
                        <h3 className="title-anim">Benefits of Performance Marketing?</h3>
                        
                        <p>
                        There are many benefits to running performance marketing campaigns, including: <br />
• Easy-to-track performance <br />
• Low risk <br />
• ROI-focused <br />
The main benefit to performance marketing is that it’s 100% measurable.  In addition to better tracking, performance marketing is ROI-focused, which means less risk for the advertiser. <br />  


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

export default Mark;














