"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./SEOPortfolio.module.css";

const seoProjects = [
    {
        image: "/assets/portfolio/seo/seo1.webp",
        title: "تصدر نتائج البحث",
        category: "SEO",
        desc: "تحسين محركات البحث لعميل في قطاع التجزئة",
    },
    {
        image: "/assets/portfolio/seo/seo2.webp",
        title: "زيادة الزيارات300%",
        category: "SEO",
        desc: "حملة SEO ناجحة لموقع تجاري",
    },
    {
        image: "/assets/portfolio/seo/seo3.webp",
        title: "تحسين تقني شامل",
        category: "SEO",
        desc: "إصلاح مشاكل الأرشفة وتحسين السرعة",
    },
    {
        image: "/assets/portfolio/seo/seo4.webp",
        title: "تصدر الصفحة الأولى",
        category: "SEO",
        desc: "نتائج مضمونة لكلمات مفتاحية تنافسية",
    },
    {
        image: "/assets/portfolio/seo/seo5.webp",
        title: "نمو العضوية",
        category: "SEO",
        desc: "بناء سلطة الموقع وزيادة الدومين أثورتي",
    },
];

export default function SEOPortfolio() {
    return (
        <section className={`section ${styles.portfolio}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">أعمالنا في SEO</h2>
                    <p className="section-subtitle">
                        نماذج من النتائج التي حققناها لعملائنا
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {seoProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                                    style={{ objectFit: "cover" }}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.desc}>{project.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}