"use client";

import { motion } from "framer-motion";
import styles from "./WhyUs.module.css";

const reasons = [
    {
        icon: "🏆",
        title: "+50 مشروع ناجح",
        desc: "سجل حافل بنتائج ملموسة مع شركات سعودية",
    },
    {
        icon: "📈",
        title: "نتائج قابلة للقياس",
        desc: "تقارير شهرية تفصيلية تتتبع التقدم",
    },
    {
        icon: "🎯",
        title: "استراتيجية مخصصة",
        desc: "خطة SEO مصممة خصيصاً لمجالك",
    },
    {
        icon: "⚡",
        title: "تنفيذ سريع",
        desc: "نبدأ العمل فوراً برؤية واضحة",
    },
    {
        icon: "💬",
        title: "تواصل مستمر",
        desc: "دعم مباشر ورد على استفساراتك",
    },
    {
        icon: "🔒",
        title: "ضمان الجودة",
        desc: "نلتزم بأعلى معايير العمل الاحترافي",
    },
];

export default function WhyUs() {
    return (
        <section className={`section ${styles.whyUs}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">لماذا تختارنا؟</h2>
                    <p className="section-subtitle">
                        أسباب تجعلنا الخيار الأمثل لخدمات SEO
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className={styles.icon}>{reason.icon}</span>
                            <h3 className={styles.title}>{reason.title}</h3>
                            <p className={styles.desc}>{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}