import SEOPageClient from "./SEOPageClient";

export const metadata = {
    title: "خدمات تحسين محركات البحث SEO |هشتاج",
    description:
        "خدمات SEO احترافية للشركات في السعودية. نقدم تحسين تقني، إنشاء محتوى، وباك لينك عالي الجودة لزيادة ظهور موقعك في نتائج البحث.",
    keywords: [
        "SEO",
        "تحسين محركات البحث",
        "تهيئة الموقع",
        "تصدر نتائج البحث",
        "SEO السعودية",
        "تحسين الموقع",
        "باك لينك",
        "محتوى SEO",
    ],
};

export default function SEOPage() {
    return <SEOPageClient />;
}