"use client";

import { motion } from "framer-motion";
import styles from "./Partners.module.css";

const partners = [
    "شركة الرياض التقنية",
    "مجموعة الخليج",
    "تقنيات المستقبل",
    "الدار الرقمية",
    "بنك الابتكار",
    "سعودي تك",
    "المملكة الذكية",
    "رؤية 2030",
    "تقنية بلس",
    "ديجيتال هب",
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
                        {[...partners, ...partners].map((name, i) => (
                            <div key={i} className={styles.logoCard}>
                                <div className={styles.logoInner}>
                                    <span className={styles.logoHash}>#</span>
                                    <span className={styles.logoName}>{name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
