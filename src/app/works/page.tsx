import { Metadata } from "next";
import WorksPageClient from "./WorksPageClient";

export const metadata: Metadata = {
    title: "أعمالنا | هشتاج",
    description:
        "تصفح معرض أعمال هشتاج من المواقع والمنصات والتطبيقات الإلكترونية التي صممناها لعملائنا. نجاحاتهم هي نجاحنا.",
    keywords: [
        "معرض الأعمال",
        "أعمال هشتاج",
        "مشاريع سابقة",
        "تصميم مواقع",
        "تطوير متاجر",
        "تطوير منصات",
        "تطوير تطبيقات",
    ],
    openGraph: {
        title: "أعمالنا | هشتاج",
        description: "تصفح معرض أعمال هشتاج من المواقع والمنصات التي صممناها لعملائنا",
        locale: "ar_SA",
        type: "website",
    },
};

export default function WorksPage() {
    return <WorksPageClient />;
}
