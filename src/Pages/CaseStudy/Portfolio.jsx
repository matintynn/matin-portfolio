import React from 'react'
import './CaseStudy1.scss';
import { Link } from 'react-router-dom';
import Callout from '../../Components/Callout/Callout';
import handIcon from '../../assets/icons/hand-icon.svg';
import backTop from '../../assets/icons/top-icon.svg';
import casestudyBanner from '../../assets/portfolio-img/portfolio-banner.svg';
import img1 from '../../assets/portfolio-img/img1.png';
import img2 from '../../assets/portfolio-img/img2.png';
import img3 from '../../assets/portfolio-img/img3.png';
import img4 from '../../assets/portfolio-img/img4.png';
import img5 from '../../assets/portfolio-img/img5.png';
import img6 from '../../assets/portfolio-img/img6.png';

const Portfolio = () => {
    return (
        <div className="case-study">
            {/* Project Banner */}
            <div id='case1' className="case-study__banner">
                <img src={casestudyBanner} alt="Project Banner" className="case-study__banner-img" />
            </div>
            {/* Case Study Content */}
            <section className="case-study__content">
                <Callout type="callout">
                    Like my portfolio? Feel free to clone the source code from my <Link to="https://github.com/matintynn/matin-portfolio.git" target="_blank" rel="noopener noreferrer">GitHub (main branch)</Link><br />You're welcome! Let’s keep the learning and sharing going!
                </Callout>
            </section>
            <section className="case-study__content">
                <div className="about__content-table-content case-study__content-container">
                    <h3 className="case-study__heading">Table of Content</h3>
                    <a href="#purpose">1. Purpose & Inspiration</a>
                    <a href="#goal">2. Goal</a>
                    <a href="#setup">3. Tech Stack & Setup</a>
                    <a href="#walkthrough">4. Behind-the-scenes walkthrough</a>
                    <a href="#takeaways">5. Learning & Key Take Aways</a>
                </div>
                <div id='purpose' className="case-study__content-container">
                    <h3 className="case-study__heading">Purpose & Inspiration</h3>
                    <p className="case-study__text">
                        I created this portfolio to share my recent projects and design insights, offering an honest look at my UX journey—what I've learned, the challenges I've tackled.
                    </p>
                    <p className="case-study__text">
                        My inspiration came from a few places that I love and connect with. First, the clean, organized feel of the Notion interface! Their call-out snippets and on-page quotes make every piece of content stand out, and I wanted that same vibe for my portfolio.Then there's Growth.Design—my go-to for brilliant, psychology-driven UX case studies. They inspired me to keep storytelling and user insight front and center.
                    </p>
                </div>
                <div id='goal' className="case-study__content-container">
                    <h3 className="case-study__heading">Purpose & Inspiration</h3>
                    <ul className='list-items'>
                        <li>Design a clean, user-friendly showcase for my recent projects</li>
                        <li>Create an inviting space to share a bit about myself</li>
                        <li>Build an interactive canvas to apply and highlight my coding abilities</li>
                    </ul>
                </div>
                <div id='setup' className="case-study__content-container">
                    <h3 className="case-study__heading">Tech stack & setup</h3>
                    <p className="case-study__text">
                        For my portfolio, I chose a tech stack that keeps things fun and easy to work with! I built it all using React because it makes everything super fast and responsive—just how I like it! Plus, I love how React feels similar to Figma, the design tool I used to create this portfolio.
                    </p>
                    <p className="case-study__text">
                        With React, I can create components, use variables, and build modular designs, making it easy to scale and reuse elements while saving time.
                    </p>
                </div>
                <div id='walkthrough' className="case-study__content-container">
                    <h3 className="case-study__heading">Behind-the-Scenes Walkthrough</h3>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Step 1 - Set up</span>
                        </p>
                        <p className="case-study__text">
                            After finalizing the designs in Figma, I was excited to bring them to life with code. The first step was setting up my React environment, which provided a solid foundation for building a responsive and dynamic site.
                        </p>
                        <p className="case-study__text">
                            <span className='subtext'>Step 2 - Create components</span>
                        </p>
                        <p className="case-study__text">
                            As I started coding, I focused on organizing my project files and folders. I quickly realized that keeping components, pages, and assets in separate folders made everything much easier to manage. This structure helps me maintain clean code and stay organized as the project grows.
                        </p>
                        <img src={img1} alt="img1" className="case-study__image" />
                        <p className="case-study__text">
                            I focused on creating reusable components. This approach is like having a set of building blocks that I can use the same pieces to assemble different sections throughout the site.
                        </p>
                        <Callout type="callout">
                            <strong>Example:</strong> this call-out component, used for notes, quotes, and call-out sections across the portfolio. It’s flexible and easy to update, accepting props like type, children, icon to keep everything consistent and adaptable!
                        </Callout>
                        <img src={img2} alt="img2" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Step 3 - Styling</span>
                        </p>
                        <p className="case-study__text">
                            For styling, I opted for Sass. I appreciate how it allows me to create variables and keep my styles organized. This makes it easy to manage and update styles as needed. I crafted specific styles for various elements, ensuring everything aligned with my overall design vision, including the playful sticky notes that add character to the layout.
                        </p>
                        <img src={img3} alt="img3" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Step 4 - Adding animation</span>
                        </p>
                        <p className="case-study__text">
                            Next, I integrated Framer Motion for animations. Thoughtful animations can enhance user experience, and I wanted to incorporate subtle transitions that make interactions feel smooth and engaging for my hero content. This attention to detail helps create a polished feel throughout the site.
                        </p>
                        <img src={img4} alt="img4" className="case-study__image" />
                        <img src={img5} alt="img5" className="case-study__image" />
                    </div>
                    <div>
                        <p className="case-study__text">
                            <span className='subtext'>Step 5 - Responsive adaption</span>
                        </p>
                        <p className="case-study__text">
                            To make my website fully responsive, I set up media queries within each component and page’s Sass file. Additionally, I defined breakpoints for both mobile and desktop within variables, making it easier to manage and update responsiveness site-wide.
                        </p>
                        <img src={img6} alt="img6" className="case-study__image" />
                    </div>
                </div>
                <div id='takeaways' className="case-study__content-container">
                    <h3 className="case-study__heading">learnings & key takeaways</h3>
                    <p className="case-study__text">
                        In building my portfolio, I focused on creating reusable components—building blocks that streamline workflow and maintain consistency across pages. For example, I designed a flexible case study component that makes adding new projects simple, saving time and ensuring a cohesive look.
                    </p>
                    <p className="case-study__text">
                        Using Sass for styling allowed me to organize and manage my styles efficiently. By creating variables and reusable styles, I could keep my design vision consistent across the site. I also added playful touches like sticky notes to enhance the layout’s character.
                    </p>
                    <p className="case-study__text">
                        To elevate the user experience, I integrated Framer Motion for smooth, subtle animations. These animations bring a polished feel to interactions, making the site more engaging.
                    </p>
                    <p className="case-study__text">
                        Finally, I thoroughly tested the site across devices to ensure a seamless experience. This project taught me the importance of cohesive design, efficient workflows, and attention to detail for a professional, user-friendly portfolio.
                    </p>
                    <Callout type="callout">
                        That's a glimpse into how I coded my portfolio! I hope this gives you insight into the thought and care that went into creating it. You can also check out the source code on <Link to="https://github.com/matintynn/matin-portfolio.git" target="_blank" rel="noopener noreferrer">GitHub (main branch)</Link> for a closer look.
                    </Callout>
                </div>
                <div id='next' className="case-study__content-container">
                    <h3 className="case-study__heading">Next step</h3>
                    <ul className='list-items'>
                        <li>Create dark-mode</li>
                        <li>Add Blog page</li>
                    </ul>
                </div>
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

export default Portfolio