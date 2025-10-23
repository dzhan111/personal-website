"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
                        I am a student at the University of Pennsylvania pursuing a
                        BSE + MSE in Computer Science along with
                        Minors in Math and Data Science.
                    </p>

                    <p>
                        Last summer (2024), I worked as a SWE intern for a UMD gut health start-up called Ventoscity,
                        building their mobile application in Flutter and Swift.  
                    </p>

                    <p>
<<<<<<< HEAD
                        This summer (2025), I am working as an MLE intern on the AGI team at Amazon. I am working to both build a data augmentation pipeline 
                        for continued pretraining of Nova base models and also use this pipeline to run experiments to determine optimal prompts and datamix ratios 
                        that boost model performance on reasoning benchmarks such as MMLU and ARCC. 
=======
                        This summer (2025), I was an intern on the AGI team at Amazon, working on optimizing performance of Nova (Amazon's flagship LLM) base models
                        through pretraining data enhancement techniques, such as distillation, augmentation, and chain of thought prompting. I also designed and deployed
                        an end to end data augmentation pipeline for unlabeled data that decreased average inference time by a factor of 30.
>>>>>>> b940bfa ( resume update)
                    </p>

                    <p>
                        My interests include machine learning, web development, and making fun apps to solve niche problems. Outside of
                        academics, I enjoy playing sports like soccer, basketball, and tennis. Check out my socials and resume below.
                    </p>
                </motion.div>

                    <motion.div
                className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 pt-4 max-w-3xl mx-auto"
                variants={fadeInUp}
                >
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/projects">
                    <button className="px-6 py-3 rounded-lg bg-foreground text-background font-medium 
                                        hover:bg-opacity-80 transition-all transform hover:scale-105">
                        Projects
                    </button>
                    </Link>
                    <Link href={resumeLink}>
                    <button className="px-6 py-3 rounded-lg bg-foreground text-background font-medium 
                                        hover:bg-opacity-80 transition-all transform hover:scale-105">
                        Resume
                    </button>
                    </Link>
                </div>

                {/* Social icons */}
                <div className="flex gap-6">
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
                </div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default About;
