import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { attorneys, seniorStaff } from "@/data/attorneys";
import { User } from "lucide-react";

// Utilizamos caminho relativo e adicionamos todas as variações para garantir a leitura pelo Vite
const images = import.meta.glob<{ default: string }>('../assets/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

const getImageForSlug = (slug: string) => {
  // Transforma tanto a busca quanto o nome do arquivo em minúsculas para evitar erros de case-sensitive
  const matchingKey = Object.keys(images).find(key => 
    key.toLowerCase().includes(`/${slug.toLowerCase()}.`)
  );
  return matchingKey ? images[matchingKey].default : null;
};

const AttorneyCard = ({ attorney }: { attorney: typeof attorneys[0] }) => {
  const imageUrl = getImageForSlug(attorney.slug);

  return (
    <Link to={`/attorneys/${attorney.slug}`} className="group border border-border rounded-xl overflow-hidden hover:border-gold transition-all bg-background flex flex-col h-full shadow-sm hover:shadow-md">
      <div className="aspect-[3/4] bg-gray-light flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={attorney.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <User className="text-muted-foreground/30" size={80} />
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow text-center">
        <h3 className="font-bold text-navy group-hover:text-gold transition-colors text-lg">{attorney.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{attorney.title}</p>
        <span className="text-sm text-gold font-medium mt-auto inline-block">View Profile →</span>
      </div>
    </Link>
  );
};

const Attorneys = () => {
  return (
    <>
      <Helmet>
        <title>Our Attorneys & Staff | Friedland Law</title>
        <meta name="description" content="Meet the attorneys and senior staff at Friedland Law. Direct attorney access on every case." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Our Lawyers</h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Our firm is dedicated to service first. We are committed to the concept of traditional lawyers sworn to preserving the rights of our clients.
            </p>
          </div>
        </section>

        {/* Lawyers Section */}
        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {attorneys.map(a => <AttorneyCard key={a.slug} attorney={a} />)}
            </div>
          </div>
        </section>

        {/* Senior Staff Section */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Our Senior Staff</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {seniorStaff.map(s => {
                const imageUrl = getImageForSlug(s.slug);
                return (
                  <div key={s.slug} className="border border-border rounded-xl overflow-hidden bg-gray-light text-center transition-all hover:shadow-md flex flex-col h-full">
                    <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                      {imageUrl ? (
                        <img src={imageUrl} alt={s.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        <User className="text-muted-foreground/30" size={60} />
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow justify-center bg-background">
                      <h3 className="font-bold text-navy text-[15px]">{s.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{s.staffTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default Attorneys;
