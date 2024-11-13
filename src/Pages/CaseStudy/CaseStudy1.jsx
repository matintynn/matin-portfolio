import React from 'react';
import './CaseStudy1.scss';
import handIcon from '../../assets/icons/hand-icon.svg'
import infoIcon from '../../assets/icons/info-icon.svg'
import casestudyBanner from '../../assets/case-study-1/cs1-banner.svg';
import kioskImg from '../../assets/case-study-1/kiosk-img.svg';
import sitemap from '../../assets/case-study-1/sitemap.svg';
import userjourney from '../../assets/case-study-1/userjourney.svg';
import wireframe from '../../assets/case-study-1/wireframe-img.svg';
import persona from '../../assets/case-study-1/persona.svg';
import sketch from '../../assets/case-study-1/sketch.png';
import keyfeature from '../../assets/case-study-1/key-feature.svg';
import accwire from '../../assets/case-study-1/acc-wire.svg';
import feedback from '../../assets/case-study-1/feedback.svg';
import userflow from '../../assets/case-study-1/userflow.svg';
import moodboard from '../../assets/case-study-1/moodboard.svg';
import iconImg from '../../assets/case-study-1/icon-image.svg';
import colorScale from '../../assets/case-study-1/color-scale.svg';
import backTop from '../../assets/icons/top-icon.svg';
import prototype from '../../assets/case-study-1/prototype.svg';
import buildingInfo from '../../assets/case-study-1/buildingInfo.svg';
import search from '../../assets/case-study-1/search.svg';
import tenantPage from '../../assets/case-study-1/tenant-page.svg';
import localTransit from '../../assets/case-study-1/local-transit.svg';
import accUi from '../../assets/case-study-1/acc-ui.svg';
import { Link } from 'react-router-dom';
import Callout from '../../Components/Callout/Callout';
import checkIcon from '../../assets/icons/info-icon.svg'
import Quote from '../../Components/Quote/Quote';


const CaseStudy1 = () => {
    return (
        <div className="case-study">
            {/* Project Banner */}
            <div id='case1' className="case-study__banner">
                <Link to="https://www.figma.com/proto/YmOHAp5JJJXeKmskarGMi9/320-Bay-Directory?node-id=4001-178&t=m55gA0Vpej4BabL2-1&scaling=scale-down" target="_blank" rel="noopener noreferrer">
                    <img src={casestudyBanner} alt="Project Banner" className="case-study__banner-img" />
                </Link>
            </div>

            {/* Case Study Content */}
            <section className="case-study__content"></section>
            <section className="case-study__content">
                <div className="case-study__content-container">
                    <h3 className="case-study__heading">Overview</h3>
                    <p className="case-study__text">
                        The Permanent is a historic building in downtown Toronto that houses multiple businesses. The client seeks a user-friendly touch screen directory to help visitors navigate, discover the building's history, and access essential details. The directory also includes contact information for property management and leasing, security guidelines, and transit options to support the needs of busy professionals working in the area.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Challenge</span>
                        </p>
                        <p className="case-study__text">
                            The building’s existing tenant board offers limited navigation, leaving visitors unsure about how to locate businesses or navigate between floors. Additionally, there is a lack of information about the building's historical significance, missing an opportunity to engage visitors. With no clear display for security and emergency contact information, safety details are hard to access. Finally, professionals relying on downtown transit find no centralized access to route updates, making commuting more challenging.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>Process</span>
                        </p>
                        <p className="case-study__text">
                            I start by conducting user interviews with both visitors and downtown professionals, uncovering a need for fast, clear navigation and real-time transit updates. To further understand user needs, I perform on-site observations and test signage systems at nearby properties on Bay Street. From these insights, I create user personas and journey maps, followed by developing information architecture, user flows, and wireframes. I establish a cohesive brand system before moving into UI design, prototyping, usability testing, and A/B testing.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>Outcome</span>
                        </p>
                        <p className="case-study__text">
                            The final product is an intuitive directory that efficiently guides visitors, shares the building’s history, and provides accessible security information. Real-time transit updates and a tenant search feature meet commuter needs, enhancing convenience for both busy professionals and visitors.
                        </p>
                    </div>
                </div>
                <div className="spacing-top-bottom"></div>
                <div className="about__content-table-content case-study__content-container">
                    <h3 className="case-study__heading">Table of Content</h3>
                    <a href="#discovery">1. Discovery & Research</a>
                    <a href="#hypothesis">2. Hypothesis</a>
                    <a href="#foundation">3. Building the Foundation</a>
                    <a href="#wireframe">3. Translating User Needs into Wireframes</a>
                    <a href="#brand">4. Exploring Brand System</a>
                    <a href="#ui">5. UI Design</a>
                    <a href="#final">6. Final Product</a>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='discovery' className="case-study__content-container">
                    <h3 className="case-study__heading">Discovery & Research</h3>
                    <p className="case-study__text">
                        I conduct user interviews with building visitors, as well as the reception and security teams, who frequently assist people in locating offices within The Permanent. These conversations reveal that visitors highly value fast, clear navigation to quickly find specific businesses and floors without needing additional assistance.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Validate the insights</span>
                        </p>
                        <p className="case-study__text">
                            I visit nearby properties along Bay Street to observe and test their signage systems. I find that most visitors immediately rely on the tenant search feature as their primary action.
                        </p>
                        <p className="case-study__text">
                            Additionally, I focus on accessibility by observing users with mobility challenges, such as wheelchair users, to understand how they interact with current signage. This research highlights what’s needed to ensure the directory accommodates all users.
                        </p>
                        <Callout>
                            As part of this phase, I create user personas to represent key user groups and develop a user journey map, clarifying each step of their interaction with the directory.
                        </Callout>
                        <img src={persona} alt="user persona" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Research thoughts</span>
                        </p>
                        <p className="case-study__text">
                            Through this research, I recognize the significance of providing intuitive, accessible design that minimizes reliance on reception staff, especially during peak hours. This not only enhances user independence but also aligns with the needs of diverse users. The focus on real-time wayfinding and ease of use became a cornerstone of the design strategy, ensuring visitors can navigate independently and efficiently.
                        </p>
                        <img src={userjourney} alt="user journey" className="case-study__image" />
                    </div>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='hypothesis' className="case-study__content-container">
                    <h3 className="case-study__heading">Hypothesis</h3>
                    <p className="case-study__text">
                        Based on my initial observations and understanding of the challenges at The Permanent, I form a few key hypotheses.
                    </p>
                    <ul className='list-items'>
                        <li>
                            I believe quick navigation will be essential, especially for visitors searching for tenant information.
                        </li>
                        <li>
                            Busy professionals, in particular, will likely appreciate real-time transit updates, as they rely on public transportation for commuting.
                        </li>
                        <li>
                            I also hypothesize that making building-related information—such as property management details, leasing info, security contacts, and the building’s history—easily accessible will improve the overall user experience.
                        </li>
                        <li>
                            By incorporating an accessible button, I ensure users with mobility challenges, such as wheelchair users, can easily interact with the directory and access vital information, fostering an inclusive experience for all visitors.
                        </li>
                    </ul>
                    <Quote>
                        Instead of rushing to a solution, I keep these ideas open and flexible, allowing room for testing and validation. Through research and user testing, I aim to confirm or refine these assumptions to ensure the final design truly aligns with users' needs.
                    </Quote>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='foundation' className="case-study__content-container">
                    <h3 className="case-study__heading">Building the foundation</h3>
                    <p className="case-study__text">
                        To build a solid foundation for the project, I focus on key design elements like information architecture (IA), user flow, and wireframing. These elements help ensure that the directory is not only easy to navigate but also intuitive and user-friendly from the very start.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Information Architecture</span>
                        </p>
                        <p className="case-study__text">
                            I structure the directory's content with a clear sitemap, categorizing key features such as business listings, building history, property management info, and transit updates. This ensures that all information is logically organized and easy to navigate.
                        </p>
                        <img src={sitemap} alt="site-map" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>User Flow</span>
                        </p>
                        <p className="case-study__text">
                            I create the user flow, mapping out the steps a visitor takes to interact with the directory. This includes decision-making points like searching for a tenant and checking transit info. For instance, I prioritize showcasing tenant listings as the main feature, ensuring visitors can quickly find businesses.
                        </p>
                        <p className="case-study__text">
                            At the same time, I make important information like building details and emergency contacts easy to access but secondary in prominence.
                        </p>
                        <img src={userflow} alt="user flow" className="case-study__image" />
                    </div>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='wireframe' className="case-study__content-container">
                    <h3 className="case-study__heading">Wireframes</h3>
                    <p className="case-study__text">
                        With research insights and foundational structures established, I move into wireframing to bring the information architecture, user insights, and navigation flow into a cohesive design. This stage emphasizes arranging the directory structure to ensure smooth navigation and quick access to essential information. By aligning with stakeholder goals and addressing user needs, I aim to create a clear, accessible layout that forms a solid groundwork for the UI design phase.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Sketches</span>
                        </p>
                        <p className="case-study__text">
                            During the Early Design Exploration phase, I sketch out various UI concepts based on research, experimenting with layouts for the search bar and navigation elements. These sketches help me visualize the user experience and provide direction for the design.
                        </p>
                        <img src={sketch} alt="sketches" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Key Feature Highlighted</span>
                        </p>
                        <p className="case-study__text">
                            For directory search sptions, I include three search options—All Listings, by A-Z, and by Floor Space—to accommodate various user needs and enhance task efficiency. The Floor Space search supports users navigating company-tenanted floors, allowing them to find specific offices within shared spaces.
                        </p>
                        <img src={keyfeature} alt="key feature" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Accessibility Considerations</span>
                        </p>
                        <p className="case-study__text">
                            Accessibility is integral to the wireframe design. I implement larger touch targets, a layout that shifts lower for wheelchair accessibility, and resizable buttons, ensuring all elements are visible and usable for users with diverse abilities.
                        </p>
                        <img src={accwire} alt="accessibility wire" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Stakeholder and User Feedback Integration</span>
                        </p>
                        <p className="case-study__text">
                            I consistently gather feedback from stakeholders and users to refine the layout and validate that it meets brand standards and user expectations. This input helps adjust the information hierarchy and search functions to better meet user needs.
                        </p>
                        <img src={feedback} alt="feedback wire" className="case-study__image" />
                    </div>
                    <Quote>
                        With a solid wireframe and feedback incorporated, I move into UI design, enhancing the layout with branding elements and an accessible, user-friendly interface.
                    </Quote>
                </div>
            </section>
            <div className="case-study__background3">
                {/* this block is used to get the fixed scroll background, full width and with userjourney image above as background*/}
            </div>
            <div className="spacing-top-bottom"></div>
            <section className="case-study__content">
                <div id='brand' className="case-study__content-container">
                    <h3 className="case-study__heading">Exploring brand system</h3>
                    <p className="case-study__text">
                        For The Permanent's brand system, I align closely with their existing guidelines and website, creating a cohesive system that integrates seamlessly across the building’s website and the directory.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Color Scales</span>
                        </p>
                        <p className="case-study__text">
                            The color palette reflects luxury and elegance with a minimalist approach and sparing gold accents that enhance the building's historical charm.
                        </p>
                        <img src={colorScale} alt="user persona" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Icon Set Components & Font Styles</span>
                        </p>
                        <p className="case-study__text">
                            I select Font Awesome icons to give the directory a clean, modern look that aligns well with The Permanent's brand identity. For typography, I choose Lato to ensure brand cohesion and consistency, linking the digital directory fluidly with the building’s physical aesthetic.
                        </p>
                        <img src={iconImg} alt="user persona" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Moodboard</span>
                        </p>
                        <p className="case-study__text">
                            I create a moodboard to share my design vision for the interactive signage, blending a clean, modern style with elements that honor the building's historic charm and downtown Toronto's professional atmosphere. This approach helps the client see how fonts, colors, and brand assets will work together to bring the directory to life.
                        </p>
                        <img src={moodboard} alt="moodboard image" className="case-study__image" />
                    </div>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='ui' className="case-study__content-container">
                    <h3 className="case-study__heading">UI Design</h3>
                    <p className="case-study__text">
                        In the UI Design phase, I focus on connecting early research insights with visual design choices to create a cohesive user experience. Building on the initial wireframes, I refine the visuals and interactions to make the directory both functional and visually appealing. I use a palette of yellow gold, black, gray, and white, which honors The Permanent's historic elegance while adding a contemporary touch.
                    </p>
                    <Callout>
                        This approach ensures that the design reflects the building’s unique character and meets user needs for clarity and ease of use.
                    </Callout>
                    <div className="spacing-top-bottom-sm"></div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Multi-Search Options for Efficient Navigation</span>
                        </p>
                        <p className="case-study__text">
                            I design multiple search options—All Listings, A-Z Search, and Floor View—to quickly connect users to tenant information based on their preferences. To reduce decision time, I limit choices to essential options, following Hick’s Law. Placing the Directory Tenant Search Page as the primary view ensures easy access.
                        </p>
                        <img src={search} alt="search feature image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Enhancing Wayfinding with 3D Mapping and Interactive Guidance</span>
                        </p>
                        <p className="case-study__text">
                            For this project, I create a 3D map in 3D Max based on the building’s floor plan. This map enhances tenant wayfinding by making it more intuitive and visually clear, allowing users to easily see directions. The map includes an indicator for the user's current location, helping them understand where they are and the direction they need to go.
                        </p>
                        <Callout>
                            Animated vector paths guide users along the correct route, ensuring they can easily follow the path to their destination.
                        </Callout>
                        <img src={tenantPage} alt="tenant page image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>
                                Streamlined Building Information for Clear Communication and Trust
                            </span>
                        </p>
                        <p className="case-study__text">
                            This section focuses on organizing leasing info, property management, security, and building history in a clear, logical hierarchy to ensure visitors can easily scan and access the necessary information.
                        </p>
                        <p className="case-study__text">
                            The design incorporates building elements to reinforce the brand, ensuring a cohesive, professional, and luxury appearance. This approach enhances trustworthiness and creates a seamless, user-friendly experience for those accessing important building details.
                        </p>
                        <img src={buildingInfo} alt="buildingInfo image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>
                                Local Area & Transit Information for Enhanced Visitor Experience
                            </span>
                        </p>
                        <p className="case-study__text">
                            The Local Area section includes a 2D vector map, connecting the building with nearby amenities like restaurants and shops, making it easy for visitors to explore the neighborhood.
                        </p>
                        <p className="case-study__text">
                            The Transit page provides real-time updates on TTC train arrivals, with a clean, quick-to-scan layout for route names and times. This design ensures visitors can easily navigate both the building and surrounding area while staying updated on transit.
                        </p>
                        <img src={localTransit} alt="localTransit image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>
                                Accessibility Mode Enhancements for Improved Usability
                            </span>
                        </p>
                        <p className="case-study__text">
                            Based on stakeholder feedback during the wireframe stage, I refine the directory’s accessibility features to better support visitors with mobility challenges. In Accessibility Mode, the interface shifts downward to ensure key elements are within easy reach.
                        </p>
                        <img src={accUi} alt="accessibility features image" className="case-study__image" />
                        <p className="case-study__text">
                            I also adjust design elements—resizing legend buttons, containers, and repositioning the map, especially in areas like the Amenities section—to improve usability for all visitors.
                        </p>
                        <Callout>
                            These changes ensure that wheelchair users can easily access, touch, and navigate the information, creating a more inclusive and user-friendly experience.
                        </Callout>
                    </div>
                </div>
            </section>
            <div className="case-study__background4">
                {/* this block is used to get the fixed scroll background, full width and with userjourney image above as background*/}
            </div>
            <div className="spacing-top-bottom"></div>
            <section className="case-study__content">
                <div id='final' className="case-study__content-container">
                    <h3 className="case-study__heading">Final product</h3>
                    <p className="case-study__text">
                        The final interactive wayfinding directory is now installed at The Permanent, providing visitors with an all-in-one solution for navigation, building history, property information, and transit updates. The system supports the building’s professional image while addressing both visitor needs and business goals.
                    </p>
                    <img src={kioskImg} alt="Real life Directory" className="case-study__image" />
                </div>
            </section>
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
                <Callout type="callout"><p>Get more time? Check out <Link to="/case-study2">Cafe Hanoi Anger case study</Link></p>
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
