import React, { useState } from 'react';
import './hero.css';
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import dataHero from "../../assets/data_hero"

import { Link } from "react-router-dom"

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

function Hero() {
    const [index, setIndex] = useState(0);

    console.log(dataHero)

    const banners = [banner1, banner2, banner3, banner4]; // Mảng chứa đường dẫn của các banner

    const prev = () => {
        const newIndex = (index === 0) ? banners.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const next = () => {
        const newIndex = (index === banners.length - 1) ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <section className="hero">
            {dataHero.map((data, idx) => (
                <div className={idx === index ? "slide-container active" : "slide-container"} key={idx}>
                    <div className="slide">
                        <div className="content">
                            <span>{data.title}</span>
                            <h3>{data.name}</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit Sunt
                                nam adipisci ipsa officiis Amet pariatur eaque soluta sit iure
                                neque voluptate.
                            </p>
                            <Link to="/product">Check Now</Link>
                        </div>
                        <div className="image">
                            <img src={data.image} alt={`banner${idx + 1}`} />
                        </div>
                    </div>
                </div>
            ))}

            <FaArrowCircleLeft onClick={prev} className="left-arrow" />
            <FaArrowCircleRight onClick={next} className="right-arrow" />
        </section>
    );
}

export default Hero;
