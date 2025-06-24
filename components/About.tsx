"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
    // const [resumeType, setResumeType] = useState("");

    // useEffect(() => {
    //     // Randomly choose between SWE and DS resume (50/50 chance)
    //     const randomChoice = Math.random() < 0.5 ? "SWE" : "DS";
    //     setResumeType(randomChoice);
    // }, []);

    const resumeLink = "/DavidZhanResume.pdf";

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            id="about"
            className="min-h-screen bg-background text-foreground py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="max-w-3xl mx-auto space-y-8"
                variants={stagger}
                initial="initial"
                animate="animate"
            >
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold mt-20"
                    variants={fadeInUp}
                >
                    About me
                </motion.h1>

                <motion.div
                    className="space-y-6 text-lg leading-relaxed text-foreground/80"
                    variants={fadeInUp}
                >
                    <p>
                        I am a rising senior at the University of Pennsylvania pursuing a
                        BSE + MSE in Computer Science along with
                        Minors in Math and Data Science.
                    </p>

                    <p>
                        Last summer (2024), I worked as a SWE internfor a UMD gut health start-up called Ventoscity,
                        building their mobile application.
                    </p>

                    <p>
                        This summer (2025), I will be an intern on the AGI team at Amazon, working on optimizing performance of Nova base models
                        through pretraining data enhancement techniques, such as distillation, augmentation, and chain of thought prompting.
                    </p>

                    <p>
                        My interests include machine learning, web development, and solving problems. Outside of
                        academics, I enjoy playing sports like soccer, basketball,
                        and tennis. Check out my socials and resume below.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
                    variants={fadeInUp}
                >
                    <Link href="/projects">
                        <button
                            className="px-6 py-3 rounded-lg bg-foreground text-background font-medium 
                                hover:bg-opacity-80 transition-all transform hover:scale-105"
                        >
                            See my projects
                        </button>
                    </Link>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://linkedin.com/in/davidzhan123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-foreground hover:text-opacity-80 transition-all transform hover:scale-110"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/dzhan111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-foreground hover:text-opacity-80 transition-all transform hover:scale-110"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:dazhan@sas.upenn.edu"
                            className="text-2xl text-foreground hover:text-opacity-80 transition-all transform hover:scale-110"
                            aria-label="Email Contact"
                        >
                            <MdOutlineEmail />
                        </a>
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-foreground hover:text-opacity-80 transition-all transform hover:scale-110"
                            aria-label="Resume"
                        >
                            <FaAddressBook />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
