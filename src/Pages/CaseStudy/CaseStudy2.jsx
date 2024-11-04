import React from 'react'
import './CaseStudy1.scss';
import { Link } from 'react-router-dom';
import Callout from '../../Components/Callout/Callout';
import handIcon from '../../assets/icons/hand-icon.svg'
import infoIcon from '../../assets/icons/info-icon.svg'
import checkIcon from '../../assets/icons/info-icon.svg'
import casestudyBanner from '../../assets/case-study-2/cs2-banner.svg';
import menu from '../../assets/case-study-2/menu.svg';
import moodboard from '../../assets/case-study-2/moodboard.svg';
import socialProof from '../../assets/case-study-2/social-proof.svg';
import backTop from '../../assets/icons/top-icon.svg';


const CaseStudy2 = () => {
    return (
        <div className="case-study">
            {/* Project Banner */}
            <div id='case1' className="case-study__banner">
                <a href="https://cafehanoi.framer.website/" target="_blank" rel="noopener noreferrer">
                    <img src={casestudyBanner} alt="Project Banner" className="case-study__banner-img" />
                </a>
            </div>
            {/* Case Study Content */}
            <section className="case-study__content">
                <Callout type="callout" icon={handIcon}>
                    <strong>Quick Read Alert!</strong> Just 3 minutes to read this case study.
                </Callout>
            </section>
            <section className="case-study__content">
                <div className="case-study__content-container">
                    <h3 className="case-study__heading">Overview</h3>
                    <p className="case-study__text">
                        Café Hà Nội, a Vietnamese café in Angers, France, needed a website to showcase its unique offerings—bubble tea and Vietnamese desserts—and build a local community. My goal was to design and develop a welcoming, culturally authentic site that aligned with the café’s brand values.
                    </p>
                </div>
                <div className="about__content-table-content case-study__content-container">
                    <h3 className="case-study__heading">Table of Content</h3>
                    <a href="#research">1. Research & Competitive Analysis</a>
                    <a href="#moodbroad">2. Project Brief & Moodboard</a>
                    <a href="#wireframe">3. Wireframing & Feedback</a>
                    <a href="#ui">4. UI Design & Menu Styling</a>
                    <a href="#dev">5. Development in Framer</a>
                    <a href="#feedback">6. Client feedback</a>
                </div>
                <div id='research' className="case-study__content-container">
                    <h3 className="case-study__heading">Research & Competitive Analysis</h3>
                    <p className="case-study__text">
                        I researched similar café and bubble tea websites, especially in France, to understand the market and stand out. This step helped clarify Café Hà Nội’s unique positioning and audience needs.
                    </p>
                </div>
                <div id='moodbroad' className="case-study__content-container">
                    <h3 className="case-study__heading">Project Brief & Moodboard</h3>
                    <p className="case-study__text">
                        Next, I shared a project brief and moodboard with the client, showcasing my understanding of her vision. The moodboard balanced cultural authenticity with a modern, inviting vibe, aligning us on the design direction.
                    </p>
                    <img src={moodboard} alt="moodboard" className="case-study__image" />
                </div>
                <div id='wireframe' className="case-study__content-container">
                    <h3 className="case-study__heading">Wireframing & Feedback</h3>
                    <p className="case-study__text">
                        Using the approved moodboard as a guide, I created wireframes to outline the website’s structure and flow. After presenting them, I incorporated the client’s feedback to finalize the layout.
                    </p>
                </div>
                <div id='ui' className="case-study__content-container">
                    <h3 className="case-study__heading">UI Design & Menu Styling</h3>
                    <p className="case-study__text">
                        I designed the high-fidelity UI in Figma, emphasizing a clean, vibrant look. To enhance the ordering experience, I proposed adding a simple three-step process bar to guide customers. This approach not only clarifies the ordering process but also complements the clean menu design, featuring favorite and best-selling drinks at the top to reduce cognitive load when navigating through various delicious options.
                    </p>
                    <Callout type="success" icon={checkIcon}>
                        <strong>Reducing cognitive load and the paradox of choice</strong> is vital for improving customer experience. Simplifying options allows customers to make better decisions and enhances their overall satisfaction.
                    </Callout>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={menu} alt="Cafe Hanoi menu image" />
            </div>
            <section className="case-study__content">
                <div className="case-study__content-container">
                    <p className="case-study__text">
                        Additionally, I <strong>included social proof</strong> on the homepage, showcasing customer reviews and testimonials to validate the brand and build trust with new visitors.
                    </p>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={socialProof} alt="Social proof image" />
            </div>
            <section className="case-study__content">
                <div id='dev' className="case-study__content-container">
                    <h3 className="case-study__heading">Development in Framer</h3>
                    <p className="case-study__text">
                        I built the site in Framer, adding smooth animations for a polished and responsive experience. The <Link to="https://cafehanoi.framer.website/" target="_blank" rel="noopener noreferrer">website</Link> result is authentic, modern, and true to Café Hanoi’s brand.
                    </p>
                </div>
                <div id='feedback' className="case-study__content-container">
                    <h3 className="case-study__heading">Client feedback</h3>
                    <p className="case-study__text">
                        Since launching the website, we've achieved impressive results:
                    </p>
                    <Callout type="success" icon={handIcon}>
                        <p><strong>15% increase</strong> in our Google page visits.</p>
                        <p><strong>30% rise</strong> in foot traffic to the shop.</p>
                    </Callout>
                    <p className="case-study__text quote">
                        "Our social media post received overwhelmingly positive feedback, with many compliments on the design's sophistication. Matin brought my vision for Café Hà Nội’s website to life with a clean, inviting design that reflects our brand. His attentive approach and thoughtful animations have significantly enhanced the user experience. I couldn’t be happier with the final result!"
                    </p>
                </div>
            </section>
            <section className="case-study__content">
                <Callout type="callout" icon={handIcon}>
                    Get more time? Check out <Link to="/case-study1">Digital Signage Case study</Link>
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
    )
}

export default CaseStudy2