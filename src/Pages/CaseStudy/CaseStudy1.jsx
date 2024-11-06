import React from 'react';
import './CaseStudy1.scss';
import handIcon from '../../assets/icons/hand-icon.svg'
import infoIcon from '../../assets/icons/info-icon.svg'
import casestudyBanner from '../../assets/case-study-1/cs1-banner.svg';
import kioskImg from '../../assets/case-study-1/kiosk-img.svg';
import sitemap from '../../assets/case-study-1/sitemap.svg';
import userjourney from '../../assets/case-study-1/userjourney.svg';
import wireframe from '../../assets/case-study-1/wireframe.svg';
import persona from '../../assets/case-study-1/persona.svg';
import sketch from '../../assets/case-study-1/sketch.png';
import userflow from '../../assets/case-study-1/userflow.svg';
import moodboard from '../../assets/case-study-1/moodboard.svg';
import iconImg from '../../assets/case-study-1/icon-image.svg';
import colorScale from '../../assets/case-study-1/color-scale.svg';
import backTop from '../../assets/icons/top-icon.svg';
import prototype from '../../assets/case-study-1/prototype.svg';
import { Link } from 'react-router-dom';
import Callout from '../../Components/Callout/Callout';
import checkIcon from '../../assets/icons/info-icon.svg'


const CaseStudy1 = () => {
    return (
        <div className="case-study">
            {/* Project Banner */}
            <div id='case1' className="case-study__banner">
                <Link to="https://www.figma.com/proto/YmOHAp5JJJXeKmskarGMi9/320-Bay-Directory?node-id=4001-178&t=bJS2JE9brSBoXEFo-1" target="_blank" rel="noopener noreferrer">
                    <img src={casestudyBanner} alt="Project Banner" className="case-study__banner-img" />
                </Link>
            </div>

            {/* Case Study Content */}
            {/* <section className="case-study__content">
                <Callout type="info" icon={infoIcon}>
                    Don’t have much time? Click to read <Link to="/interactive-digital-signage-case-study/summary">this Summary</Link> in 3 Minutes!
                </Callout>
            </section> */}
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
                    <a href="#wireframe">4. Wireframes</a>
                    <a href="#brand">5. Brand system</a>
                    <a href="#moodboard">6. Moodboard Creation</a>
                    <a href="#ui">7. UI Design</a>
                    <a href="#dev">8. Development</a>
                    <a href="#final">9. Final product</a>
                </div>
                <div id='problem' className="case-study__content-container">
                    <h3 className="case-study__heading">Problem</h3>
                    <p className="case-study__text">
                        <span>Unclear navigation:</span> The existing tenant board didn’t adequately help visitors find businesses or move between floors.
                    </p>
                    <p className="case-study__text">
                        <span>Lack of building information:</span>The building’s rich history was not being communicated effectively, missing an opportunity to engage visitors.
                    </p>
                    <p className="case-study__text">
                        <span>Security and emergency info:</span> There was no clear, accessible way for people to find emergency contact or building security information.
                    </p>
                    <p className="case-study__text">
                        <span>No transit information:</span> Professionals working in downtown Toronto rely on public transit. Without a centralized system to provide transit route and TTC traffic updates, visitors often struggled with transportation
                    </p>
                    <img src={userjourney} alt="user journey" className="case-study__image" />
                </div>
                <div id='hypothesis' className="case-study__content-container">
                    <h3 className="case-study__heading">Hypothesis</h3>
                    <p className="case-study__text">
                        Before jumping into research and design, I came up with a few hypotheses about the challenges visitors faced at The Permanent. I thought that quick navigation would be super important, especially when it came to searching for tenants.
                    </p>
                    <p className="case-study__text">
                        I also figured that busy professionals working in the building would really appreciate real-time transit updates.
                    </p>
                    <p className="case-study__text">
                        Plus, I believed that making building information easy to access would boost the overall user experience.
                    </p>
                    <Callout type="callout">"By starting with these ideas instead of rushing to a solution, I wanted to keep things flexible and open-minded. This way, I could validate my assumptions through research and testing, making sure the final design truly matched what users needed.”</Callout>
                </div>
                <div id='discovery' className="case-study__content-container">
                    <h3 className="case-study__heading">Discovery</h3>
                    <p className="case-study__text">
                        I conducted user interviews with both building visitors and professionals working in downtown Toronto. From these interviews, I learned that visitors highly valued fast, clear navigation to quickly find their way around the building. Meanwhile, professionals frequently requested real-time transit updates, as many relied on public transport for commuting.
                    </p>
                    <p className="case-study__text">
                        To further validate my findings, I visited several nearby properties along Bay Street to observe and test their signage systems. I noticed that most visitors immediately used the tenant search feature as their primary action.
                    </p>
                    <Callout type="callout">
                        "Alongside researching general navigation, I focused on accessibility by observing how users with mobility challenges interacted with signage. These insights helped me design a directory accessible to all."
                    </Callout>
                    <p className="case-study__text">
                        This insight highlighted the importance of prioritizing the tenant search engine in my design, ensuring it was easy to find and quick to use, as it was the most common user need.
                    </p>
                    <img src={persona} alt="user persona" className="case-study__image" />
                    <div className="about__content-subcontent">
                        <h4>Information Architecture:</h4>
                        <p className="case-study__text">
                            I structured the directory’s content by developing a clear sitemap that categorized key features like business listings, building history, property management info, and transit updates. This ensured that all information was logically organized and easy to navigate.
                        </p>
                        <img src={sitemap} alt="site-map" />
                    </div>
                </div>
                <div id='userflow' className="case-study__content-container">
                    <div className="about__content-subcontent">
                        <h4>User Flow:</h4>
                        <p className="case-study__text">
                            I created the user flow, which mapped out the steps a visitor would take to interact with the directory, including decision-making points like searching for a tenant and checking transit info.
                        </p>
                        <img src={userflow} alt="user flow" className="case-study__image" />
                    </div>
                </div>
                <div id='wireframe' className="case-study__content-container">
                    <h3 className="case-study__heading">Wireframes</h3>
                    <p className="case-study__text">
                        During the Early Design Exploration phase, I sketched various UI concepts based on my research, experimenting with layouts for the search bar and navigation elements. These early sketches helped me visualize the user experience and provided direction for the design, ensuring alignment with insights from user research.
                    </p>
                    <img src={sketch} alt="early sketch image" className="case-study__image" />
                    <p className="case-study__text">
                        Next, I created wireframes to outline the directory's features, serving as blueprints that highlighted key elements like tenant search and real-time transit updates. By involving the client early, I presented these wireframes for quick testing and validation, allowing us to identify necessary adjustments. This collaboration saved time in later stages, enabling the UI prototype phase to focus on refining details instead of revisiting major design choices.
                    </p>
                    <img src={wireframe} alt="low-fi wireframe" className="case-study__image" />
                    <Callout type="callout">
                        "To enhance accessibility, I added an accessibility button and lowered feature buttons for easy reach by wheelchair users. This was tested early with the client to ensure it met user needs."
                    </Callout>
                </div>
                <div id='brand' className="case-study__content-container">
                    <h3 className="case-study__heading">Exploring brand system</h3>
                    <p className="case-study__text">
                        The brand system was crafted to reflect The Permanent’s luxurious, minimal, gold-accented aesthetic, with each component designed to enhance both brand identity and usability.
                    </p>
                </div>
                <div className="case-study__content-container">
                    <p className="case-study__text">
                        <span>Color Scales:</span> The color palette reflects luxury and elegance with a minimalist approach and sparing gold accents that enhance the building's historical charm.
                    </p>
                    <img src={colorScale} alt="user persona" className="case-study__image" />
                    <p className="case-study__text">
                        <span>Icon Set Components & Font Styles:</span>I used Font Awesome icons for a clean, modern look that complements The Permanent's brand. For typography, Lato reinforces brand cohesion and consistency from the digital directory to the physical space.
                    </p>
                    <img src={iconImg} alt="user persona" className="case-study__image" />
                </div>
                <div id='moodboard' className="case-study__content-container">
                    <h3 className="case-study__heading">Moodboard Creation</h3>
                    <p className="case-study__text">
                        I created a moodboard to convey my design vision for the interactive signage, blending a clean, modern look with elements honoring the building's historic charm and downtown Toronto's professional atmosphere. This helped the client see how fonts, colors, and brand assets would bring their directory to life.
                    </p>
                    <img src={moodboard} alt="moodboard image" className="case-study__image" />
                </div>
                <div id='ui' className="case-study__content-container">
                    <h3 className="case-study__heading">UI Design</h3>
                    <p className="case-study__text">
                        In the UI Prototype phase, I brought wireframes to life with refined visuals and interactions, using a palette of yellow gold, black, gray, and white to reflect The Permanent’s historic elegance while keeping a modern feel.
                    </p>
                    <p className="case-study__text">
                        Accessibility was prioritized with a button for wheelchair users and lower button placement to accommodate all users. Interactive prototypes enabled testing of navigation flow, real-time transit updates, and building info, with early feedback incorporated for fine-tuning before development.
                    </p>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={prototype} alt="Real life Directory" />
            </div>
            <section className="case-study__content">
                <div id='dev' className="case-study__content-container">
                    <h3 className="case-study__heading">Development</h3>
                    <p className="case-study__text">
                        In the Development phase, after receiving my director's approval, I led the transformation of the design into a functional project. I used JSON code blocks to structure the interface and applied Sass for styling.
                    </p>
                </div>
                <div id='final' className="case-study__content-container">
                    <h3 className="case-study__heading">Final product</h3>
                    <p className="case-study__text">
                        The final interactive wayfinding directory is now installed at The Permanent, providing visitors with an all-in-one solution for navigation, building history, property information, and transit updates. The system supports the building’s professional image while addressing both visitor needs and business goals.
                    </p>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={kioskImg} alt="Real life Directory" />
            </div>
            <section className="case-study__content">
                <div id='nextstep' className="case-study__content-container">
                    <h3 className="case-study__heading">
                        Next steps
                    </h3>
                    <p className="case-study__text">
                        To enhance the wayfinding system at The Permanent, several future features could improve functionality and user experience:
                    </p>
                    <p className="case-study__text">
                        <strong>Emergency Evacuation Plan:</strong> Integrate an interactive evacuation plan providing real-time guidance, clearly marked routes, and audio-visual alerts during emergencies.
                    </p>
                    <p className="case-study__text">
                        <strong>Multi-Language Support:</strong> Offer multi-language options to increase accessibility for non-English speakers, allowing them to navigate easily.
                    </p>
                    <p className="case-study__text">
                        <strong>Parking Availability:</strong> Add a section for real-time updates on nearby parking spaces and navigation to accessible entrances for improved visitor experience.
                    </p>
                    <p className="case-study__text">
                        <strong>Interactive Map Features:</strong>  Introduce zoom controls and map rotation for a more dynamic experience, enabling users to explore the building layout in detail.
                    </p>
                </div>
            </section>
            <section className="case-study__content">
                <Callout type="callout" icon={handIcon}><p>Get more time? Check out <Link to="/case-study2">Cafe Hanoi Anger case study</Link></p>
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
            <div className="case-study__background">
                {/* this block is used to get the fixed scroll background, full width and with userjourney image above as background*/}
            </div>
        </div>
    );
};

export default CaseStudy1;
