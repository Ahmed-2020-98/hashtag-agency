"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Preloader.module.css";

const brandLetters = "هشتاج".split("");

const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 3 + Math.random() * 4,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
}));

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only show on first visit per session
        const hasLoaded = sessionStorage.getItem("preloaderShown");
        if (hasLoaded) return;

        setVisible(true);
        sessionStorage.setItem("preloaderShown", "true");
        // Simulate loading progress
        const duration = 2200;
        const interval = 30;
        const steps = duration / interval;
        let current = 0;

        const timer = setInterval(() => {
            current++;
            // Eased progress: fast start, slow middle, fast end
            const t = current / steps;
            const eased = t < 0.5
                ? 2 * t * t
                : 1 - Math.pow(-2 * t + 2, 2) / 2;
            setProgress(Math.min(Math.round(eased * 100), 100));

            if (current >= steps) {
                clearInterval(timer);
                setTimeout(() => setVisible(false), 400);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className={styles.preloader}
                    exit={{
                        clipPath: "circle(0% at 50% 50%)",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                    }}
                >
                    {/* Background Shapes */}
                    <motion.div
                        className={`${styles.bgShape} ${styles.bgShape1}`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className={`${styles.bgShape} ${styles.bgShape2}`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.div
                        className={`${styles.bgShape} ${styles.bgShape3}`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />

                    {/* Particles */}
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className={styles.particle}
                            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                delay: p.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Center Content */}
                    <div className={styles.content}>
                        {/* Logo with Rings */}
                        <div className={styles.logoWrap}>
                            {/* Outer Ring */}
                            <motion.div
                                className={`${styles.ring} ${styles.ringOuter}`}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Inner Ring */}
                            <motion.div
                                className={styles.ring}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Hashtag */}
                            <motion.span
                                className={styles.hashSymbol}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                            >
                                #
                            </motion.span>
                        </div>

                        {/* Brand Name Letters */}
                        <div className={styles.brandName}>
                            {brandLetters.map((letter, i) => (
                                <motion.span
                                    key={i}
                                    className={styles.letter}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.5 + i * 0.1,
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        {/* Progress */}
                        <motion.div
                            className={styles.progressWrap}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <div className={styles.progressTrack}>
                                <motion.div
                                    className={styles.progressBar}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className={styles.progressText}>LOADING</span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
