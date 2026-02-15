import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "مشروع غير موجود" };

    return {
        title: `${project.title} | هشتاج`,
        description: project.desc,
        openGraph: {
            title: `${project.title} | هشتاج`,
            description: project.desc,
            locale: "ar_SA",
            type: "website",
            ...(project.thumbnail && { images: [{ url: project.thumbnail }] }),
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return <ProjectDetailClient project={project} />;
}
