import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">   

          <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>

            <div className="logo">
              <Link href="/"  style={{ maxWidth: "20%" }}>
                <Image src={logo} alt="Image" title="Image" priority />
              </Link>
            </div>
            
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
              <li className="navbar__item nav-fade" onClick={closeNav}>
  <Link href="/">Home</Link>
</li>
                
                <li className="navbar__item nav-fade">
                  <Link href="about-us">About Us</Link>
                </li>
                


                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "home"
                    )}`}
                    onClick={() => handleSubmenu("home")}
                  >
                    Services
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("home")}`}>
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
                <li className="navbar__item nav-fade">

                <Link href="our-projects">Projects</Link>
                </li>
                <li className="navbar__item nav-fade">

                  <Link href="faq">Careers</Link>
                </li>
                <li className="navbar__item nav-fade">

                  {/* <Link href="blog">Blog</Link> */}
                  <Link href="http://blog.ohpuhleeez.com/">Blog</Link>
                </li>
                <li className="navbar__item nav-fade">

                  <Link href="contact-us">Contact us</Link>
                </li>


                
                
              </ul>
            </div>
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="contact-us" className="btn btn--secondary">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/ohpuhleeez"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://x.com/OhPuhleeez"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCcWgld5oDzEShWgRAagFs_A?view_as=subscriber"
              target="_blank"
              aria-label="share us on youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link
              href="https://www.instagram.com/ohpuhleeez/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
