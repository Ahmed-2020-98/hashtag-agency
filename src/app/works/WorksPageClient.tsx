"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./WorksPage.module.css";
import { projects } from "@/data/projectsData";

const categories = [
    { key: "all", label: "الكل" },
    { key: "تصميم مواقع", label: "تصميم مواقع" },
    { key: "تطوير متاجر", label: "تطوير متاجر" },
    { key: "تطوير منصات", label: "تطوير منصات" },
    { key: "تطوير تطبيقات", label: "تطوير تطبيقات" },
];

export default function WorksPageClient() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroPattern}>#</div>
                <div className="container">
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={styles.heroTitle}>أعمالنا</h1>
                        <p className={styles.heroDesc}>
                            نفتخر بمشاريعنا التي ساعدت عملاءنا على{" "}
                            <span className={styles.highlight}>تحقيق أهدافهم الرقمية</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section className={styles.projectsSection}>
                <div className="container">
                    {/* Filter Bar */}
                    <motion.div
                        className={styles.filterBar}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                className={`${styles.filterBtn} ${activeCategory === cat.key ? styles.filterBtnActive : ""}`}
                                onClick={() => setActiveCategory(cat.key)}
                            >
                                {cat.label}
                                {activeCategory === cat.key && (
                                    <motion.span
                                        className={styles.filterIndicator}
                                        layoutId="worksFilterIndicator"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className={styles.grid}>
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((p, i) => (
                                <motion.div
                                    key={p.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <Link href={`/projects/${p.slug}`} className={styles.cardLink}>
                                        <div className={styles.card}>
                                            {p.thumbnail ? (
                                                <div className={styles.cardImage}>
                                                    <Image
                                                        src={p.thumbnail}
                                                        alt={p.title}
                                                        fill
                                                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className={styles.cardBg}>
                                                    <div className={styles.cardPattern}>
                                                        <span>#</span>
                                                    </div>
                                                </div>
                                            )}
                                            <div className={styles.overlay} />
                                            <div className={styles.cardContent}>
                                                <span className={styles.category}>{p.category}</span>
                                                <h3 className={styles.cardTitle}>{p.title}</h3>
                                                <p className={styles.cardDesc}>{p.desc}</p>
                                                <span className={styles.viewProject}>عرض المشروع ←</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            className={styles.emptyState}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className={styles.emptyText}>لا توجد مشاريع في هذا القسم حاليًا</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <motion.div
                        className={styles.ctaBox}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className={styles.ctaTitle}>عندك مشروع جديد؟</h2>
                        <p className={styles.ctaDesc}>
                            دعنا نحوله إلى تجربة رقمية احترافية تساعدك على تحقيق أهدافك
                        </p>
                        <a href="/#contact" className="btn btn-primary">
                            تواصل معنا الآن
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
