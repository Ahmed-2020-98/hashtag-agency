"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MegaMenu.module.css";

const columns = [
    {
        icon: "💻",
        title: "مواقع إلكترونية",
        links: [
            { label: "موقع تعريفي", href: "/works" },
            { label: "مواقع محاماة", href: "/works" },
            { label: "مواقع مقاولات", href: "/works" },
            { label: "مواقع شركات", href: "/works" },
            { label: "مواقع شخصية", href: "/works" },
        ],
    },
    {
        icon: "🎓",
        title: "منصات تعليمية",
        links: [
            { label: "أنظمة كورسات", href: "/works" },
            { label: "أنظمة اختبارات", href: "/works" },
            { label: "بوابات طلاب", href: "/works" },
        ],
    },
    {
        icon: "📱",
        title: "تطبيقات موبايل",
        links: [
            { label: "تطبيقات iOS", href: "/works" },
            { label: "تطبيقات Android", href: "/works" },
            { label: "تطبيقات Hybrid", href: "/works" },
        ],
    },
    {
        icon: "🚀",
        title: "خدمات رقمية",
        links: [
            { label: "تحسين محركات البحث SEO", href: "/seo" },
            { label: "تصميم الهوية البصرية", href: "/works" },
            { label: "تطوير متاجر إلكترونية", href: "/works" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" as const, staggerChildren: 0.06 },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.2, ease: "easeIn" as const },
    },
};

const colVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

interface MegaMenuProps {
    onClose: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
    return (
        <motion.div
            className={styles.megaMenu}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Background Hash Pattern */}
            <span className={styles.bgHash}>#</span>

            <div className={`container ${styles.inner}`}>
                <div className={styles.grid}>
                    {columns.map((col, i) => (
                        <motion.div key={i} className={styles.column} variants={colVariants}>
                            <h4 className={styles.colTitle}>
                                <span className={styles.colIcon}>{col.icon}</span>
                                {col.title}
                            </h4>
                            <ul className={styles.linkList}>
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <a href={link.href} className={styles.link} onClick={onClose}>
                                            <span className={styles.linkArrow}>‹</span>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* CTA Box */}
                    <motion.div className={styles.ctaBox} variants={colVariants}>
                        <div className={styles.ctaGlow} />
                        <span className={styles.ctaEmoji}>🚀</span>
                        <h4 className={styles.ctaTitle}>هل لديك مشروع جديد؟</h4>
                        <p className={styles.ctaDesc}>
                            دعنا نحوله إلى تجربة رقمية احترافية.
                        </p>
                        <a href="#contact" className={styles.ctaBtn} onClick={onClose}>
                            اطلب عرض سعر الآن
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Accent Border */}
            <div className={styles.bottomBorder} />
        </motion.div>
    );
}

/* ── Mobile Accordion Version ── */
export function MegaMenuMobile({ onClose }: MegaMenuProps) {
    return (
        <motion.div
            className={styles.mobileAccordion}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {columns.map((col, i) => (
                <MobileAccordionItem key={i} col={col} onClose={onClose} />
            ))}

            {/* Mobile CTA */}
            <div className={styles.mobileCta}>
                <p className={styles.mobileCtaText}>🚀 هل لديك مشروع جديد؟</p>
                <a href="#contact" className={styles.mobileCtaBtn} onClick={onClose}>
                    اطلب عرض سعر الآن
                </a>
            </div>
        </motion.div>
    );
}

function MobileAccordionItem({
    col,
    onClose,
}: {
    col: (typeof columns)[number];
    onClose: () => void;
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.accordionItem}>
            <button
                className={`${styles.accordionTrigger} ${open ? styles.accordionOpen : ""}`}
                onClick={() => setOpen(!open)}
            >
                <span>
                    {col.icon} {col.title}
                </span>
                <span className={styles.accordionChevron}>{open ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.ul
                        className={styles.accordionLinks}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {col.links.map((link, j) => (
                            <li key={j}>
                                <a href={link.href} className={styles.accordionLink} onClick={onClose}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
