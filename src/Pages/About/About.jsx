import React from 'react'
import './About.scss'
import mypic from '../../assets/mypic.jpg'
import toolkit from '../../assets/icons/toolkit-icon.svg'
import handIcon from '../../assets/icons/hand-icon.svg'
import eventIcon from '../../assets/icons/event-icon.svg'
import foodIcon from '../../assets/icons/food-icon.svg'
import Callout from '../../Components/Callout/Callout'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div
                    className="about__card">
                    <div className="about__img">
                        <img src={mypic} alt="Matin's picture" />
                    </div>
                    <div className="about__card-content">
                        {/* <h3>"Design begins with empathy"</h3> */}
                        <p>Hi! I’m Matin, a Toronto-based digital product designer with experience crafting user-first designs. I believe that great design starts with a focus on users—because that’s where the magic happens!</p>
                    </div>
                </div>
                <div
                    className="about__content-container">
                    <div className="about__content">
                        <h4>My Design Philosophy</h4>
                        <p>My design approach is simple: empathy first, aesthetics second. I’ve found that the impactful designs come from listening to users and understanding their needs. Whether it’s a website or an interactive directory, I rely on user research and feedback to guide my decisions. Every project is a learning opportunity, and I strive to incorporate those insights into my work.</p>
                        <Callout type="callout" icon={toolkit}>
                            <strong>My toolkit:</strong> Figma, Adobe Creative Suite, No Code tools, HTML/CSS, JavaScript, Sass, React, along with component libraries.
                        </Callout>
                    </div>
                    {/* <div className="about__content">
                        <h4>About This Portfolio</h4>
                        <p>Designed in Figma and brought to life with React, Sass, and a sprinkle of Framer Motion magic, this portfolio is my playground for creative ideas and smooth interactions. Got any suggestions to make it even sharper? I’d love to hear them.</p>
                        <Callout type="info" icon={handIcon}>
                            Interested in my portfolio? Want to take a 3mins <strong>behind-the-scenes</strong> tour? <br />Click <Link>here</Link> and let’s dive in!
                        </Callout>
                    </div> */}
                    <div className="about__content">
                        <h4>Community Engagement</h4>
                        <p>
                            Alongside my UX/UI projects, I manage social media content and plan events for a Calgary-based NGO<Link to="https://www.facebook.com/share/aRsUKTPpXnhGq93X/" target="_blank" rel="noopener noreferrer"> Facebook Group</Link>. This work deepens my understanding of community engagement and audience-driven content, adding value to my design process. Crafting messages for diverse groups and organizing meaningful events aligns closely with my empathy-driven approach to design.
                        </p>
                        {/* <Callout type="success" icon={eventIcon}>
                            Ever wonder how <Link to="https://www.facebook.com/share/aRsUKTPpXnhGq93X/" target="_blank" rel="noopener noreferrer"><strong>800 members</strong></Link> came together? Click <Link>here</Link> for the story!
                        </Callout> */}
                    </div>
                    <div className="about__content">
                        <h4>Always learning</h4>
                        <p>
                            I’ve learned that there’s always something new to discover—whether it’s refining my coding and design skills or learning to cook different cuisines. It’s all about trying new things, learning from mistakes, and sharing the results with others.
                        </p>
                        <p>
                            My mission? To keep improving, even in small ways. From studying user behavior to trying unusual street food while traveling, I’m always ready for the next adventure!
                        </p>
                        <Callout type="error" icon={foodIcon}>
                            Want to talk pixels or pasta? Hit me up on <Link to="https://www.instagram.com/ma_tynn/" target="_blank" rel="noopener noreferrer">Instagram!</Link>
                        </Callout>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About