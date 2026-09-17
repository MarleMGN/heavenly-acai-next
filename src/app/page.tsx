"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Nav from "@/components/nav";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

const socialImages = ["/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg"];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
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
                <div className="menu"></div>
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
