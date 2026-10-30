import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

const socialIcons = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export function Footer() {
  const { contact, licenses, social, company, workingHours } = siteConfig;

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-10 md:py-16 px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2">
                Let's move your next load
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg">
                One call — and your freight is in careful hands from pickup to delivery.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 md:px-8 w-full sm:w-auto"
              >
                <Link to="/get-a-quote" className="flex items-center justify-center gap-2">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold px-6 md:px-8 w-full sm:w-auto"
              >
                <a href={`tel:${contact.phoneRaw}`} className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-10 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center">
                <Truck className="h-5 w-5 md:h-7 md:w-7 text-accent-foreground" />
              </div>
              <div>
                <span className="font-display text-lg md:text-xl font-bold">{company.name}</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              {company.description}
            </p>
            <div className="flex gap-3">
              {Object.entries(social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Drive With Us", href: "/drive-with-us" },
                { name: "Get A Quote", href: "/get-a-quote" },
                { name: "Contacts", href: "/contacts" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{contact.phone}</p>
                    <p className="text-sm">{workingHours.dispatch}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-primary-foreground break-all">{contact.email}</p>
                    <p className="text-sm break-all">Dispatch: {contact.dispatchEmail}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {contact.address.city}, {contact.address.state}
                  </p>
                  <p className="text-sm">{contact.address.street}, {contact.address.zip}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours & Licenses */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Business Hours</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-primary-foreground/5">
                <p className="font-medium text-primary-foreground">{workingHours.weekdays}</p>
              </div>
              <div className="p-4 rounded-xl bg-primary-foreground/5">
                <p className="font-medium text-primary-foreground">{workingHours.weekend}</p>
              </div>
              <div className="p-4 rounded-xl bg-accent/20">
                <p className="font-semibold text-accent">{workingHours.dispatch}</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60 mb-2">Licensed & Insured</p>
              <p className="font-mono text-sm">
                USDOT: {licenses.usdot}<br />
                MC: {licenses.mc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 md:py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-primary-foreground/60">
          <p className="text-center md:text-left">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8">
            <Link to="/terms-and-conditions" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
