import React from 'react'
import './ProjectCard.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = ({ thumbnail, name, description, projectLink }) => {
    return (
        <div className="project-card">
            <div className="project-card__container">
                <Link to={projectLink} className="project-card__thumbnail">
                    <img src={thumbnail} alt={`${name} Thumbnail`} />
                </Link>
                <div className="project-card__content">
                    <h3 className="project-card__name">{name}</h3>
                    <p className="project-card__description">{description}</p>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
};


export default ProjectCard;