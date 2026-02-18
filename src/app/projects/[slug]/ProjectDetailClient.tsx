"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projectsData";
import styles from "./ProjectDetail.module.css";

interface Props {
    project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    {project.thumbnail && (
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    )}
                    <div className={styles.heroOverlay} />
                </div>

                <div className={`container ${styles.heroContent}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/#portfolio" className={styles.backLink}>
                            → العودة للأعمال
                        </Link>
                        <span className={styles.heroCategory}>{project.category}</span>
                        <h1 className={styles.heroTitle}>{project.title}</h1>
                        <p className={styles.heroDesc}>{project.desc}</p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* Description */}
                        <motion.div
                            className={styles.descriptionCol}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className={styles.sectionHeading}>نبذة عن المشروع</h2>
                            <p className={styles.descriptionText}>{project.fullDescription}</p>

                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`btn btn-primary ${styles.visitBtn}`}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                    زيارة الموقع
                                </a>
                            )}
                        </motion.div>

                        {/* Info Card */}
                        <motion.div
                            className={styles.infoCol}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>تفاصيل المشروع</h3>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>التصنيف</span>
                                    <span className={styles.infoValue}>{project.category}</span>
                                </div>
                                {project.year && (
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>سنة التنفيذ</span>
                                        <span className={styles.infoValue}>{project.year}</span>
                                    </div>
                                )}
                                {project.url && (
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>الرابط</span>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.infoLink}
                                        >
                                            زيارة ↗
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            {project.images.length > 0 && (
                <section className={styles.gallery}>
                    <div className="container">
                        <motion.h2
                            className={styles.sectionHeading}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            صور المشروع
                        </motion.h2>
                        <div className={styles.galleryGrid}>
                            {project.images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.galleryItem}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} - صورة ${i + 1}`}
                                        width={800}
                                        height={560}
                                        className={styles.galleryImage}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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
                        <h2 className={styles.ctaTitle}>عندك مشروع مشابه؟</h2>
                        <p className={styles.ctaDesc}>
                            تواصل معنا اليوم ودعنا نحوّل فكرتك إلى واقع رقمي مميز
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
