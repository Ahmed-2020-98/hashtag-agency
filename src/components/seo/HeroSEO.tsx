"use client";

import { motion } from "framer-motion";
import styles from "./HeroSEO.module.css";

export default function HeroSEO() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgPattern}></div>
            
            <div className={`container ${styles.inner}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        🚀 خدمات SEO احترافية في السعودية
                    </motion.span>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        تصدر نتائج البحث
                        <br />
                        <span className={styles.highlight}>واجذب عملاء جدد</span>
                    </motion.h1>

                    <motion.p
                        className={styles.desc}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        نساعدك على الظهور في الصفحات الأولى من Google
                        <br />
                        وزيادة الزيارات المستهدفة لموقعك
                    </motion.p>

                    <motion.div
                        className={styles.stats}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div className={styles.stat}>
                            <span className={styles.statNum}>+300%</span>
                            <span className={styles.statLabel}>زيادة في الزيارات</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>+50</span>
                            <span className={styles.statLabel}>مشروع SEO ناجح</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>اول</span>
                            <span className={styles.statLabel}>صفحة نتائج البحث</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="btn-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            احصل على تحليل مجاني
                        </a>
                        <a href="/assets/portfolio/seo/seo_details.pdf" className="btn btn-outline" download>
                            تنزيل عرض فني
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}