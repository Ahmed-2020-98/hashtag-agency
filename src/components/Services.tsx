"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";

const services = [
    {
        icon: "🌐",
        title: "تصميم مواقع إلكترونية",
        desc: "نصمم مواقع عصرية ومتجاوبة تعكس هوية شركتك وتجذب العملاء بتجربة مستخدم مميزة.",
    },
    {
        icon: "🛒",
        title: "تطوير متاجر إلكترونية",
        desc: "متاجر إلكترونية متكاملة مع بوابات الدفع وإدارة المنتجات لزيادة مبيعاتك.",
    },
    {
        icon: "📈",
        title: "تحسين محركات البحث SEO",
        desc: "نرفع ترتيب موقعك في نتائج البحث لجذب المزيد من الزوار والعملاء المحتملين.",
    },
    {
        icon: "🎨",
        title: "تصميم الهوية البصرية",
        desc: "نبني هوية بصرية متكاملة لعلامتك التجارية من الشعار إلى جميع المواد التسويقية.",
    },
    {
        icon: "📝",
        title: "إدارة المحتوى",
        desc: "نكتب ونُدير محتوى موقعك ووسائل التواصل الاجتماعي باحترافية لزيادة التفاعل.",
    },
    {
        icon: "☁️",
        title: "استضافة وصيانة",
        desc: "استضافة سريعة وآمنة مع صيانة دورية وتحديثات مستمرة لضمان أداء موقعك.",
    },
];

export default function Services() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">خدماتنا</h2>
                    <p className="section-subtitle">
                        نقدم حلولًا رقمية متكاملة تساعد شركتك على{" "}
                        <span className="highlight">التميّز والنمو</span> في السوق السعودي
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <span className={styles.icon}>{s.icon}</span>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                            <div className={styles.underline} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        اطلب خدمتك الآن
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
