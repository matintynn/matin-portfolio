import React from 'react';
import './Hero.scss';
import { color, motion } from 'framer-motion';
import Callout from '../Callout/Callout';
import Quote from '../Quote/Quote'

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
                        UX/UI designer crafting interactive, <strong>research-driven</strong> digital experiences for measurable <strong>business impact.</strong>
                    </motion.h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 150, damping: 50, delay: 0.8 }}
                >
                    {/* <Callout
                        type="callout">
                        Experience the full design process and understand the strategy behind every design choice.<br /> <strong>Read more in my case studies below!</strong>
                    </Callout> */}
                    <Quote>
                        Experience the full design process and understand the strategy behind every design choice.<br /> <strong>Read more in my case studies below!</strong>
                    </Quote>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;