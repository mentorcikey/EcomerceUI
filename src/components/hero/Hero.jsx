import React, { useState } from 'react';

import { Link } from "react-router-dom"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import './hero.css';
import dataHero from "../../assets/data_hero"

function Hero() {
    const [index, setIndex] = useState(0);

    const prev = () => {
        const newIndex = (index === 0) ? dataHero.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const next = () => {
        const newIndex = (index === dataHero.length - 1) ? 0 : index + 1;
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
