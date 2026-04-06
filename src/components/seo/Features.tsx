"use client";

import { motion } from "framer-motion";
import styles from "./Features.module.css";

const features = [
    {
        icon: "📈",
        title: "نتائج مضمونة",
        desc: "نسعى لتحقيق نتائج ملموسة وقابلة للقياس في الترتيب والزيارات",
    },
    {
        icon: "🎯",
        title: "استهداف دقيق",
        desc: "نختار الكلمات المفتاحية الأنسب لمجالك وجمهورك المستهدف",
    },
    {
        icon: "📊",
        title: "تقارير شهرية",
        desc: "تقارير مفصلة عن الأداء والتقدم المحرز في الترتيب",
    },
    {
        icon: "🔧",
        title: "تحسين مستمر",
        desc: "متابعة وتحسين دائم للموقع لمواكبة تحديثات Google",
    },
    {
        icon: "💬",
        title: "دعم متواصل",
        desc: "فريق متاح للرد على استفساراتك وتقديم النصائح",
    },
    {
        icon: "🏆",
        title: "خبرة مثبتة",
        desc: "+50 مشروع SEO ناجح مع شركات سعودية",
    },
];

export default function Features() {
    return (
        <section className={`section ${styles.features}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">مميزات خدمتنا</h2>
                    <p className="section-subtitle">
                        ما يميزنا ويجعل خدماتنا الأفضل في السوق السعودي
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className={styles.icon}>{feature.icon}</span>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.desc}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}