import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  CB - 165, First Floor, Ring Road,
Naraina, New Delhi-110028
                </Link>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +91 9999 848 160
                </Link>
                <Link href="mailto:info.ohpuhleeez@gmail.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  mail@ohpuhleeez.com
info.ohpuhleeez@gmail.com
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="contact-us" className="btn btn--secondary">
                  book a call now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>discover</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="our-projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link href="our-services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="faq">Careers</Link>
                  </li>
                  <li>
                    <Link href="http://blog.ohpuhleeez.com/">Blog</Link>
                  </li>
                  <li>
                    <Link href="contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span>  | Oh! Puhleeez Branding Agency{" "}
                      
                     
(a Division of Kundra Media & Company)
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/ohpuhleeez" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://x.com/OhPuhleeez" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCcWgld5oDzEShWgRAagFs_A?view_as=subscriber" target="_blank">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link href="https://www.instagram.com/ohpuhleeez/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
