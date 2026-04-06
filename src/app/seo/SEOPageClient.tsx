"use client";

import HeroSEO from "@/components/seo/HeroSEO";
import ServiceIntro from "@/components/seo/ServiceIntro";
import ServicesDetail from "@/components/seo/ServicesDetail";
import Features from "@/components/seo/Features";
import HowItWorks from "@/components/seo/HowItWorks";
import ExpectedResults from "@/components/seo/ExpectedResults";
import WhyUs from "@/components/seo/WhyUs";
import SEOPortfolio from "@/components/seo/SEOPortfolio";
import FinalCTA from "@/components/seo/FinalCTA";

export default function SEOPageClient() {
    return (
        <>
            <HeroSEO />
            <ServiceIntro />
            <ServicesDetail />
            <Features />
            <HowItWorks />
            <ExpectedResults />
            <WhyUs />
            <SEOPortfolio />
            <FinalCTA />
        </>
    );
}