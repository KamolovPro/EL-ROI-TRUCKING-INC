import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, TrendingUp, CheckCircle, Truck, Package, Timer, Award, Phone, ChevronDown, MessageCircle } from "lucide-react";
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
import heroImage from "@/assets/hero-truck-new.jpg";
import fleetImage from "@/assets/fleet.jpg";

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

const serviceIcons = [Package, Truck, Timer, Award];

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-white mb-4 md:mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Driven to Deliver
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl text-accent font-display font-bold mb-3 md:mb-4"
            >
              {siteConfig.company.tagline}
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 leading-relaxed max-w-2xl"
            >
              {siteConfig.company.description}
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-6 md:px-8 h-12 md:h-14 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all font-semibold w-full sm:w-auto"
              >
                <Link to="/drive-with-us" className="flex items-center justify-center gap-2">
                  Drive with us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 h-12 md:h-14 font-semibold w-full sm:w-auto"
              >
                <Link to="/get-a-quote" className="flex items-center justify-center gap-2">
                  Ship with us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className="badge-accent mb-3 md:mb-4 inline-block text-sm">
              We offer
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-foreground mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
              Leader in cargo transportation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg">
              At {siteConfig.company.name}, we pride ourselves on providing top-tier logistics services tailored to meet the unique needs of each client. With a commitment to efficiency and excellence, we ensure your freight is handled with the utmost care and delivered on time, every time.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
                  className="premium-card p-5 md:p-8 accent-border group cursor-pointer"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* 24/7 Support Note */}
          <motion.div 
            className="mt-8 md:mt-12 p-4 md:p-6 bg-secondary rounded-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-muted-foreground text-sm md:text-base">
              Our dedicated dispatch team is available around the clock to assist with any inquiries or issues. We understand the importance of real-time support and are here to ensure your operations run smoothly, no matter the hour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Drivers CTA Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-primary">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className="badge-accent mb-3 md:mb-4 inline-block text-sm">
              Drive With Us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-primary-foreground mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
              Looking for a career with an industry leader?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-base md:text-lg mb-6 md:mb-8">
              Join our team of technology and transportation experts committed to the safety, growth and opportunity of every employee.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-6 md:px-8 h-12 md:h-14 font-semibold w-full sm:w-auto"
              >
                <Link to="/drive-with-us" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-card-lg">
                <img 
                  src={fleetImage} 
                  alt="Our fleet of modern trucks"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.span variants={fadeInUp} className="badge-accent mb-3 md:mb-4 inline-block text-sm">
                Our Fleet
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-foreground mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
                Discover {siteConfig.company.name}'s diverse fleet of modern trucks
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Our fleet is optimized for efficiency and reliability. All trucks are equipped with the latest technology for tracking and safety. Contact us for details.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 font-semibold w-full sm:w-auto"
                >
                  <Link to="/contacts" className="flex items-center justify-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Stats Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-secondary">
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
            <motion.h2 variants={fadeInUp} className="text-foreground mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              We go Global
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Our mission is: through collaboration, integrity, and continuous innovation, provide outstanding logistics services in a safe and efficient manner while being a leading workplace in our industry.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg leading-relaxed mt-3 md:mt-4">
              At {siteConfig.company.name}, we believe that success is built on strong relationship with brokers and our drivers. That is why we are committed to building lasting partnership with our clients, based on trust, communication, and transparency.
            </motion.p>
          </motion.div>

          {/* Stats */}
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
                className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-card-lg border border-border/50 text-center"
              >
                <p className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-accent">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium mt-1 md:mt-2 text-xs md:text-sm lg:text-base">{stat.label}</p>
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
              Frequently Asked Questions
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
                className="border border-border rounded-xl md:rounded-2xl overflow-hidden"
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
                Still have a question?
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="text-xl md:text-2xl font-display font-bold text-accent mb-6 md:mb-8">
                Get In Touch
              </motion.h3>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <form onSubmit={handleContactSubmit} className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card-lg border border-border/50">
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
                  Get a quote
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
