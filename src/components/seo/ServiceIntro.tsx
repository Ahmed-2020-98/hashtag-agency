"use client";

import { motion } from "framer-motion";
import styles from "./ServiceIntro.module.css";

export default function ServiceIntro() {
    return (
        <section className={`section ${styles.intro}`}>
            <div className="container">
                <motion.div
                    className={styles.grid}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.content}>
                        <h2 className="section-title">
                            ما هوSEO ولماذا تحتاجه؟
                        </h2>
                        <p className={styles.text}>
                            تحسين محركات البحث (SEO) هو عملية تحسين موقعك الالكتروني
                            ليظهر في النتائج الأولى على Google وغيرها من محركات البحث.
                        </p>
                        <p className={styles.text}>
                            <span className="highlight">في السعودية</span>، يبحث الملايين يومياً عن خدمات ومنتجات.
                            إذا لم يظهر موقعك في الصفحة الأولى، فأنت تخسر عملاء محتملين لصالح المنافسين.
                        </p>
                        <ul className={styles.list}>
                            <li>✓زيادة الزيارات المستهدفة</li>
                            <li>✓ تحسين الوعي بالعلامة التجارية</li>
                            <li>✓ زيادة المبيعات والتحويلات</li>
                            <li>✓ نتائج مستدامة على المدى الطويل</li>
                        </ul>
                    </div>
                    <div className={styles.image}>
                        <div className={styles.illustration}>
                            <div className={styles.searchBox}>
                                <span className={styles.searchIcon}>🔍</span>
                                <span className={styles.searchText}>خدمات SEO</span>
                            </div>
                            <div className={styles.results}>
                                <div className={styles.resultItem}>
                                    <span className={styles.rank}>1</span>
                                    <span className={styles.resultTitle}>موقعك هنا ↑</span>
                                </div>
                                <div className={styles.resultItem}>
                                    <span className={styles.rank}>2</span>
                                    <span className={styles.resultTitle}>نتيجته بحث</span>
                                </div>
                                <div className={styles.resultItem}>
                                    <span className={styles.rank}>3</span>
                                    <span className={styles.resultTitle}>نتيجة بحث</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}