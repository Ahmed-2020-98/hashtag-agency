"use client";

import { motion } from "framer-motion";
import styles from "./ExpectedResults.module.css";

const results = [
    {
        icon: "📈",
        title: "زيادة الزيارات",
        desc: "زيادة تصل إلى+300% في الزيارات المستهدفة خلال 6 أشهر",
        stat: "+300%",
    },
    {
        icon: "🎯",
        title: "تصدر النتائج",
        desc: "ظهور في الصفحة الأولى على Google لكلماتك المفتاحية",
        stat: "الصفحة1",
    },
    {
        icon: "💼",
        title: "زيادة العملاء",
        desc: "تحويل أكثر للزوار إلى عملاء محتملين ومبيعات",
        stat: "+150%",
    },
    {
        icon: "🏆",
        title: "تعزيز السلطة",
        desc: "بناء سلطة موقعك في مجالك وصناعة ثقة مع Google",
        stat: "DA +20",
    },
];

export default function ExpectedResults() {
    return (
        <section className={`section ${styles.results}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">النتائج المتوقعة</h2>
                    <p className="section-subtitle">
                        ما يمكنك توقعه عند العمل معنا
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {results.map((result, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className={styles.icon}>{result.icon}</div>
                            <h3 className={styles.title}>{result.title}</h3>
                            <p className={styles.desc}>{result.desc}</p>
                            <div className={styles.stat}>{result.stat}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}