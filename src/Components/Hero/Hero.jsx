import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';
import Callout from '../Callout/Callout';

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
            duration: 0.8,
            ease: "easeInOut", // Standard easing
            type: "spring", // Physics-based transition
            stiffness: 150,
            damping: 50
        }
    }, // End with full opacity and original position
};

const Hero = () => {
    return (
        <section id='hero' className="hero">
            <div className="hero__container">
                <motion.div
                    variants={heroVariants}
                    initial="initial"
                    animate="animate"
                    className="hero__content-text">
                    <motion.h1 variants={noteVariants} className='hero__text'>
                        Start with in-depth <strong>research and insights,</strong>
                    </motion.h1>
                    <motion.h1 variants={noteVariants} className='hero__text'>
                        Infuse it with <strong>human-centered expertise,</strong>
                    </motion.h1>
                    <motion.h1 variants={noteVariants} className='hero__text'>
                        Blend in an engaging <strong>interactive flavor,</strong>
                    </motion.h1>
                    <motion.h1 variants={noteVariants} className='hero__text'>
                        And finish with impact on <strong>the bottom line.</strong>
                    </motion.h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 150, damping: 50, delay: 1.4 }}
                >
                    <Callout
                        type="callout">
                        👉 From first sketch to final click—experience the full process behind every design.<br /> <strong>Explore my case studies below!</strong>
                    </Callout>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;