import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="inline-block">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.09H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.91l3.66-2.8z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.09l3.66 2.84c.86-2.59 3.29-4.53 12-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-4 uppercase tracking-tight">
              What Our Clients Say
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-gray-light px-3 py-1.5 rounded-full border border-border">
                <GoogleIcon />
                <span className="font-bold text-charcoal ml-1">4.9 / 5.0</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm font-medium">on Google My Business</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-border rounded-full text-charcoal hover:bg-navy hover:text-white transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-border rounded-full text-charcoal hover:bg-navy hover:text-white transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-visible">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4 md:px-0">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
                    {/* Google Logo in background */}
                    <div className="absolute top-6 right-8 opacity-10 scale-150">
                      <GoogleIcon />
                    </div>

                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy to-navy-light text-white flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">
                        {t.initials}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} size={20} className="fill-gold text-gold" />
                        ))}
                      </div>
                      
                      <div className="relative">
                        <span className="absolute -top-4 -left-4 text-6xl text-gold/10 font-serif leading-none">"</span>
                        <p className="text-lg md:text-xl text-charcoal mb-6 leading-relaxed relative z-10 font-medium">
                          {t.text.replace("[PLACEHOLDER] ", "")}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-bold text-navy text-lg">{t.name}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Verified Client</span>
                            <span className="text-xs text-muted-foreground">• Local Guide</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
