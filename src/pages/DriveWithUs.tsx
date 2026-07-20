import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

const DriveWithUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [eligibility, setEligibility] = useState("");
  const [experience, setExperience] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [endorsements, setEndorsements] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Application Received!",
      description: "Our recruiting team will contact you within 24-48 hours.",
    });
  };

  const handleEndorsementChange = (endorsement: string, checked: boolean) => {
    if (checked) {
      setEndorsements([...endorsements, endorsement]);
    } else {
      setEndorsements(endorsements.filter(e => e !== endorsement));
    }
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
            <h1 className="text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">Thank You for Applying!</h1>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
              We've received your application. Our recruiting team will review your 
              information and contact you within 24-48 hours.
            </p>
            <div className="p-4 md:p-6 rounded-2xl bg-secondary mb-6 md:mb-8">
              <p className="text-foreground font-medium mb-2 text-sm md:text-base">
                Have questions?
              </p>
              <a 
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="text-xl md:text-2xl text-accent font-bold hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Link to="/">Return to Home</Link>
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
              Apply to drive
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-primary-foreground mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">
              Thank you for your interest in {siteConfig.company.name}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-primary-foreground/80">
              To apply for a driving position, please complete this form to have a recruiter contact you about our driver opportunities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-card-lg border border-border/50">
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6 md:mb-8">
                Drive For Us
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-3 md:mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm md:text-base">First Name *</Label>
                      <Input 
                        id="firstName" 
                        required 
                        placeholder="First Name"
                        className="h-11 md:h-12 rounded-xl text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm md:text-base">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        required 
                        placeholder="Last Name"
                        className="h-11 md:h-12 rounded-xl text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        required 
                        placeholder="Email"
                        className="h-11 md:h-12 rounded-xl text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm md:text-base">Phone *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        required 
                        placeholder="Phone Number"
                        className="h-11 md:h-12 rounded-xl text-base"
                      />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* General Information */}
                <div>
                  <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-4 md:mb-6">
                    General Information
                  </h3>
                  
                  <div className="space-y-5 md:space-y-6">
                    {/* US Employment Eligibility */}
                    <div className="space-y-3">
                      <Label className="text-foreground text-sm md:text-base">
                        Are you legally eligible for employment in the United States? *
                      </Label>
                      <RadioGroup value={eligibility} onValueChange={setEligibility} className="flex gap-4 md:gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="eligibility-yes" />
                          <Label htmlFor="eligibility-yes" className="cursor-pointer text-sm md:text-base">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="eligibility-no" />
                          <Label htmlFor="eligibility-no" className="cursor-pointer text-sm md:text-base">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Experience */}
                    <div className="space-y-3">
                      <Label className="text-foreground text-sm md:text-base">
                        Do you have any Experience on the relevant vehicle? *
                      </Label>
                      <RadioGroup value={experience} onValueChange={setExperience} className="flex flex-wrap gap-4 md:gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="experience-yes" />
                          <Label htmlFor="experience-yes" className="cursor-pointer text-sm md:text-base">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partner" id="experience-partner" />
                          <Label htmlFor="experience-partner" className="cursor-pointer text-sm md:text-base">Partner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="experience-no" />
                          <Label htmlFor="experience-no" className="cursor-pointer text-sm md:text-base">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* License Type */}
                    <div className="space-y-3">
                      <Label className="text-foreground text-sm md:text-base">Current license type *</Label>
                      <Select value={licenseType} onValueChange={setLicenseType}>
                        <SelectTrigger className="h-11 md:h-12 rounded-xl text-base">
                          <SelectValue placeholder="Select license type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="class-a">Class A CDL</SelectItem>
                          <SelectItem value="class-b">Class B CDL</SelectItem>
                          <SelectItem value="no-license">No license, but would like to obtain one</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Endorsements */}
                    <div className="space-y-3">
                      <Label className="text-foreground text-sm md:text-base">
                        Which endorsements do you currently possess?
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {["Doubles", "Triples", "HazMat", "None"].map((endorsement) => (
                          <div key={endorsement} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`endorsement-${endorsement}`}
                              checked={endorsements.includes(endorsement)}
                              onCheckedChange={(checked) => handleEndorsementChange(endorsement, checked as boolean)}
                            />
                            <Label 
                              htmlFor={`endorsement-${endorsement}`} 
                              className="cursor-pointer text-xs md:text-sm"
                            >
                              {endorsement}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* SMS Consent */}
                <SmsConsentCheckbox 
                  checked={smsConsent}
                  onCheckedChange={setSmsConsent}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 md:h-14 text-base md:text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DriveWithUs;
