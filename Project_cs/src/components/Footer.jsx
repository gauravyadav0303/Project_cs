import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from '../assets/images/logo.png';


function Footer() {


  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

 


  const buttonAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      buttonAnimation.start({
        y: [0, -20, 0],
        transition: {
          duration: 1,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse", 
        },
      });
    }
  }, [inView, buttonAnimation]);

  return (
    <footer class="footer__area">
      <div class="footer__top">
        <div class="container footer-line"></div>
        <img
          alt="Footer Image"
          width="1160"
          height="662"
          src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter.19510b02.jpg&w=1200&q=75"
        />
      </div>
      <div class="footer__btm">
        <div class="container">
          <div class="row footer__row">
            <div class="col-xxl-12" ref={ref}>
              <div class="footer__inner">
                <div class="footer__widget">
                  <img
                    alt="Footer Logo"
                    width="138"
                    height="46"
                    class="footer__logo"
                    src={logo}
                  />
                  <p>
                  WonCurious about our process and how we build brands with our strategy? Let's talk! Request a consultation today and discover the secrets to our success. Get ready to unleash your business's potential.
                  </p>
                  <ul class="footer__social">
                    <li>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-facebook-f"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-linkedin"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="footer__widget-2">
                  <h2 class="footer__widget-title">Information</h2>
                  <ul class="footer__link">
                    <li>
                      <a href="#">About Company</a>
                    </li>
                    <li>
                      <a href="#">Case Study</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">blog</a>
                    </li>
                    <li>
                      <a href="#">contact</a>
                    </li>
                  </ul>
                </div>
                <div class="footer__widget-3">
                  <h2 class="footer__widget-title">Contact Us</h2>
                  <ul class="footer__contact">
                    <li>Surat, India - 67452</li>
                    <li>
                      <a href="#" class="phone">
                      +91 90235 74683{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      info@codespectsolution.com
                      </a>
                    </li>
                  </ul>
                </div>
                <motion.div class="footer__widget-4">
                  <h2 class="project-title">Have a project in your mind?</h2>
                  <a class="cb-btn cb-btn_cta -inverse" href="/tutorials">
              <span class="cb-btn_cta-border"></span>
              <span class="cb-btn_cta-ripple">
                <span></span>
              </span>
              <span class="cb-btn_cta-title">
                <span>Contact Us</span>
              </span>
            </a>
                  <h3 class="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                  <h4 class="contact-day">Saturday - Thursday</h4>
                </motion.div>
                <div class="footer__copyright">
                  <p>
                    © 2022 - 2025 | Alrights reserved by{" "}
                    <a href="https://wealcoder.com/" target="_blank">
                      Wealcoder
                    </a>
                  </p>
                </div>
                <div class="footer__subscribe">
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" class="subs-btn">
                      <i class="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
