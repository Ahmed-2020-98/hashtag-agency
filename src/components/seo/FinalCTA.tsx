"use client";

import { motion } from "framer-motion";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
    return (
        <section id="contact" className={`section ${styles.finalCTA}`}>
            <div className={styles.bgPattern}></div>
            
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        جاهز تتصدر نتائج البحث؟
                    </h2>
                    <p className={styles.desc}>
                        احصل على تحليل مجاني لموقعك واكتشف كيف يمكننا مساعدتك
                        <br />
                        في تحقيق نتائج أفضل على Google
                    </p>
                    
                    <motion.div
                        className={styles.features}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.feature}>
                            <span className={styles.check}>✓</span>
                            <span>تحليل مجاني</span>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.check}>✓</span>
                            <span>خطة مخصصة</span>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.check}>✓</span>
                            <span>استشارة مجانية</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="btn-group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <a href="https://wa.me/966500000000" className="btn btn-primary">
                            تواصل عبر واتساب
                        </a>
                        <a href="mailto:info@hashtag.com" className="btn btn-outline">
                            راسلنا بالإيميل
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}