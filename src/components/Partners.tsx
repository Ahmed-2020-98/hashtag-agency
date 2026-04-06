"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Partners.module.css";

const partners = [
    "/assets/partners/partners1.webp",
    "/assets/partners/partners2.webp",
    "/assets/partners/partners3.webp",
    "/assets/partners/partners4.webp",
    "/assets/partners/partners5.webp",
    "/assets/partners/partners6.webp",
    "/assets/partners/partners7.webp",
    "/assets/partners/partners8.webp",
    "/assets/partners/partners9.webp",
    "/assets/partners/partners10.webp",
    "/assets/partners/partners11.webp",
    "/assets/partners/partners12.webp",
    "/assets/partners/partners13.webp",
    "/assets/partners/partners14.webp",
    "/assets/partners/partners15.webp",
    "/assets/partners/partners16.webp",
    "/assets/partners/partners17.webp",
    "/assets/partners/partners18.webp",
];

export default function Partners() {
    return (
        <section className={`section ${styles.partners}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">شركاؤنا في النجاح</h2>
                    <p className="section-subtitle">
                        نفتخر بثقة عملائنا وشراكتنا مع أبرز الشركات في المملكة
                    </p>
                </motion.div>
            </div>

            <div className={styles.sliderWrapper}>
                <div className={styles.slider}>
                    <div className={styles.track}>
                        {[...partners, ...partners].map((src, i) => (
                            <div key={i} className={styles.logoCard}>
                                <div className={styles.logoInner}>
                                    <Image
                                        src={src}
                                        alt={`شريك ${i + 1}`}
                                        width={160}
                                        height={60}
                                        className={styles.partnerImage}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
