import React from 'react'
import './About.scss'
import mypic from '../../assets/mypic.jpg'
import toolkit from '../../assets/icons/toolkit-icon.svg'
import handIcon from '../../assets/icons/hand-icon.svg'
import eventIcon from '../../assets/icons/event-icon.svg'
import foodIcon from '../../assets/icons/food-icon.svg'
import Callout from '../../Components/Callout/Callout'
import AboutData from '../../Data/AboutData';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div
                    className="about__card">
                    {/* <div className="about__img">
                        <img src={mypic} alt="Matin's picture" />
                    </div> */}
                    <div className="about__card-content">
                        <h4>{AboutData[0].headline}</h4>
                        <p>{AboutData[0].description}</p>
                        <Callout type="success">
                            <strong>🛠 My toolkit:</strong> {AboutData[0].tool}
                        </Callout>
                    </div>
                </div>
                <div
                    className="about__content-container">
                    <div className="about__content">
                        <h4>{AboutData[3].headline}</h4>
                        <p>
                            I'm on the hunt for new treasures to add to my UX toolkit! Currently exploring Google Analytics Academy and the diploma in  Strategic Management from Alison—digging deeper into decoding user behavior and navigating business strategy.
                        </p>
                        <p>
                            {AboutData[3].description2}
                        </p>
                    </div>
                </div>
                <div className="about__content-container">
                    <div className="about__content">
                        <h4>{AboutData[2].headline}</h4>
                        <p>Designed in Figma and brought to life with React, Sass, and a sprinkle of Framer Motion magic, <Link to="/behind-the-scene-tour">this portfolio</Link> is my playground for creative ideas and smooth interactions. Got any suggestions to make it even sharper? I’d love to hear them.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About