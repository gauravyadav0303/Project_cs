import React, { useState } from "react";
import dribble from '../assets/images/dribble.png';
import behance from '../assets/images/behance.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import youtube from '../assets/images/youtube.png';
import logoSide from '../assets/images/logo_sidebar.png';
import logo from '../assets/images/logo.png';

function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    console.log("toggleOffcanvas");
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  const addMagnetEffect = () => {
    const menuIcon = document.getElementById("open_offcanvas");
    const logoImage = document.querySelector(".header__logo img");

    menuIcon.classList.add("magnet-effect");
    logoImage.classList.add("magnet-effect");
  };

  const removeMagnetEffect = () => {
    const menuIcon = document.getElementById("open_offcanvas");
    const logoImage = document.querySelector(".header__logo img");

    menuIcon.classList.remove("magnet-effect");
    logoImage.classList.remove("magnet-effect");
  };
  return (
    <header className={`header_area ${isOffcanvasOpen ? "open" : ""}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="#">
            <img
              alt="Site Logo"
              width="33"
              height="100"
              src={logoSide}
            />
            <img
              style={{ display: "none" }}
              alt="Moibile Logo"
              width="100"
              height="33"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsite-logo-white-2.c8e48a63.png&amp;w=256&amp;q=75"
            />
          </a>
        </div>
        <div className="header__nav-icon">
          <button id="open_offcanvas"  onMouseEnter={addMagnetEffect}
        onMouseLeave={removeMagnetEffect} onClick={toggleOffcanvas}>
            <img
              alt="Menubar Icon"
              width="22"
              height="22"
              decoding="async"
              data-nimg="1"
              srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-white.5dba0f21.png&w=32&q=75"
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-white.5dba0f21.png&w=32&q=75"
            />
          </button>
        </div>
        <div className="header__support">
          <p>
            Support center <a href="#">+91 90235 74683</a>
          </p>
        </div>
      </div>
      <div className={`offcanvas__area ${isOffcanvasOpen ? "open" : ""}`}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <a href="#">
                <img
                  alt="Offcanvas Logo" 
                  src={logo}
                  style={{
                    color: "transparent",
                    width: "12rem",
                    height: "auto",
                  }}
                  onMouseEnter={addMagnetEffect}
                  onMouseLeave={removeMagnetEffect}
                />
              </a>
            </div>
            <div className="offcanvas__social">
              <h3 className="social-title">Follow Us</h3>
              <div style={{width: '37%', border: '2px #C9F31D solid' , marginTop: "-0.5rem",marginBottom: "1.7rem"}}></div>
              <ul>
                <li>
                  <img src={dribble} alt="dribble" />
                  <a href="#">Dribbble</a>
                </li>
                <li>
                <img src={behance} alt="behance" />
                  <a href="#">Behance</a>
                </li>
                <li>
                <img src={instagram} alt="instagram" />
                  <a href="#">Instagram</a>
                </li>
                <li>
                   <img src={facebook} alt="facebook" />
                  <a href="#">Facebook</a>
                </li>
                <li>
                   <img src={twitter} alt="twitter" />
                  <a href="#">Twitter</a>
                </li>
                <li>
                   <img src={youtube} alt="youtube" />
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title">
                  <li>
                    <div className="header_title">
                      <a href="#">
                        <div className="menu-text">
                          <span>H</span>
                          <span>O</span>
                          <span>M</span>
                          <span>E</span>
                        </div>
                      </a>
                      <div className="arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <a href="#">
                        <div className="menu-text">
                          <span>A</span>
                          <span>B</span>
                          <span>O</span>
                          <span>U</span>
                          <span>T</span>
                        </div>
                      </a>
                      <div className="arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <a href="#">
                        <div className="menu-text">
                          <span>S</span>
                          <span>E</span>
                          <span>R</span>
                          <span>V</span>
                          <span>I</span>
                          <span>C</span>
                          <span>E</span>
                        </div>
                      </a>
                      <div className="arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <a href="#">
                        <div className="menu-text">
                          <span>P</span>
                          <span>A</span>
                          <span>G</span>
                          <span>E</span>
                          <span>S</span>
                        </div>
                      </a>
                      <div className="arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <a href="/blog">
                        <div className="menu-text">
                          <span>B</span>
                          <span>L</span>
                          <span>O</span>
                          <span>G</span>
                        </div>
                      </a>
                      <div className="arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <a href="#">
                        <div className="menu-text">
                          <span>C</span>
                          <span>O</span>
                          <span>N</span>
                          <span>T</span>
                          <span>A</span>
                          <span>C</span>
                          <span>T</span>
                        </div>
                      </a>
                      <div className="arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__search">
              <form action="#">
                <input type="text" name="search" placeholder="Search keyword" />
                <button>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="magnifying-glass"
                    className="svg-inline--fa fa-magnifying-glass "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <div className="offcanvas__contact">
              <h3>Get in touch</h3>
              <div style={{width: '37%', border: '2px #C9F31D solid' , marginTop: "-0.5rem",marginBottom: "1.7rem"}}></div>
              <ul>
                <li>
                  <a href="#">+91 90235 74683</a>
                </li>
                <li>
                  <a href="#">info@codespectsolution.com</a>
                </li>
                <li>Surat, India</li>
              </ul>
            </div>
            <img
              alt="shape"
              width="189"
              height="94"
              decoding="async"
              data-nimg="1"
              className="shape-1"
              srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.9b9acc5a.png&w=384&q=75"
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.9b9acc5a.png&w=384&q=75"
              style={{ color: "transparent", width: "auto", height: "auto" }}
            />
            <img
              alt="shape"
              width="81"
              height="80"
              decoding="async"
              data-nimg="1"
              className="shape-2"
              srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.1566e1c7.png&w=256&q=75"
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.1566e1c7.png&w=256&q=75"
              style={{ color: "transparent", width: "auto", height: "auto" }}
            />
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeOffcanvas}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;