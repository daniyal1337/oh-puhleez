import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo" style={{width:"30%"}}>
                    <Link href="/" aria-label="go to home"  style={{ maxWidth: "20%" }}>
                      <Image style={{maxWidth:"250%"}} src={logoSrc} priority alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                      <button>
  <Link href="/">Home</Link>
</button>
                        
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                      
                            <Link href="about-us">About us</Link>
                          </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu navbar__sub-menu--lg">
                          <li>
                            <Link href="visual_id">Visual identity design</Link>
                          </li>
                          <li>
                            <Link href="strategy">
                              Brand Strategy
                            </Link>
                          </li>
                          <li>
                            <Link href="design">Package Design</Link>
                          </li>
                          <li>
                            <Link href="website">
                              Website Development
                            </Link>
                          </li>
                          <li>
                            <Link href="corporate">Corporate Branding</Link>
                          </li>
                          <li>
                            <Link href="photoshoot">
                              Photoshoot and Video Production
                            </Link>
                          </li>
                          <li>
                            <Link href="advertising">Advertising Agency</Link>
                          </li>
                          <li>
                            <Link href="social">
                              Social Media
                            </Link>
                          </li>
                          <li>
                            <Link href="marketing">Performance Marketing</Link>
                          </li>
                          <li>
                            <Link href="OnlinePrPage">
                              Online PR
                            </Link>
                          </li>
                          <li>
                            <Link href="search">
                             Search Engine
                            </Link>
                          </li>
                          <li>
                            <Link href="startup">
                              Start up 
                            </Link>
                          </li>
                          
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                          <Link href="our-projects"> Our Projects</Link>
                        </button>
                        
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                          <Link href="faq">Careers</Link>
                        </button>
                        
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                         <Link href="http://blog.ohpuhleeez.com/">Blog</Link>
                        </button>
                        
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
