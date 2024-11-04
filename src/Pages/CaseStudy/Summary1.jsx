import React from 'react';
// import './Summary1.scss';
import casestudyBanner from '../../assets/case-study-1/cs1-banner.svg';
import kioskImg from '../../assets/case-study-1/kiosk-img.svg';
import userjourney from '../../assets/case-study-1/userjourney.svg';
import wireframe from '../../assets/case-study-1/wireframe.svg';
import persona from '../../assets/case-study-1/persona.svg';
import userflow from '../../assets/case-study-1/userflow.svg';
import moodboard from '../../assets/case-study-1/moodboard.svg';
import prototype from '../../assets/case-study-1/prototype.svg';
import Callout from '../../Components/Callout/Callout';
import checkIcon from '../../assets/icons/check-icon.svg'
import handIcon from '../../assets/icons/hand-icon.svg'
import backTop from '../../assets/icons/top-icon.svg';
import { Link } from 'react-router-dom';

const SummaryPage = () => {
    return (
        <div className="case-study">
            <div id='case1' className="case-study__banner">
                <a href="https://www.figma.com/proto/YmOHAp5JJJXeKmskarGMi9/320-Bay-Directory?node-id=4001-178&t=bJS2JE9brSBoXEFo-1" target="_blank" rel="noopener noreferrer">
                    <img src={casestudyBanner} alt="Project Banner" className="case-study__banner-img" />
                </a>
            </div>
            {/* Case Study Content */}
            <section className="case-study__content">
                <Callout type="success" icon={checkIcon}>
                    Awesome! The summary is below. Click <Link to="/case-study1">here</Link> to jump back to the full case study!
                </Callout>
            </section>
            <section className="case-study__content">
                <div className="case-study__content-container">
                    <h3 className="case-study__heading">Overview</h3>
                    <p className="case-study__text">
                        The Permanent is a historic building in downtown Toronto, home to various businesses. The client wanted an easy-to-use touch screen directory to help visitors find their way, learn about the building's history. The directory also needed to include contact information for property management and leasing, security details, and local transit options for busy professionals.
                    </p>
                </div>
                <div className="about__content-table-content case-study__content-container">
                    <h3 className="case-study__heading">Table of Content</h3>
                    <a href="#problem">1. Problem</a>
                    <a href="#hypothesis">2. Hypothesis</a>
                    <a href="#discovery">3. Discovery</a>
                    <a href="#userflow">4. User flow</a>
                    <a href="#wireframe">5. Wireframes</a>
                    <a href="#moodboard">6. Brand System & Moodboard</a>
                    <a href="#ui">7. UI Design</a>
                    <a href="#dev">8. Development</a>
                    <a href="#final">9. Final product</a>
                </div>
                <div id='problem' className="case-study__content-container">
                    <h3 className="case-study__heading">Problem</h3>
                    <p className="case-study__text">
                        The existing tenant board was outdated and challenging for visitors. It lacked clear navigation, historical details, emergency contacts, and transit info crucial for downtown professionals.
                    </p>
                    <img src={userjourney} alt="user journey" className="case-study__image" />
                </div>
                <div id='hypothesis' className="case-study__content-container">
                    <h3 className="case-study__heading">Hypothesis</h3>
                    <p className="case-study__text">
                        Before research, I hypothesized that clear navigation, easy access to building information, and real-time transit updates would greatly enhance user experience, especially for busy professionals.
                    </p>
                </div>
                <div id='discovery' className="case-study__content-container">
                    <h3 className="case-study__heading">Discovery</h3>
                    <p className="case-study__text">
                        User interviews revealed that fast navigation and real-time transit info were top priorities. I observed visitor behavior in nearby buildings, emphasizing accessibility features for users with mobility challenges.
                    </p>
                    <img src={persona} alt="user persona" className="case-study__image" />
                </div>
                <div id='userflow' className="case-study__content-container">
                    <h3 className="case-study__heading">User Flow</h3>
                    <p className="case-study__text">
                        Developed a user flow mapping key visitor interactions with the directory, from tenant search to transit info.
                    </p>
                    <img src={userflow} alt="user flow" className="case-study__image" />
                </div>
                <div id='wireframe' className="case-study__content-container">
                    <h3 className="case-study__heading">Wireframes & Early Testing</h3>
                    <p className="case-study__text">
                        Created low-fidelity wireframes to explore layout ideas, focusing on tenant search, accessibility, and ease of use. Early client feedback ensured a smooth transition into prototyping.
                    </p>
                    <img src={wireframe} alt="wireframe" className="case-study__image" />
                </div>
                <div id='brand' className="case-study__content-container">
                    <h3 className="case-study__heading">Brand System & Moodboard</h3>
                    <p className="case-study__text">
                        Designed a brand system with a luxury palette and minimalist gold accents. The moodboard helped align the design with The Permanent’s elegant and historic aesthetic.
                    </p>
                    <img src={moodboard} alt="user persona" className="case-study__image" />
                </div>
                <div id='ui' className="case-study__content-container">
                    <h3 className="case-study__heading">UI Design</h3>
                    <p className="case-study__text">
                        In the prototype phase, I incorporated refined visuals, user-friendly interactions, and accessibility-focused elements. A button for wheelchair users and lowered interactive elements ensured usability for all.
                    </p>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={prototype} alt="Real life Directory" />
            </div>
            <section id='dev' className="case-study__content">
                <div className="case-study__content-container">
                    <h3 className="case-study__heading">Development</h3>
                    <p className="case-study__text">
                        Led the development process, using JSON for structure and Sass for styling to bring the design to life after approval.
                    </p>
                </div>
                <div id='final' className="case-study__content-container">
                    <h3 className="case-study__heading">Final Product</h3>
                    <p className="case-study__text">
                        The directory now serves visitors with seamless navigation, building insights, and transit updates, reinforcing The Permanent’s professional image and supporting user needs effectively.
                    </p>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={kioskImg} alt="Real life Directory" />
            </div>
            <section className="case-study__content">
                <Callout type="callout" icon={handIcon}>
                    Want to dive deeper? Read <Link to="/case-study1">the full case study</Link> <br></br>Or check out the next <Link>Cafe Hanoi case study.</Link>
                </Callout>
            </section>
            <section className="case-study__content">
                <div className="back-to-top">
                    <div className="back-to-top__container">
                        <a href="#case1" className="back-to-top">
                            <img src={backTop} alt="back to top" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SummaryPage;
