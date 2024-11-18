import React from 'react'
import './CaseStudy1.scss';
import { Link } from 'react-router-dom';
import Callout from '../../Components/Callout/Callout';
import casestudyBanner from '../../assets/case-study-2/cs2-banner.png';
import trend from '../../assets/case-study-2/industry-trend.png';
import swot from '../../assets/case-study-2/swot.png';
import cta from '../../assets/case-study-2/cta-img.png';
import sitemap from '../../assets/case-study-2/hanoi-sitemap.png';
import process from '../../assets/case-study-2/process-bar.png';
import space from '../../assets/case-study-2/space-img.png';
import map from '../../assets/case-study-2/map.png';
import lang from '../../assets/case-study-2/lang.png';
import websiteAnalysis from '../../assets/case-study-2/website-analysis.png';
import menu from '../../assets/case-study-2/menu.png';
import wireframe from '../../assets/case-study-2/wireframe.png';
import moodboard from '../../assets/case-study-2/moodboard.png';
import socialProof from '../../assets/case-study-2/social-proof.png';
import backTop from '../../assets/icons/top-icon.svg';
import Quote from '../../Components/Quote/Quote';


const CaseStudy2 = () => {
    return (
        <div className="case-study">
            {/* Project Banner */}
            <div id='case1' className="case-study__banner">
                <a href="https://cafehanoi.framer.website/" target="_blank" rel="noopener noreferrer">
                    <img src={casestudyBanner} alt="Project Banner" className="case-study__banner-img" loading="lazy" />
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
                        Café Hà Nội, a Vietnamese café in Angers, France, needs a website to showcase its unique offerings—bubble tea and Vietnamese desserts—and to build a local community. My goal is to design and develop a welcoming, culturally authentic site that aligns with the café’s brand values.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Challenge</span>
                        </p>
                        <p className="case-study__text">
                            The brand needs an engaging online presence to attract customers and communicate its unique Vietnamese-inspired offerings. The goal is to design a website that reflects the brand’s personality, showcases its menu and events, and differentiates it in a competitive market.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>Process</span>
                        </p>
                        <p className="case-study__text">
                            I begin with in-depth research, exploring current trends in coffee and bubble tea website design, conducting stakeholder interviews, and performing both a SWOT and competitive analysis. This gives me a comprehensive understanding of Café Hanoi’s strengths, customer expectations, and opportunities for differentiation in the market.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>Outcome</span>
                        </p>
                        <p className="case-study__text">
                            The result is a website that captures Café Hanoi's brand essence, emphasizes user-friendly navigation, and creates an inviting space for potential customers to explore the café's offerings. This design builds a foundation for strong brand visibility and encourages customer engagement.
                        </p>
                    </div>
                </div>
                <div className="spacing-top-bottom"></div>
                <div className="about__content-table-content case-study__content-container">
                    <h3 className="case-study__heading">Table of Content</h3>
                    <a href="#research">1. Discovery & Research</a>
                    <a href="#hypothesis">2. Hypothesis</a>
                    <a href="#foundation">3. Building the foundation</a>
                    <a href="#ui">4. UI Design</a>
                    <a href="#dev">5. Development in Framer</a>
                    <a href="#feedback">6. Client feedback</a>
                    <a href="#learning">7. Learnings & Take Aways</a>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='research' className="case-study__content-container">
                    <h3 className="case-study__heading">Discovery & Research</h3>
                    <p className="case-study__text">
                        Research forms the foundation of effective design. At the very beginning of the process, I focus on understanding Café Hanoi's unique offerings, target audience, and competitive landscape. By exploring user needs, industry trends, and stakeholder goals, I gather valuable insights to shape a website experience that authentically captures the brand's value and resonates with its customers.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Industry Trends</span>
                        </p>
                        <p className="case-study__text">
                            I analyze recent design and UX/UI trends in coffee and bubble tea websites, identifying styles and features that resonate with users in this niche. Current trends include:
                        </p>
                        <ul className='list-items'>
                            <li>CMinimalistic, Clean Interfaces: Streamlined designs with ample white space keep the focus on products, creating a calm, inviting experience.</li>
                            <li>Storytelling Content: Brands increasingly share their origin stories and ingredient journeys to create an emotional connection with users.</li>
                            <li>Illustrations and Custom Icons: Unique illustrations and icons add personality, making sites feel playful and distinctive.</li>
                            <li>Fun, Cute Visual Elements: Small animations and cheerful icons create a joyful, approachable brand image, appealing especially to younger audiences.</li>
                        </ul>
                        <img src={trend} alt="trend analysis img" className="case-study__image" loading="lazy" />
                        <p className="case-study__text">
                            <span className='subtext'>Stakeholders Interview</span>
                        </p>
                        <p className="case-study__text">
                            I schedule a video meeting with the café owner and staff to understand Café Hanoi Angers' vision and values. These discussions reveal what sets the brand apart from other local cafes, emphasizing authenticity, quality, and community-building through events.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>SWOT Analysis</span>
                        </p>
                        <p className="case-study__text">
                            To understand Café Hà Nội's unique position and growth potential, I conduct a SWOT analysis, identifying strengths, challenges, and opportunities for deeper customer engagement.
                        </p>
                        <img src={swot} alt="moodboard" className="case-study__image" loading="lazy" />
                        <p className="case-study__text">
                            <span className='subtext'>Competitive analysis</span>
                        </p>
                        <p className="case-study__text">
                            To understand the competitive landscape, I analyze two main competitors in Angers: Bubble Tea Wan and Elephan-T. Both cafés offer unique drinks and have established an online presence. Their websites provide valuable insights into design strategies, customer engagement tactics, and digital branding, which inform the Café Hà Nội website design.
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
                        <img src={websiteAnalysis} alt="moodboard" className="case-study__image" loading="lazy" />
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
                <div className="spacing-top-bottom"></div>
                <div id='hypothesis' className="case-study__content-container">
                    <h3 className="case-study__heading">Hypothesis</h3>
                    <p className="case-study__text">
                        Based on the challenges identified in the competitive analysis, user needs, and current trends in the coffee and bubble tea industry, I hypothesize that:
                    </p>
                    <Quote>
                        A clean, visually engaging website with an organized menu, clear hierarchy, and storytelling can help to reduce cognitive overload, improve customer decision-making, attract locals and tourists, and build community through its cultural identity and events.
                    </Quote>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='foundation' className="case-study__content-container">
                    <h3 className="case-study__heading">Building the foundation</h3>
                    <p className="case-study__text">
                        I suggest a straightforward <strong>Information Architecture (IA)</strong> structure that focuses on clarity and simplicity:
                    </p>
                    <img src={sitemap} alt="sitemap" className="case-study__image" loading="lazy" />
                    <p className="case-study__text">
                        <strong>Creating wireframes</strong> enables early design decisions by translating my research insights into a clear layout of navigation and key elements.
                    </p>
                    <Callout type="success">
                        📌 By tying the wireframe directly to research insights, I want to ensure that the layout not only meets user expectations but also aligns with business goals and brand values.
                    </Callout>
                    <img src={wireframe} alt="wireframe" className="case-study__image" loading="lazy" />
                    <p className="case-study__text">
                        In addition, I create a style moodboard to communicate my design vision and direction to stakeholders. The style tile includes key visual elements such as color schemes, typography, and imagery styles, ensuring alignment with the project’s goals and the brand’s identity.
                    </p>
                    <img src={moodboard} alt="style tiles" className="case-study__image" loading="lazy" />
                    <Quote>
                        ✍🏻 I assure stakeholders that this moodboard serves as a flexible guide, one that I adapt throughout the UI design process to best resonate with users and align with the brand’s evolving needs.
                    </Quote>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='ui' className="case-study__content-container">
                    <h3 className="case-study__heading">UI Design</h3>
                    <p className="case-study__text">
                        I design the high-fidelity UI in Figma, emphasizing a clean and vibrant look. To enhance the ordering experience, I propose adding a simple three-step process bar to guide customers. This approach not only clarifies the ordering process but also complements the clean menu design, featuring favorite and best-selling drinks at the top to reduce cognitive load when navigating through various delicious options.
                    </p>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Authenticity</span>
                        </p>
                        <p className="case-study__text">
                            The Hero section CTA emphasizes authenticity, appealing to local customers who value genuine cultural experiences. By highlighting Café Hà Nội’s authentic Vietnamese offerings, it sets the brand apart from other cafes and bubble tea shops in the area, creating trust and emotional resonance through alignment with community values.
                        </p>
                        <img src={cta} alt="cta image" className="case-study__image" loading="lazy" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Create Visual Hierarchy & Environmental Cues</span>
                        </p>
                        <p className="case-study__text">
                            To differentiate from local competitors, I emphasize the café's spacious interior by showcasing images that guide customers' attention to this unique feature. The photos of customers enjoying the ample space create a strong visual hierarchy, drawing focus to the café's inviting atmosphere.
                        </p>
                        <p className="case-study__text">
                            This design appeals to key user segments such as digital nomads and young professionals, who seek a versatile, comfortable environment that supports both work and socializing. Highlighting this aspect resonates with their needs and can strongly influence their decision to visit.
                        </p>
                        <img src={space} alt="space image" className="case-study__image" loading="lazy" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Simplified Ordering Process</span>
                        </p>
                        <p className="case-study__text">
                            I include a simple three-step progress bar in the ordering process to streamline the user experience. This visual cue clarifies each step, making the process feel more manageable and reducing cognitive load.
                        </p>
                        <img src={process} alt="process image" className="case-study__image" loading="lazy" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Preventing Paradox of Choice of The Menu</span>
                        </p>
                        <p className="case-study__text">
                            Offering too many options initially leads to decision fatigue and dissatisfaction. I structure the menu to prioritize popular and recommended items, creating a clear hierarchy that guides users to make quicker, more confident choices.
                        </p>
                        <p className="case-study__text">
                            To make the experience more engaging, I use cute illustrations of bubble tea with a smile, adding a playful, on-trend touch that welcomes users and enhances the overall vibe.
                        </p>
                        <Callout type="success">
                            👉 Click <a href="/full-menu.pdf" target="_blank" rel="noopener noreferrer">here</a> to see the full menu design!
                        </Callout>
                        <img src={menu} alt="menu image" className="case-study__image" loading="lazy" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Convenience & Task Completion</span>
                        </p>
                        <p className="case-study__text">
                            The Google Map integration saves users time by allowing them to quickly find the store location without having to open a separate app or type into Google. This eliminates distractions that could interfere with their goal—finding the store.
                        </p>
                        <img src={map} alt="google map image" className="case-study__image" loading="lazy" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Social Proof (Trust & Authority)</span>
                        </p>
                        <p className="case-study__text">
                            Social proof is a powerful psychological principle in consumer behavior. According to <a href="https://cxl.com/blog/cialdinis-principles-persuasion/#:~:text=Also%20known%20as%20Cialdini's%207,liking%2C%20scarcity%2C%20and%20unity." target="_blank" rel="noopener noreferrer">Cialdini's Principle of Social Proof</a> , people are more likely to trust a product or service when they see others have already trusted it.
                        </p>
                        <p className="case-study__text">
                            To enhance this effect, I include real customer images alongside genuine reviews, reinforcing the authenticity of the feedback and making it more relatable. This not only builds trust but also creates a stronger emotional connection with potential customers, motivating them to take action.
                        </p>
                        <Callout>
                            Subheadline <strong>"Straight from our Google reviews!"</strong> to emphasize our reliability.
                        </Callout>
                    </div>
                </div>
            </section>
            <div className="case-study__img-fullwidth">
                <img src={socialProof} alt="Social proof image" loading="lazy" />
            </div>
            <section className="case-study__content">
                <div id='feedback' className="case-study__content-container">
                    <Quote>
                        By applying UX psychology principles across Café Hanoi’s website, I craft an engaging, user-centric experience. Every design choice—from the Hero content to social proof—aligns with users' mental models and emotional needs, driving action, fostering loyalty, and encouraging return visits.
                    </Quote>
                </div>
            </section>
            <section className="case-study__content">
                <div id='dev' className="case-study__content-container">
                    <h3 className="case-study__heading">Development in Framer</h3>
                    <p className="case-study__text">
                        I build <Link to="https://cafehanoi.framer.website/" target="_blank" rel="noopener noreferrer">the site</Link> in Framer, incorporating smooth animations for a polished and responsive user experience.
                    </p>
                    <p className="case-study__text">
                        I also suggest offering both English and French versions of the website and menu to better target tourists, as most local competitors do not provide this bilingual option. This approach enhances accessibility and inclusivity, expanding Café Hanoi’s reach to a broader audience and setting it apart from the competition. The result is an authentic, modern website that stays true to Café Hanoi’s brand.
                    </p>
                    <img src={lang} alt="lang image" className="case-study__image" loading="lazy" />
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='feedback' className="case-study__content-container">
                    <h3 className="case-study__heading">Client feedback</h3>
                    <p className="case-study__text">
                        Since launching the website, we've achieved impressive results:
                    </p>
                    <Callout type="success">
                        <p>Increased Google page visits by <strong>15%</strong> and foot traffic by <strong>30%</strong></p>
                        <p>Resulting in an average  <strong>60%</strong> increase in popular drink sales.</p>
                        <p>Noticed an increase in young professionals visiting the shop.</p>
                    </Callout>
                    <Quote person="Founder of Cafe Hanoi Angers">
                        Our social media received fantastic feedback, with compliments on the design's sophistication. Matin brought my vision for Café Hanoi's website to life with a clean, welcoming design that captures our brand. His attention to detail and thoughtful design greatly improved the user experience. I couldn't be happier!
                    </Quote>
                </div>
                <div className="spacing-top-bottom"></div>
                <div id='learning' className="case-study__content-container">
                    <h3 className="case-study__heading">Learnings & Take Aways</h3>
                    <div>
                        <ul className='list-items'>
                            <li>
                                <strong>Simplicity in Design:</strong> A clean, organized structure reduces cognitive load, helping users find what they need without feeling overwhelmed.
                            </li>
                            <li>
                                <strong>User-Centered Research:</strong> Deep research, from competitive analysis to stakeholder interviews, revealed user needs and brand qualities, guiding design choices aligned with user and business goals.
                            </li>
                            <li>
                                <strong>Balancing Personality with Usability:</strong> Integrating Vietnamese-themed visuals and storytelling added brand personality while keeping usability intact, helping Café Hà Nội stand out in a competitive market.
                            </li>
                            <li>
                                <strong>Addressing Choice Overload:</strong> Competitor analysis emphasized the need for clear hierarchy, especially in complex menus, to streamline choices and reduce decision fatigue.
                            </li>
                            <li>
                                <strong>Building Flexibility:</strong> A simple, scalable structure accommodates future growth, ensuring the design can evolve with Café Hà Nội’s needs, such as adding online ordering or event features.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="case-study__content">
                <Callout type="callout">
                    Get more time? Check out my <Link to="/interactive-digital-signage-case-study">Digital Signage Case study</Link>
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