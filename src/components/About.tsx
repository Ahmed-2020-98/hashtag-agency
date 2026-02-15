"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const features = [
    { icon: "💡", title: "إبداع بلا حدود", desc: "نبتكر تصاميم فريدة تعكس هوية علامتك التجارية" },
    { icon: "⚡", title: "أداء فائق", desc: "مواقع سريعة ومحسّنة لمحركات البحث" },
    { icon: "🛡️", title: "حماية متقدمة", desc: "تأمين شامل وحماية بيانات عملائك" },
];

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className={`container ${styles.grid}`}>
                {/* Visual Side */}
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.hashContainer}>
                        <motion.span
                            className={styles.hashSymbol}
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            #
                        </motion.span>
                        <div className={styles.glowOrb} />
                        <div className={styles.glowOrb2} />
                        {/* Orbit dots */}
                        <motion.div
                            className={styles.orbitDot}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{ width: 240, height: 240 }}
                        >
                            <span className={styles.dot} />
                        </motion.div>
                        <motion.div
                            className={styles.orbitDot}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                            style={{ width: 320, height: 320 }}
                        >
                            <span className={`${styles.dot} ${styles.dotCyan}`} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    className={styles.text}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <span className={styles.label}>من نحن</span>
                    <h2 className={styles.title}>
                        شركة <span className="highlight">هشتاج</span> لتصميم المواقع
                        الإلكترونية
                    </h2>
                    <p className={styles.desc}>
                        نحن فريق من المصممين والمطورين المحترفين في السعودية، نساعد الشركات
                        على بناء{" "}
                        <span className="highlight">حضور رقمي قوي</span> من خلال
                        تصميم مواقع إلكترونية عصرية واحترافية تعكس هويتهم وتزيد مبيعاتهم.
                    </p>

                    <div className={styles.features}>
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                className={styles.feature}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.15 }}
                            >
                                <span className={styles.featureIcon}>{f.icon}</span>
                                <div>
                                    <h4 className={styles.featureTitle}>{f.title}</h4>
                                    <p className={styles.featureDesc}>{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <a href="#contact" className="btn btn-primary" style={{ marginTop: 32 }}>
                        تعرّف علينا أكثر
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
