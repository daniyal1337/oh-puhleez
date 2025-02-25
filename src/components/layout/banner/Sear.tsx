import React from "react";
import Link from "next/link";
import Image from "next/image";

import search from "public/images/service/search.png";
import search2 from "public/images/service/search2.jpg";
import search3 from "public/images/service/search3.jpg";

const  Sear= () => {
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
              <h2 className="title title-anim">Search Engine</h2>
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
                  Search Engine
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
                  <Image src={search} alt="Image" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Why do we use it?</h3>
                  <p>
                  No matter what your situation is, if you have a website for your company, SEO is important. Whether your business is new or old, struggling or successful, small or large, SEO is crucial to your online success. In fact, even if you are the only one in your industry, SEO is still important.


                  </p>
                  
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Why Oh Puhleeez is best for SEO?</h3>
                        <p>
                        Oh Puhleeez strives to push the client's website above competition by using the critical component of online marketing, i.e., SEO. We help the clients' brand rank on the first page of Google that processes billions of search results every day. Our team uses modern SEO services backed by digital practices of Optimization to increase inbound traffic and rankings for keywords that drive business to their site.
                        </p>
                       
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={search2} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section__content-cta">
                  <div className="row gaper">

                  <div className=" col-12 col-lg-7">
                      <div className="poster-small">
                        <Image src={search3} alt="Image" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="details-group">
                        <h3 className="title-anim">The factors that determine the success of SEO are:</h3>
                        
                        <p>
                        1. The website’s stage in the growth process <br />
2. How visitors are reacting to the website <br />
3. What keywords the business wants to rank for <br />
4. The amount of competition for those keywords <br />
5. Whether or not any SEO has been done in the past <br />
6. Whether or not the site is under any kind of Google penalty  
A bridged approach <p>
                  Every website has different needs, when it comes to SEO. But it’s rarely the business .
                  </p>


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

export default Sear;















