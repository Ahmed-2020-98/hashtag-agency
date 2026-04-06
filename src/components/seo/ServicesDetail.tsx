"use client";

import { motion } from "framer-motion";
import styles from "./ServicesDetail.module.css";

const services = [
    {
        icon: "🔍",
        title: "البحث والتحليل",
        desc: "استهداف 10-15 كلمة مفتاحية، تحليل المنافسين، فحص تقني شامل، وتحديد مؤشرات الأداء",
        features: [
            "استهداف كلمات مفتاحية",
            "تحليل المنافسين",
            "فحص تقني شامل",
            "مؤشرات الأداء",
        ],
    },
    {
        icon: "📝",
        title: "تحسين الصفحات (On-page)",
        desc: "تحسين 5 صفحات، العناوين، Meta Description، الصور والـ Alt، الربط الداخلي",
        features: [
            "تحسين 5 صفحات",
            "عناوين محسنة",
            "Meta Description",
            "تحسين الصور",
        ],
    },
    {
        icon: "✍️",
        title: "إنشاء محتوى",
        desc: "16 مقال شهري،1000-1500 كلمة للمقال، استهداف كلمات مفتاحية بشكل احترافي",
        features: [
            "16 مقال شهري",
            "1000-1500 كلمة",
            "استهداف كلمات مفتاحية",
            "محتوى جذاب",
        ],
    },
    {
        icon: "🔄",
        title: "تحسين المحتوى القديم",
        desc: "تحسين 5 صفحات شهري، إعادة صياغة، تحسين SEO، روابط داخلية",
        features: [
            "5 صفحات شهري",
            "إعادة صياغة",
            "تحسين SEO",
            "روابط داخلية",
        ],
    },
    {
        icon: "🔗",
        title: "الباك لينك",
        desc: "10-15 باك لينك شهري، روابط آمنة وعالية الجودة من مواقع موثوقة",
        features: [
            "10-15 باك لينك شهري",
            "روابط آمنة",
            "مواقع موثوقة",
            "جودة عالية",
        ],
    },
    {
        icon: "⚙️",
        title: "التحسينات التقنية",
        desc: "حل مشاكل الأرشفة، تحسين السرعة، Sitemap، Robots.txt، متابعة Search Console",
        features: [
            "حل مشاكل الأرشفة",
            "تحسين السرعة",
            "Sitemap & Robots",
            "Search Console",
        ],
    },
];

export default function ServicesDetail() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">تفاصيل خدمات SEO</h2>
                    <p className="section-subtitle">
                        خدمات متكاملة تشمل كل ما تحتاجه للتصدر نتائج البحث
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <span className={styles.icon}>{service.icon}</span>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                            <ul className={styles.features}>
                                {service.features.map((feature, j) => (
                                    <li key={j}>
                                        <span className={styles.check}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
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
                        اطلب خدمة SEO الآن
                    </a>
                </motion.div>
            </div>
        </section>
    );
}