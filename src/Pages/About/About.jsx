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
                        <h4>{AboutData[1].headline}</h4>
                        <p>{AboutData[1].description}</p>
                    </div>
                    <div className="about__content">
                        <h4>{AboutData[2].headline}</h4>
                        <p>Designed in Figma and brought to life with React, Sass, and a sprinkle of Framer Motion magic, <Link to="/behind-the-scene-tour" target="_blank" rel="noopener noreferrer">this portfolio</Link> is my playground for creative ideas and smooth interactions. Got any suggestions to make it even sharper? I’d love to hear them.</p>
                        {/* <Callout type="info" icon={handIcon}>
                            Interested in my portfolio? Want to take a 3mins <strong>behind-the-scenes</strong> tour? <br />Click <Link>here</Link> and let’s dive in!
                        </Callout> */}
                    </div>
                    {/* <div className="about__content">
                        <h4>Community Engagement</h4>
                        <p>
                            Alongside my UX/UI projects, I manage social media content and plan events for a Calgary-based NGO<Link to="https://www.facebook.com/share/aRsUKTPpXnhGq93X/" target="_blank" rel="noopener noreferrer"> Facebook Group</Link>. This work deepens my understanding of community engagement and audience-driven content, adding value to my design process. Crafting messages for diverse groups and organizing meaningful events aligns closely with my empathy-driven approach to design.
                        </p>
                    </div> */}
                    <div className="about__content">
                        <h4>{AboutData[3].headline}</h4>
                        <p>
                            {AboutData[3].description}
                        </p>
                        <p>
                            {AboutData[3].description2}
                        </p>
                        {/* <Callout type="error" icon={foodIcon}>
                            Want to talk pixels or pasta? Hit me up on <Link to="https://www.instagram.com/ma_tynn/" target="_blank" rel="noopener noreferrer">Instagram!</Link>
                        </Callout> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About