"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Nav from "@/components/nav";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

const socialImages = ["/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg"];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [openTab, setOpenTab] = useState("");
  const slideshowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLogo(!entry.isIntersecting); // show logo when slideshow is NOT in view
      },
      { threshold: 0.1 },
    );

    if (slideshowRef.current) {
      observer.observe(slideshowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleTab = (tabName: string) => {
    setOpenTab(openTab === tabName ? "" : tabName);
  };

  return (
    <>
      <div className="container">
        <Nav showLogo={showLogo} />
        <div className="slideshow__container" ref={slideshowRef}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`slideshow__bg ${index === slideIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="slideshow__logo">
            <Image
              src="/HeavenlyLogo-landing.png"
              alt="logo"
              width={500}
              height={450}
            />
          </div>
        </div>
        <section>
          <div className="why__choose-bg">
            <div className="why__choose--container">
              <div className="why__choose-text">
                <h1>
                  Why Choose <span className="purple">Heavenly Açaí?</span>
                </h1>
                <p>
                  Because food should make you feel good. Our açaí bowls are{" "}
                  <span className="purple">
                    fresh, vibrant, and satisfying.
                  </span>{" "}
                  They&apos;re perfect for a quick breakfast, post-workout
                  boost, or guilt-free dessert.
                </p>
                <ul>
                  <li>
                    Naturally Energizing - Light, refreshing fuel without the
                    heavy crash
                  </li>
                  <li>
                    Antioxidant Rich - Packed with nutrients that support
                    overall wellness
                  </li>
                  <li>
                    Gluten-Free Friendly - Options that fit a variety of
                    lifestyles
                  </li>
                  <li>
                    Fresh & Delicious - Real fruit, bold flavor, and made with
                    care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="menu-bg">
            <div className="menu__container">
              <div className="menu__content">
                <div className="menu__title purple">Our Menu</div>
                <div className="menu">
                  <div
                    className={`menu__tab ${openTab === "signature" ? "tab-open" : ""} ${openTab !== "" && openTab !== "signature" ? "tab-hidden" : ""}`}
                    onClick={() => toggleTab("signature")}
                  >
                    <div className="tab__header-wrapper">
                      <div className="menu__tab-text purple">
                        Signature Bowls
                      </div>
                      <div className="menu__tab-x">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`menu__tab ${openTab === "specialty" ? "tab-open" : ""} ${openTab !== "" && openTab !== "specialty" ? "tab-hidden" : ""}`}
                    onClick={() => toggleTab("specialty")}
                  >
                    <div className="tab__header-wrapper">
                      <div className="menu__tab-text purple">
                        Specialty Bowls
                      </div>
                      <div className="menu__tab-x">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`menu__tab ${openTab === "drinks" ? "tab-open" : ""} ${openTab !== "" && openTab !== "drinks" ? "tab-hidden" : ""}`}
                    onClick={() => toggleTab("drinks")}
                  >
                    <div className="tab__header-wrapper">
                      <div className="menu__tab-text purple">Drinks</div>
                      <div className="menu__tab-x">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`menu__tab ${openTab === "bites" ? "tab-open" : ""} ${openTab !== "" && openTab !== "bites" ? "tab-hidden" : ""}`}
                    onClick={() => toggleTab("bites")}
                  >
                    <div className="tab__header-wrapper">
                      <div className="menu__tab-text purple">Bites</div>
                      <div className="menu__tab-x">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="locations__container">
            <div className="locations__bg"></div>
          </div>
        </section>
        <section>
          <div className="slideshow__container">
            {socialImages.map((img, index) => (
              <div
                key={index}
                className={`slideshow__bg ${index === slideIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
