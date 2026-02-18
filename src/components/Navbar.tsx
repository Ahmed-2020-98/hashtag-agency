"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import MegaMenu, { MegaMenuMobile } from "./MegaMenu";

const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/#about" },
    { label: "الخدمات", href: "/#services" },
    { label: "الأعمال", href: "/works", hasMega: true },
    { label: "المدونة", href: "/#blog" },
    { label: "تواصل معنا", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const [mobileSubOpen, setMobileSubOpen] = useState(false);
    const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navRef = useRef<HTMLElement>(null);

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

    // Close mega menu on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMegaOpen(false);
            }
        };
        if (megaOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [megaOpen]);

    const handleMegaEnter = useCallback(() => {
        if (megaTimeout.current) clearTimeout(megaTimeout.current);
        setMegaOpen(true);
    }, []);

    const handleMegaLeave = useCallback(() => {
        megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
    }, []);

    const closeMega = useCallback(() => setMegaOpen(false), []);
    const closeMobile = useCallback(() => {
        setMobileOpen(false);
        setMobileSubOpen(false);
    }, []);

    return (
        <motion.nav
            ref={navRef}
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
                        <li
                            key={link.href}
                            className={link.hasMega ? styles.megaTrigger : undefined}
                            onMouseEnter={link.hasMega ? handleMegaEnter : undefined}
                            onMouseLeave={link.hasMega ? handleMegaLeave : undefined}
                        >
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${link.hasMega && megaOpen ? styles.navLinkActive : ""}`}
                            >
                                {link.label}
                                {link.hasMega && (
                                    <span className={`${styles.chevron} ${megaOpen ? styles.chevronUp : ""}`}>
                                        ▾
                                    </span>
                                )}
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

            {/* Desktop Mega Menu */}
            <div
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
            >
                <AnimatePresence>
                    {megaOpen && <MegaMenu onClose={closeMega} />}
                </AnimatePresence>
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
                                    {link.hasMega ? (
                                        <>
                                            <button
                                                className={styles.mobileLink}
                                                onClick={() => setMobileSubOpen((v) => !v)}
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    width: "100%",
                                                    textAlign: "right",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                {link.label}
                                                <span
                                                    style={{
                                                        transition: "transform 0.25s",
                                                        transform: mobileSubOpen ? "rotate(180deg)" : "rotate(0)",
                                                        fontSize: "0.8rem",
                                                        color: "var(--c-secondary)",
                                                    }}
                                                >
                                                    ▾
                                                </span>
                                            </button>
                                            <AnimatePresence>
                                                {mobileSubOpen && <MegaMenuMobile onClose={closeMobile} />}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className={styles.mobileLink}
                                            onClick={closeMobile}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            onClick={closeMobile}
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
