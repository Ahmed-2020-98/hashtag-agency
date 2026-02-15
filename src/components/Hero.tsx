"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            {/* Animated Background Elements */}
            <div className={styles.bgElements}>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={styles.floatingShape}
                        style={{
                            width: `${40 + i * 20}px`,
                            height: `${40 + i * 20}px`,
                            top: `${10 + i * 14}%`,
                            left: `${5 + i * 16}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 6 + i * 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}
                {/* Large Hashtag Symbol */}
                <motion.span
                    className={styles.bgHash}
                    animate={{ rotate: [0, 10, -10, 0], opacity: [0.05, 0.08, 0.05] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                    #
                </motion.span>
            </div>

            <div className={`container ${styles.inner}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        🚀 الرياض – الدمام – جدة
                    </motion.span>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        موقعك هو أول انطباع…
                        <br />
                        <span className={styles.titleHighlight}>خلّه احترافي</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        نصمم مواقع إلكترونية احترافية للشركات في الرياض والدمام وجدة
                        تساعدك على النمو وزيادة المبيعات.
                    </motion.p>

                    <motion.div
                        className="btn-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            ابدأ مشروعك الآن
                        </a>
                        <a href="#services" className="btn btn-outline">
                            اكتشف خدماتنا
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className={styles.stats}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.7 }}
                    >
                        <div className={styles.stat}>
                            <span className={styles.statNum}>+150</span>
                            <span className={styles.statLabel}>مشروع منجز</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>+80</span>
                            <span className={styles.statLabel}>عميل سعيد</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>+5</span>
                            <span className={styles.statLabel}>سنوات خبرة</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className={styles.wave}>
                <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
                    <path
                        d="M0 60L48 55C96 50 192 40 288 42C384 44 480 58 576 65C672 72 768 72 864 65C960 58 1056 44 1152 40C1248 36 1344 42 1392 45L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
                        fill="var(--c-bg)"
                    />
                </svg>
            </div>
        </section>
    );
}
