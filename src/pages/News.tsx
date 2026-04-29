import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Calendar } from "lucide-react";

const blogPosts = [
  { title: "What to Do After a Car Accident in Florida", slug: "what-to-do-after-car-accident", date: "2026-02-15", excerpt: "[PLACEHOLDER] The steps you take immediately after a car accident can significantly impact your case." },
  { title: "Understanding Truck Accident Liability", slug: "understanding-truck-accident-liability", date: "2026-02-01", excerpt: "[PLACEHOLDER] Truck accident cases involve complex liability questions involving the driver, trucking company, and more." },
  { title: "How Long Do I Have to File a Personal Injury Claim?", slug: "statute-of-limitations-personal-injury", date: "2026-01-20", excerpt: "[PLACEHOLDER] Understanding statutes of limitations is critical for protecting your right to compensation." },
  { title: "The Importance of Medical Documentation", slug: "importance-medical-documentation", date: "2026-01-10", excerpt: "[PLACEHOLDER] Proper medical documentation is one of the most important factors in a successful injury claim." },
];

const News = () => {
  return (
    <>
      <Helmet>
        <title>Latest News & Legal Insights | Friedland Law</title>
        <meta name="description" content="Legal news and insights about personal injury law from Friedland Law." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Latest News</h1>
            <p className="text-primary-foreground/70">Legal insights and updates from our firm.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {blogPosts.map(post => (
                <article key={post.slug} className="border border-border rounded-xl overflow-hidden hover:border-gold transition-all group">
                  <div className="aspect-video bg-gray-light" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar size={14} /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </div>
                    <h2 className="text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    <span className="text-sm text-gold font-medium mt-3 inline-block">Read More →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default News;
