"use client";

import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";

const projects = [
    {
        title: "متجر إلكتروني لعلامة أزياء",
        category: "تطوير متاجر",
        desc: "متجر إلكتروني متكامل مع بوابات دفع سعودية وتجربة تسوق سلسة.",
    },
    {
        title: "موقع شركة عقارية",
        category: "تصميم مواقع",
        desc: "موقع عصري يعرض المشاريع العقارية مع خرائط تفاعلية وحجز مواعيد.",
    },
    {
        title: "منصة تعليمية",
        category: "تطوير منصات",
        desc: "منصة تعليم إلكتروني متكاملة مع نظام إدارة المحتوى والاشتراكات.",
    },
    {
        title: "تطبيق مطعم",
        category: "تطوير تطبيقات",
        desc: "تطبيق ويب لمطعم مع نظام طلبات وقائمة تفاعلية وتتبع الطلبات.",
    },
    {
        title: "بوابة خدمات حكومية",
        category: "تصميم مواقع",
        desc: "بوابة إلكترونية لتقديم الخدمات مع لوحة تحكم متقدمة.",
    },
    {
        title: "موقع مكتب محاماة",
        category: "تصميم مواقع",
        desc: "موقع احترافي لمكتب محاماة مع نظام استشارات ومواعيد.",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className={`section ${styles.portfolio}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title" style={{ color: "var(--c-white)" }}>
                        أعمالنا
                    </h2>
                    <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>
                        نفتخر بمشاريعنا التي ساعدت عملاءنا على{" "}
                        <span className="highlight">تحقيق أهدافهم الرقمية</span>
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className={styles.cardBg}>
                                <div className={styles.cardPattern}>
                                    <span>#</span>
                                </div>
                            </div>
                            <div className={styles.overlay} />
                            <div className={styles.cardContent}>
                                <span className={styles.category}>{p.category}</span>
                                <h3 className={styles.cardTitle}>{p.title}</h3>
                                <p className={styles.cardDesc}>{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a href="#contact" className="btn btn-outline">
                        شاهد المزيد من أعمالنا
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
