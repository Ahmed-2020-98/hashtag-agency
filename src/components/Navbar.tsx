"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "من نحن", href: "#about" },
    { label: "الخدمات", href: "#services" },
    { label: "الأعمال", href: "#portfolio" },
    { label: "المدونة", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileOpen]);

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={`container ${styles.inner}`}>
                {/* Logo */}
                <a href="#hero" className={styles.logo}>
                    <span className={styles.logoHash}>#</span>
                    <span className={styles.logoText}>هشتاج</span>
                </a>

                {/* Desktop Links */}
                <ul className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className={styles.navLink}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a href="#contact" className={`btn btn-primary ${styles.navCta}`}>
                    ابدأ مشروعك
                </a>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="القائمة"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className={styles.mobileLinks}>
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <a
                                        href={link.href}
                                        className={styles.mobileLink}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            onClick={() => setMobileOpen(false)}
                            style={{ marginTop: 24, width: "100%" }}
                        >
                            ابدأ مشروعك
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
