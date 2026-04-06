"use client";

import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const steps = [
    {
        num: "01",
        title: "التحليل والتخطيط",
        desc: "نفحص موقعك ونحلل المنافسين ونحدد الكلمات المفتاحية الأنسب",
    },
    {
        num: "02",
        title: "التحسين التقني",
        desc: "نصلح المشاكل التقنية ونحسن السرعة وتجربة المستخدم",
    },
    {
        num: "03",
        title: "إنشاء المحتوى",
        desc: "نكتب محتوى محسّن يستهدف كلماتك المفتاحية ويجذب الزوار",
    },
    {
        num: "04",
        title: "بناء الروابط",
        desc: "نبني روابط خارجية عالية الجودة لتعزيز سلطة موقعك",
    },
    {
        num: "05",
        title: "المتابعة والتطوير",
        desc: "نتابع النتائج ونقدم تقارير شهرية ونطور الأداء باستمرار",
    },
];

export default function HowItWorks() {
    return (
        <section className={`section ${styles.howItWorks}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">كيف نعمل؟</h2>
                    <p className="section-subtitle">
                        خطوات واضحة ومنظمة لتحقيق أفضل النتائج
                    </p>
                </motion.div>

                <div className={styles.timeline}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={styles.step}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className={styles.stepNum}>{step.num}</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}