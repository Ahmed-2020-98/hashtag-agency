"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Portfolio.module.css";
import { projects } from "@/data/projectsData";

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

                {/* Projects Grid */}
                <div className={styles.grid}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
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
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a href="/works" className="btn btn-outline">
                        شاهد المزيد من أعمالنا
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
