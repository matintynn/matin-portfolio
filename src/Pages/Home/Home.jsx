import React from 'react';
import './Home.scss';
import Hero from '../../Components/Hero/Hero';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ProjectData from '../../Data/ProjectData';
import backTop from '../../assets/icons/top-icon.svg'
import Callout from '../../Components/Callout/Callout';
import handIcon from '../../assets/icons/hand-icon.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <section className="home-page__projects">
                <div className="home-page__projects-grid">
                    {ProjectData.map((project, index) => (
                        <div
                            key={project.id}
                            className="home-page__project-section"
                            style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#FAFAFA' }}
                        >
                            <ProjectCard
                                thumbnail={project.thumbnail}
                                name={project.name}
                                description={project.description}
                                projectLink={project.link}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="space">

            </section>
            <section className="container-md home-page__callout">
                <Callout type="info">
                    👀 Interested in my portfolio? Want to take a <strong>behind-the-scenes</strong> tour? <br />Click <Link to="/behind-the-scene-tour">here</Link> and let’s dive in!
                </Callout>
            </section>
            <div className="back-to-top">
                <div className="back-to-top__container">
                    <a href="#hero" className="back-to-top">
                        <img src={backTop} alt="back to top" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
