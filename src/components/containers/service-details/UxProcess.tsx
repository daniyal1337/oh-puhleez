import React, { useState } from "react";

const UxProcess = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Our Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">working on our Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Brand & Audience Research 🎯</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We start by understanding your brand’s vision, mission, and target audience. Through competitor analysis and market research.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4> Strategy & Content Planning 📝
                    </h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  A well-defined strategy is crucial for success. We develop a customized marketing plan, including SEO, content marketing, social media, and paid advertising.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Wireframing</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    To deliver the best experience, we thoroughly research and
                    evaluate your product and its users to create a strategic
                    foundation for the brand.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Creative Design & Development 🎨</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  Visual appeal matters! Our team designs compelling graphics, engaging videos, and interactive web content that align with your brand identity.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Campaign Execution & Optimization 🚀</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We launch data-driven campaigns on various platforms, ensuring they reach the right audience at the right time.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Performance Tracking & Engagement 📊</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We continuously monitor analytics, user behavior, and campaign performance. Insights from data help us to boost engagement, and maximize ROI.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>

              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 6 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Business Growth & Conversions 📈</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  The ultimate goal is tangible results. Our process ensures increased brand awareness, lead generation, and improved conversion rates.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 6 ? -1 : 6)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxProcess;
