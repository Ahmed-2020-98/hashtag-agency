"use client";

import { motion } from "framer-motion";
import styles from "./SectionCTA.module.css";

interface SectionCTAProps {
    title: string;
    buttonText: string;
    href?: string;
    variant?: "gradient" | "light";
}

export default function SectionCTA({
    title,
    buttonText,
    href = "#contact",
    variant = "gradient",
}: SectionCTAProps) {
    return (
        <motion.section
            className={`${styles.cta} ${variant === "light" ? styles.light : styles.gradient}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container ${styles.inner}`}>
                <h3 className={styles.title}>{title}</h3>
                <a
                    href={href}
                    className={`btn ${variant === "light" ? "btn-primary" : "btn-outline"}`}
                >
                    {buttonText}
                </a>
            </div>
        </motion.section>
    );
}
