import React from 'react'
import './CaseStudy1.scss';
import { Link } from 'react-router-dom';
import Callout from '../../Components/Callout/Callout';
import handIcon from '../../assets/icons/hand-icon.svg'
import infoIcon from '../../assets/icons/info-icon.svg'
import checkIcon from '../../assets/icons/info-icon.svg'
import casestudyBanner from '../../assets/case-study-2/cs2-banner.svg';
import trend from '../../assets/case-study-2/industry-trend.svg';
import swot from '../../assets/case-study-2/swot.svg';
import cta from '../../assets/case-study-2/cta-img.svg';
import sitemap from '../../assets/case-study-2/hanoi-sitemap.svg';
import process from '../../assets/case-study-2/process-bar.svg';
import map from '../../assets/case-study-2/map.svg';
import websiteAnalysis from '../../assets/case-study-2/website-analysis.svg';
import menu from '../../assets/case-study-2/menu.svg';
import wireframe from '../../assets/case-study-2/wireframe.svg';
import moodboard from '../../assets/case-study-2/moodboard.svg';
import socialProof from '../../assets/case-study-2/social-proof.svg';
import backTop from '../../assets/icons/top-icon.svg';
import Quote from '../../Components/Quote/Quote';


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
                <Callout type="success">
                    <strong>📊 30% boost in foot traffic</strong>—creating a go-to spot for professionals and tourists to enjoy drinks, snacks, and work comfortably!
                </Callout>
            </section>
            <section className="case-study__content">
                <div className="case-study__content-container">
                    <h3 className="case-study__heading">Overview</h3>
                    <p className="case-study__text">
                        Café Hanoi, a Vietnamese café in Angers, France, needed a website to showcase its unique offerings—bubble tea and Vietnamese desserts—and build a local community. My goal was to design and develop a welcoming, culturally authentic site that aligned with the café’s brand values.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Challenge</span>
                        </p>
                        <p className="case-study__text">
                            Café Hanoi needed an engaging online presence to attract customers and communicate its unique Vietnamese-inspired offerings. The goal was to design a website that reflected the brand’s personality, showcased its menu and events, and differentiated it in a competitive market.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>Process</span>
                        </p>
                        <p className="case-study__text">
                            I started with in-depth research, exploring current trends in coffee and bubble tea website design, conducting stakeholder interviews, and performing both a SWOT and competitive analysis. This gave me a comprehensive understanding of Café Hanoi’s strengths, customer expectations, and opportunities for differentiation in the market.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>Outcome</span>
                        </p>
                        <p className="case-study__text">
                            The result is a website that effectively captures Café Hanoi’s brand essence, prioritized ease of use, and provided an inviting space for potential customers to connect with the café’s offerings. The design established a foundation for strong brand visibility and user engagement.
                        </p>
                    </div>
                </div>
                <div className="about__content-table-content case-study__content-container">
                    <h3 className="case-study__heading">Table of Content</h3>
                    <a href="#research">1. Discovery & Research</a>
                    <a href="#hypothesis">2. Hypothesis</a>
                    <a href="#foundation">3. Building the foundation</a>
                    <a href="#ui">4. UI Design</a>
                    <a href="#dev">5. Development in Framer</a>
                    <a href="#feedback">6. Client feedback</a>
                </div>
                <div id='research' className="case-study__content-container">
                    <h3 className="case-study__heading">Discovery & Research</h3>
                    <p className="case-study__text">
                        In this phase, I focused on understanding the café’s unique offerings, target audience, and competitive landscape. By exploring user needs, industry trends, and stakeholder goals, we gathered valuable insights to shape a website experience that truly captures Café Hanoi’s brand and resonates with its customers.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Industry Trends</span>
                        </p>
                        <p className="case-study__text">
                            I began by analyzing recent design and UX/UI trends in coffee and bubble tea shop websites, identifying styles and features that resonate with users in this niche. Current trends include:
                        </p>
                        <ul className='list-items'>
                            <li>CMinimalistic, Clean Interfaces: Streamlined designs with ample white space keep the focus on products, creating a calm, inviting experience.</li>
                            <li>Storytelling Content: Brands increasingly share their origin stories and ingredient journeys to create an emotional connection with users.</li>
                            <li>Illustrations and Custom Icons: Unique illustrations and icons add personality, making sites feel playful and distinctive.</li>
                            <li>Fun, Cute Visual Elements: Small animations and cheerful icons create a joyful, approachable brand image, appealing especially to younger audiences.</li>
                        </ul>
                        <img src={trend} alt="trend analysis img" className="case-study__image" />
                        <p className="case-study__text">
                            <span className='subtext'>Stakeholders Interview</span>
                        </p>
                        <p className="case-study__text">
                            I spoke with the café owner and staff to understand Cafe Hanoi Angers’ unique vision and values. These discussions provided insights into how the brand differs from other local cafes, emphasizing authenticity, quality, and community-building through events.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>SWOT Analysis</span>
                        </p>
                        <p className="case-study__text">
                            To understand Café Hanoi's unique position and growth potential, I conducted a SWOT analysis. This helped identify the café's strengths, challenges, and opportunities for deeper customer engagement.
                        </p>
                        <img src={swot} alt="moodboard" className="case-study__image" />
                        <p className="case-study__text">
                            <span className='subtext'>Competitive analysis</span>
                        </p>
                        <p className="case-study__text">
                            In order to better understand the competitive landscape, I analyzed two main competitors in Angers: Bubble Tea Wan and Elephan-T. Both of these cafés offer unique drinks and have established a digital presence, but there are key insights to be gained from their websites that could inform the Café Hanoi design.
                        </p>
                        <p className="case-study__text">
                            <strong>Key Features of Competitors:</strong>
                        </p>
                        <ul className='list-items'>
                            <li><strong>Menu Pages:</strong> Both websites feature a menu page where customers can view available drinks, but the organization and presentation of these menus vary.</li>
                            <li><strong>Social Proof:</strong> Social proof, such as customer reviews and testimonials, is featured on both sites to build trust and authenticity.</li>
                            <li><strong>Map & Location:</strong> Tea Wan display their location with an interactive map, helping users easily find the café.</li>
                            <li><strong>About Us Page:</strong> Each website includes an "About Us" page/section, sharing their story and mission, which adds personality to the brands.</li>
                        </ul>
                        <img src={websiteAnalysis} alt="moodboard" className="case-study__image" />
                        <p className="case-study__text">
                            <span className='subtext'>Research Thoughts</span>
                        </p>
                        <p className="case-study__text">
                            While both competitors have established a solid digital presence, their websites could benefit from <strong>improvements in readability, visual hierarchy, and the simplification</strong>  of their menus to reduce choice overload.
                        </p>
                        <Callout type="callout">
                            📝 These insights highlight opportunities for Café Hanoi to improve user experience by focusing on clarity, intuitive navigation, and using visuals and content that align with the café's unique identity and brand.
                        </Callout>
                    </div>
                </div>
                <div id='hypothesis' className="case-study__content-container">
                    <h3 className="case-study__heading">Hypothesis</h3>
                    <p className="case-study__text">
                        Based on the challenges identified in the competitive analysis, user needs, and current trends in the coffee and bubble tea industry, I hypothesize that:
                    </p>
                    <Quote>
                        A clean, visually engaging website with an organized menu, clear hierarchy, and storytelling can help to reduce cognitive overload, improve customer decision-making, attract locals and tourists, and build community through its cultural identity and events.
                    </Quote>
                </div>
                <div id='wireframe' className="case-study__content-container">
                    <h3 className="case-study__heading">Building the foundation</h3>
                    <p className="case-study__text">
                        I suggest a straightforward <strong>Information Architecture (IA)</strong> structure that focuses on clarity and simplicity:
                    </p>
                    <img src={sitemap} alt="sitemap" className="case-study__image" />
                    <p className="case-study__text">
                        <strong>Creating wireframes</strong> enables early design decisions by translating my research insights into a clear layout of navigation and key elements.
                    </p>
                    <Callout type="success">
                        📌 By tying the wireframe directly to research insights, I want to ensure that the layout not only meets user expectations but also aligns with business goals and brand values.
                    </Callout>
                    <img src={wireframe} alt="wireframe" className="case-study__image" />
                    <p className="case-study__text">
                        In addition, I created a <strong>style tile to share my vision and design direction</strong> with stakeholders. The style tile includes key visual elements I plan to use in the UI, such as color schemes, typography, and imagery styles.
                    </p>
                    <img src={moodboard} alt="style tiles" className="case-study__image" />
                    <Quote>
                        However, I assured stakeholders that this is a flexible guide, which I’ll adapt throughout the UI design process to best resonate with users and align with the brand’s evolving needs.
                    </Quote>
                </div>
                <div id='ui' className="case-study__content-container">
                    <h3 className="case-study__heading">UI Design</h3>
                    <p className="case-study__text">
                        I designed the high-fidelity UI in Figma, emphasizing a clean, vibrant look. To enhance the ordering experience, I proposed adding a simple three-step process bar to guide customers. This approach not only clarifies the ordering process but also complements the clean menu design, featuring favorite and best-selling drinks at the top to reduce cognitive load when navigating through various delicious options.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Authenticity</span>
                        </p>
                        <p className="case-study__text">
                            The Hero section CTA emphasizes authenticity, appealing to local customers who value genuine cultural experiences. By highlighting Café Hà Nội’s authentic Vietnamese offerings, it sets the brand apart from other cafes and bubble tea shops in the area, creating trust and emotional resonance through alignment with community values.
                        </p>
                        <img src={cta} alt="cta image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Simplified Ordering Process</span>
                        </p>
                        <p className="case-study__text">
                            To make the ordering process as quick and straightforward as possible, I included a progressive bar with three simple steps. This visual cue helps users clearly understand the steps involved, making the task feel easier and more manageable.
                        </p>
                        <img src={process} alt="process image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Preventing Paradox of Choice of The Menu</span>
                        </p>
                        <p className="case-study__text">
                            Offering too many options initially can cause decision fatigue and dissatisfaction. I structured the menu to prioritize popular and recommended items, creating a clear hierarchy that guides users toward quick, confident choices.
                        </p>
                        <Callout type="success">
                            👉 Click <a href="/full-menu.pdf" target="_blank" rel="noopener noreferrer">here</a> to see the full menu design!
                        </Callout>
                        <img src={menu} alt="menu image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Convenience & Task Completion</span>
                        </p>
                        <p className="case-study__text">
                            The Google Map integration saves users time by allowing them to quickly find the store location without having to open a separate app or type into Google. This eliminates distractions that could interfere with their goal—finding the store.
                        </p>
                        <img src={map} alt="google map image" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Social Proof (Trust & Authority)</span>
                        </p>
                        <p className="case-study__text">
                            Social proof is a powerful psychological principle in consumer behavior. According to <a href="https://cxl.com/blog/cialdinis-principles-persuasion/#:~:text=Also%20known%20as%20Cialdini's%207,liking%2C%20scarcity%2C%20and%20unity." target="_blank" rel="noopener noreferrer">Cialdini's Principle of Social Proof</a> , people are more likely to trust a product or service when they see others have already trusted it. To enhance this effect, I included real customer images alongside genuine reviews, reinforcing the authenticity of the feedback and making it more relatable. This not only boosts trust but also creates a stronger emotional connection with potential customers, encouraging them to take action.
                        </p>
                        <Callout>
                            Subheadline <strong>"Straight from our Google reviews!"</strong> to emphasize our reliability.
                        </Callout>
                    </div>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={socialProof} alt="Social proof image" />
            </div>
            <section className="case-study__content">
                <div id='feedback' className="case-study__content-container">
                    <Quote>
                        By applying UX psychology principles across Café Hanoi’s website, I crafted an engaging, user-centric experience. Each design choice—from the Hero content to social proof—aligns with users' mental models and emotional needs, encouraging action, loyalty, and return visits.
                    </Quote>
                </div>
            </section>
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
                    <Callout type="success">
                        <p><strong>15% increase</strong> in our Google page visits.</p>
                        <p><strong>30% rise</strong> in foot traffic to the shop.</p>
                        <p>Noticed<strong> an increase in young professionals</strong> visiting the shop.</p>
                    </Callout>
                    <Quote person="Client">
                        Our social media received fantastic feedback, with compliments on the design's sophistication. Matin brought my vision for Café Hanoi's website to life with a clean, welcoming design that captures our brand. His attention to detail and thoughtful animations greatly improved the user experience. I couldn't be happier!
                    </Quote>
                </div>
            </section>
            <section className="case-study__content">
                <Callout type="callout">
                    Get more time? Check out my <Link to="/case-study1">Digital Signage Case study</Link>
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