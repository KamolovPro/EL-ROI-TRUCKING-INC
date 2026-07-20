import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Truck, Package, Snowflake, Timer, Map, Phone, ChevronDown, Heart } from "lucide-react";
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
import heroImage from "@/assets/hero-truck.jpg";
import fleetImage from "@/assets/fleet.jpg";
import driverImage from "@/assets/driver-portrait.jpg";

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

const serviceIcons = [Package, Snowflake, Timer, Map];

const Index = () => {
  const { toast } = useToast();
  const [contactType, setContactType] = useState("driver");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [smsConsent, setSmsConsent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <Layout>
      {/* Hero Section — split layout on brand green */}
      <section className="relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h40v1H0zM39 0h1v40h-1z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative z-10 px-4 md:px-6 pt-28 md:pt-40 pb-14 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span variants={fadeInUp} className="badge-accent mb-5 md:mb-6 inline-block text-xs md:text-sm">
                Family owned &amp; operated
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-primary-foreground mb-4 md:mb-6 text-4xl md:text-5xl lg:text-6xl"
              >
                Every Load, <span className="text-accent">Seen Through</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-8 md:mb-10 leading-relaxed max-w-xl"
              >
                {siteConfig.company.description}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-7 md:px-9 h-12 md:h-14 shadow-lg shadow-accent/25 font-semibold w-full sm:w-auto"
                >
                  <Link to="/get-a-quote" className="flex items-center justify-center gap-2">
                    Ship with us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base md:text-lg px-7 md:px-9 h-12 md:h-14 font-semibold w-full sm:w-auto"
                >
                  <Link to="/drive-with-us" className="flex items-center justify-center gap-2">
                    Drive with us
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/60 text-sm"
              >
                <span>USDOT {siteConfig.licenses.usdot}</span>
                <span className="hidden sm:inline text-primary-foreground/30">•</span>
                <span>MC {siteConfig.licenses.mc}</span>
                <span className="hidden sm:inline text-primary-foreground/30">•</span>
                <span>{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-accent/40 translate-x-4 translate-y-4" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-card-lg">
                <img src={heroImage} alt="EL ROI truck on the road at sunset" className="w-full h-auto" />
              </div>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="absolute -bottom-6 left-8 flex items-center gap-3 bg-card rounded-full pl-3 pr-6 py-3 shadow-card-lg border border-border/50"
              >
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{siteConfig.workingHours.dispatch}</p>
                  <p className="font-display font-bold text-foreground">{siteConfig.contact.phone}</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section — horizontal cards */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-2xl mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className="badge-accent mb-3 md:mb-4 inline-block text-sm">
              What we haul
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-foreground mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
              Freight services with a personal touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg">
              We keep our service list focused on what we do best — and we do it with the care of a company whose name rides on every trailer.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index] || Package;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="premium-card p-5 md:p-7 flex items-start gap-4 md:gap-5 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-1.5 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Drivers Section — with driver photo */}
      <section className="py-12 md:py-20 lg:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-accent/40 -translate-x-4 translate-y-4" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-card-lg">
                <img src={driverImage} alt="Smiling EL ROI driver at the wheel" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-5 right-6 flex items-center gap-2 bg-card rounded-full px-5 py-2.5 shadow-card-lg border border-border/50">
                <Heart className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">Drivers come first</span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeInUp} className="badge-accent mb-3 md:mb-4 inline-block text-sm">
                Drive With Us
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-foreground mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
                Drive for a family, not a number
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                At EL ROI, dispatchers know your name, settlements are honest, and home time is respected. If you take pride in your work, you'll fit right in.
              </motion.p>
              <motion.ul variants={fadeInUp} className="space-y-3 mb-6 md:mb-8">
                {siteConfig.driverBenefits.slice(0, 4).map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-foreground text-sm md:text-base">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeInUp}>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-7 md:px-9 h-12 md:h-14 font-semibold w-full sm:w-auto"
                >
                  <Link to="/drive-with-us" className="flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeInUp} className="badge-accent mb-3 md:mb-4 inline-block text-sm">
                Our Fleet
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-foreground mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
                Equipment we'd trust with our own name
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Because it is our name. Every truck is late-model, GPS-tracked, and maintained on a strict schedule — so your freight rides safe and our drivers ride proud.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base md:text-lg px-7 md:px-9 h-12 md:h-14 font-semibold w-full sm:w-auto"
                >
                  <Link to="/contacts" className="flex items-center justify-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-card-lg">
                <img src={fleetImage} alt="EL ROI fleet of trucks" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Stats Section — dark green band */}
      <section className="py-12 md:py-20 lg:py-28 bg-primary">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className="badge-accent mb-3 md:mb-4 inline-block text-sm">
              About us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-primary-foreground mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              A small company with a big promise
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              EL ROI means "the God who sees me" — and it's how we run our business: nothing about your freight goes unnoticed. From the first phone call to the signed delivery receipt, someone is watching over your load.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-2xl md:rounded-[2rem] p-4 md:p-6 lg:p-8 bg-primary-foreground/5 border border-primary-foreground/10 text-center"
              >
                <p className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-accent">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 font-medium mt-1 md:mt-2 text-xs md:text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-foreground mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
              Questions, answered honestly
            </motion.h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-3 md:space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {siteConfig.faq.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-border rounded-2xl md:rounded-[1.5rem] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="font-display font-semibold text-foreground pr-4 text-sm md:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-muted-foreground text-sm md:text-base">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeInUp} className="text-foreground mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
                Questions? We're listening.
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="text-xl md:text-2xl font-display font-bold text-accent mb-6 md:mb-8">
                Reach Out
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg max-w-md">
                Call, email, or drop us a note here — whichever is easiest for you. A real person from our {siteConfig.contact.address.city} office will get back to you.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <form onSubmit={handleContactSubmit} className="bg-card rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-card-lg border border-border/50">
                {/* Contact Type */}
                <div className="mb-4 md:mb-6">
                  <RadioGroup
                    value={contactType}
                    onValueChange={setContactType}
                    className="flex flex-wrap gap-3 md:gap-4"
                  >
                    {["Driver", "Partner", "Customer"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.toLowerCase()} id={type.toLowerCase()} />
                        <Label htmlFor={type.toLowerCase()} className="cursor-pointer text-sm md:text-base">{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm md:text-base">First Name</Label>
                    <Input id="firstName" placeholder="First Name" className="h-11 md:h-12 rounded-xl text-base" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm md:text-base">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" className="h-11 md:h-12 rounded-xl text-base" required />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="Phone Number" className="h-11 md:h-12 rounded-xl text-base" required />
                </div>

                <div className="space-y-2 mb-4 md:mb-6">
                  <Label htmlFor="message" className="text-sm md:text-base">Your message (optional)</Label>
                  <Textarea id="message" placeholder="Your message" rows={3} className="rounded-xl resize-none text-base" />
                </div>

                {/* SMS Consent */}
                <SmsConsentCheckbox
                  checked={smsConsent}
                  onCheckedChange={setSmsConsent}
                  className="mb-4 md:mb-6"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 md:h-14 text-base md:text-lg font-semibold"
                >
                  Send message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
