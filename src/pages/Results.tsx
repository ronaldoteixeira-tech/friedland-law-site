import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CaseResultCard from "@/components/CaseResultCard";
import { caseResults } from "@/data/caseResults";

const caseTypes = ["All", ...new Set(caseResults.map((r) => r.caseType))];

const Results = () => {
  const [filter, setFilter] = useState("All");
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const targetAmount = 100; // $100M+

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * targetAmount));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = filter === "All" ? caseResults : caseResults.filter((r) => r.caseType === filter);

  return (
    <>
      <Helmet>
        <title>Case Results | Friedland Law - Millions Recovered</title>
        <meta
          name="description"
          content="See how Friedland Law has recovered millions for injury victims. Real results, real cases."
        />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Millions Recovered for Injury Victims</h1>
            <div ref={counterRef} className="text-5xl font-bold text-gold mt-6">
              ${count} Million+ Recovered
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {caseTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${filter === type ? "bg-gold text-navy" : "bg-gray-light text-charcoal hover:bg-gold/20"}`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r, i) => (
                <div key={i} className="bg-navy rounded-xl p-1">
                  <CaseResultCard {...r} />
                </div>
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

export default Results;
