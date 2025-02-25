import React from "react";
import Link from "next/link";
import Image from "next/image";
import adver from "public/images/service/adver.png";
import adver3 from "public/images/service/adver2.jpg";
import adver2  from "public/images/service/adver3.jpg";

const Advert= () => {
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
              <h2 className="title title-anim">Advertising Agency</h2>
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
                    Advertising agency
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
                  <Image src={adver} alt="Image" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Why do we use it?</h3>
                  <p>
                  Oh! Puhleeez Advertising and Branding Agency has remained at the cutting-edge of communication solutions for both Private and Public Sector at large. Having honed its Brand excellence over years, the Agency is presently armed with a handpicked pool of talents in Design, Copy and Strategy who are eager to fire for your Brands and Services across Print, Television, Digital, Events and Outdoor frontiers.


                  </p>
                  <p>
                  We help you craft your message to speak to your public through passion, laughter and problem solving. We care a little too much and we pride ourselves in being your brand partner.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">What happens when you choose us as your advertising agency?</h3>
                        <p>
                        We here at Oh! Puhleeez as an advertising agency, design and produce the best advertising materials which include: research, design, layout, preliminary and final art preparation, placing or arranging for advertising: creative consultation, coordination, direction, and supervision; script writing and copywriting; editing; and account management services. Simplifying the work to such an extent makes advertising seem like a piece of cake!
                        </p>
                        
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={adver2} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section__content-cta">
                  <div className="row gaper">

                  <div className=" col-12 col-lg-7">
                      <div className="poster-small">
                        <Image src={adver3} alt="Image" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="details-group">
                        <h3 className="title-anim">What all advertisement services does Oh! Puhleeez offer?</h3>
                        
                        <p>
                     
                        1. Digital Advertising: Advertisements displayed over the internet and digital devices.      <br />
                        2. Print Advertising: Newspaper, magazines, & brochure advertisements, etc.      <br />
                        3. Broadcast Advertising: Television and radio advertisements.      <br />
                        4. Outdoor Advertising: Hoardings, banners, flags, wraps, etc.     <br />
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

export default Advert;







