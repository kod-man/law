// app/blog/[id]/page.tsx
import EmploymentLawsuitNote from "@/components/blog/list/IsDava";
import RealEstateLawNote from "@/components/blog/list/Menkul";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrafficAccidentInfo from "../../../../components/blog/list/TrafficAccidentInfo";

export const revalidate = 60; // ISR (opsiyonel)

type Params = { params: { id: string } };

// SSG: /blog/1, /blog/2 ... yollarını üret
export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === Number(params.id));
  if (!post) return { title: "Blog - Lawyero" };

  return {
    title: `${post.title} - Lawyero`,
    description: post.excerpt,
  };
}

export default function Page({ params }: Params) {
  const post = blogPosts.find((p) => p.id === Number(params.id));
  if (!post) return notFound();
  const strList = post.linkHref.split("/");
  const blogId = strList[strList.length - 1];

  if (blogId === "1") {
    return <TrafficAccidentInfo />;
  }
  if (blogId === "2") {
    return <EmploymentLawsuitNote />;
  }
  if (blogId === "3") {
    return <RealEstateLawNote />;
  }
}
