import { useState } from "react";
import { CheckCircle, Send, Phone, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/siteConfig";
import { useToast } from "@/hooks/use-toast";
import { SmsConsentCheckbox } from "@/components/forms/SmsConsentCheckbox";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GetAQuote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20">
          <motion.div 
            className="max-w-lg mx-auto text-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-accent" />
            </div>
            <h1 className="text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">Thank You!</h1>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
              We've received your quote request. Our team will review your 
              information and get back to you within 24 hours.
            </p>
            <div className="p-4 md:p-6 rounded-2xl bg-secondary mb-6 md:mb-8">
              <p className="text-foreground font-medium mb-2 text-sm md:text-base">
                Need immediate assistance?
              </p>
              <a 
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="text-xl md:text-2xl text-accent font-bold hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <a href="/">Return to Home</a>
            </Button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className="badge-accent mb-4 md:mb-6 inline-block text-sm">
              Get Shipping Rate
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-primary-foreground mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">
              Are you seeking a reliable and cost-effective freight shipping solution?
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-primary-foreground/80">
              Look no further! Request a quote today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Form */}
            <motion.div 
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-card-lg border border-border/50">
                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 md:mb-4">
                  Logistics Shipment Rate Request
                </h2>
                <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                  We specialize in providing tailored shipping quotes for all types of FTL shipping modes, perfectly suited to your business needs. Our competitive rates and flexible services ensure an optimal shipping experience. Partner with {siteConfig.company.name} for efficient and professional freight transportation services.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground font-medium text-sm md:text-base">First Name *</Label>
                      <Input 
                        id="firstName" 
                        required 
                        placeholder="John" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground font-medium text-sm md:text-base">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        required 
                        placeholder="Doe" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium text-sm md:text-base">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="john@company.com" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium text-sm md:text-base">Phone *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        placeholder="(555) 123-4567" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium text-sm md:text-base">Company Name</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company Inc." 
                      className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                    />
                  </div>

                  <div className="h-px bg-border my-6 md:my-8" />

                  <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-3 md:mb-4">
                    Route Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="origin" className="text-foreground font-medium text-sm md:text-base">Origin (City, State) *</Label>
                      <Input 
                        id="origin" 
                        required 
                        placeholder="Chicago, IL" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination" className="text-foreground font-medium text-sm md:text-base">Destination (City, State) *</Label>
                      <Input 
                        id="destination" 
                        required 
                        placeholder="Los Angeles, CA" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-foreground font-medium text-sm md:text-base">Approximate Weight (lbs)</Label>
                      <Input 
                        id="weight" 
                        type="number" 
                        placeholder="40000" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground font-medium text-sm md:text-base">Preferred Ship Date</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        className="h-11 md:h-12 rounded-xl border-border/50 focus:border-accent text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details" className="text-foreground font-medium text-sm md:text-base">Additional Details</Label>
                    <Textarea 
                      id="details" 
                      placeholder="Please provide any additional information about your shipment (type of freight, special requirements, etc.)"
                      rows={3}
                      className="rounded-xl border-border/50 focus:border-accent resize-none text-base"
                    />
                  </div>

                  {/* SMS Consent */}
                  <SmsConsentCheckbox 
                    checked={smsConsent}
                    onCheckedChange={setSmsConsent}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground h-12 md:h-14 text-base md:text-lg font-semibold px-8 md:px-10"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Request a quote
                        <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-first lg:order-last"
            >
              <div className="lg:sticky lg:top-32 space-y-4 md:space-y-6">
                <motion.div variants={fadeInUp} className="bg-secondary rounded-2xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-4 md:mb-6">
                    Why Get a Quote?
                  </h3>
                  <ul className="space-y-3 md:space-y-4">
                    {[
                      { icon: CheckCircle, text: "Competitive pricing with no hidden fees" },
                      { icon: Clock, text: "Fast response within 24 hours" },
                      { icon: Shield, text: "No obligation to book" },
                      { icon: Phone, text: "Expert freight consultation" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
                        </div>
                        <span className="text-muted-foreground text-sm md:text-base">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-primary rounded-2xl p-5 md:p-6 text-primary-foreground">
                  <h3 className="text-base md:text-lg font-display font-bold mb-2">
                    Need a quote faster?
                  </h3>
                  <p className="text-primary-foreground/70 text-xs md:text-sm mb-3 md:mb-4">
                    Call our team directly for immediate assistance
                  </p>
                  <a 
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base md:text-lg font-bold truncate">{siteConfig.contact.phone}</p>
                      <p className="text-xs md:text-sm text-primary-foreground/60 truncate">{siteConfig.workingHours.dispatch}</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div variants={fadeInUp} className="p-5 md:p-6 rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">Licensed & Insured</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Full cargo protection</p>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-mono">
                    USDOT: {siteConfig.licenses.usdot}<br />
                    MC: {siteConfig.licenses.mc}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetAQuote;
