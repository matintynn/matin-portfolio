import React from 'react';
import './Hero.scss';
import note1 from '../../assets/notes/note1.svg';
import note2 from '../../assets/notes/note2.svg';
import note3 from '../../assets/notes/note3.svg';
import note4 from '../../assets/notes/note4.svg';
import { motion } from 'framer-motion';

const heroVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.3, // Delay between each child animation
        },
    },
};

const noteVariants = {
    initial: { opacity: 0, y: 20 }, // Start with opacity 0 and move slightly down
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut", // Standard easing
            type: "spring", // Physics-based transition
            stiffness: 100,
            damping: 10
        }
    }, // End with full opacity and original position
};

const Hero = () => {
    return (
        <section id='hero' className="hero">
            <div className="hero__container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 150, delay: 1.6 }}
                    className='hero__text'>
                    Hello! I’m Matin Truong,
                    <span className='hero__text--strong'> a Product Designer & Developer...</span>
                </motion.h1>
                <motion.div
                    className="notes"
                    variants={heroVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="note note1" variants={noteVariants}>
                        <img src={note1} alt="note1" />
                    </motion.div>
                    <motion.div className="note note2" variants={noteVariants}>
                        <img src={note2} alt="note2" />
                    </motion.div>
                    <motion.div className="note note3" variants={noteVariants}>
                        <img src={note3} alt="note3" />
                    </motion.div>
                    <motion.div className="note note4" variants={noteVariants}>
                        <img src={note4} alt="note4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;