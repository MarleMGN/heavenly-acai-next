"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "@/components/nav";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

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
        <Nav />
        <div className="slideshow__container">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slideshow__bg ${index === slideIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="header__description">
          <h1 className="header__description--title"></h1>
          <p className="header__description--para"></p>
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
      </div>
    </>
  );
}
