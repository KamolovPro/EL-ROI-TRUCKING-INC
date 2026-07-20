import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

const Contacts = () => {
  const { toast } = useToast();
  const { contact } = siteConfig;
  const [contactType, setContactType] = useState("driver");
  const [smsConsent, setSmsConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

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
              Contact us
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-primary-foreground mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">
              {siteConfig.company.name} — {siteConfig.company.tagline}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeInUp} className="text-foreground mb-4 text-2xl md:text-3xl lg:text-4xl">
                Come say hello
              </motion.h2>

              <motion.div variants={stagger} className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                {/* Address */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border/50"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-foreground mb-1 text-base md:text-lg">Address:</h3>
                    <p className="text-muted-foreground text-sm md:text-base break-words">
                      {contact.address.street},<br />
                      {contact.address.city}, {contact.address.state} {contact.address.zip}
                    </p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:underline mt-2 font-medium text-sm md:text-base"
                    >
                      Direction
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border/50"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-foreground mb-1 text-base md:text-lg">Call Us:</h3>
                    <a 
                      href={`tel:${contact.phoneRaw}`}
                      className="text-lg md:text-xl font-bold text-accent hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border/50"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-foreground mb-1 text-base md:text-lg">Email:</h3>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-accent hover:underline font-medium break-all text-sm md:text-base"
                    >
                      {contact.email}
                    </a>
                  </div>
                </motion.div>

                {/* Google Map */}
                <motion.div 
                  variants={fadeInUp}
                  className="rounded-2xl overflow-hidden border border-border/50 h-[200px] md:h-[300px]"
                >
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                      `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`
                    )}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card-lg border border-border/50">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                  Fill out the form and one of our experts will contact you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Contact Type */}
                  <div className="mb-4">
                    <RadioGroup 
                      value={contactType} 
                      onValueChange={setContactType}
                      className="flex flex-wrap gap-3 md:gap-4"
                    >
                      {["Driver", "Partner", "Customer"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.toLowerCase()} id={`contact-${type.toLowerCase()}`} />
                          <Label htmlFor={`contact-${type.toLowerCase()}`} className="cursor-pointer text-sm md:text-base">{type}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm md:text-base">First Name</Label>
                      <Input id="firstName" placeholder="First Name" className="h-11 md:h-12 rounded-xl text-base" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm md:text-base">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" className="h-11 md:h-12 rounded-xl text-base" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="Phone Number" className="h-11 md:h-12 rounded-xl text-base" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm md:text-base">Your message (optional)</Label>
                    <Textarea id="message" placeholder="Your message" rows={3} className="rounded-xl resize-none text-base" />
                  </div>

                  {/* SMS Consent */}
                  <SmsConsentCheckbox 
                    checked={smsConsent}
                    onCheckedChange={setSmsConsent}
                  />

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 md:h-14 text-base md:text-lg font-semibold"
                  >
                    Get a quote
                    <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
