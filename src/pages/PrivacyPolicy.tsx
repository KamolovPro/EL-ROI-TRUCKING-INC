import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";

const PrivacyPolicy = () => {
  const { company, contact } = siteConfig;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-primary-foreground/70">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            <div className="prose prose-lg max-w-none text-muted-foreground">

              <p className="mb-6">
                {company.name} ("we," "our," or "us") is committed to protecting your privacy. This 
                Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website, use our services, or communicate with us via SMS, email, 
                or other channels.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us and information collected 
                automatically when you use our services.
              </p>
              
              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                1.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
                <li><strong>Business Information:</strong> Company name, shipping details, freight specifications, and billing information</li>
                <li><strong>Employment Application Information:</strong> Resume, work history, CDL information, driving record, and references (for driver applicants)</li>
                <li><strong>Communication Preferences:</strong> Your preferences for receiving communications from us, including SMS consent</li>
                <li><strong>Account Information:</strong> Username, password, and account settings</li>
              </ul>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                1.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and referring URLs</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and similar technologies</li>
              </ul>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our freight transportation and logistics services</li>
                <li><strong>Communication:</strong> To communicate with you about shipments, quotes, appointments, and service updates via phone, email, or SMS</li>
                <li><strong>Quote Processing:</strong> To process and respond to your requests for freight quotes</li>
                <li><strong>Employment:</strong> To process driver applications and manage employment-related matters</li>
                <li><strong>Customer Support:</strong> To respond to your inquiries and provide customer service</li>
                <li><strong>Billing:</strong> To process payments and send billing communications</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                <li><strong>Security:</strong> To protect our services, users, and the public from fraud and abuse</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve our website and services</li>
              </ul>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> With third-party vendors who assist in our operations (payment processors, IT service providers, communication platforms)</li>
                <li><strong>Business Partners:</strong> With carriers, brokers, and logistics partners directly involved in your shipment</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              </ul>

              {/* SMS Privacy Section - RingCentral TCR Compliant */}
              <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  Important SMS Privacy Notice
                </h3>
                <p className="font-medium">
                  Mobile Opt in, SMS Consent,  and phone numbers collected for SMS communication purposes will not be shared with any third party and affiliates for marketing purposes.
                </p>
                <p className="mt-3 text-sm">
                  Phone numbers obtained through SMS opt-in are used solely for the purpose of providing 
                  you with service-related communications such as shipment updates, appointment reminders, 
                  and billing inquiries. We do not share, sell, rent, or trade your phone number or SMS 
                  consent with any third parties for their marketing purposes.
                </p>
              </div>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                4. SMS Communications
              </h2>
              <p>
                If you opt in to receive SMS communications from {company.name}, please be aware of 
                the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You may receive text messages related to shipment updates, appointment reminders, follow-up messages, and billing inquiries</li>
                <li>Message frequency varies based on your active services and shipments</li>
                <li>Standard message and data rates may apply based on your mobile carrier plan</li>
                <li>You can opt out at any time by replying STOP to any message</li>
                <li>For help, reply HELP or contact us at {contact.phone}</li>
              </ul>
              <p className="mt-4">
                For complete SMS terms, please refer to Section 7 of our{" "}
                <a href="/terms-and-conditions" className="text-primary hover:underline">
                  Terms and Conditions
                </a>.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information from unauthorized access, alteration, disclosure, or 
                destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
                <li>Physical security measures at our facilities</li>
              </ul>
              <p className="mt-3">
                While we strive to protect your information, no method of transmission over the 
                internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes 
                for which it was collected, including to satisfy legal, accounting, or reporting 
                requirements. The retention period may vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The nature of your relationship with us</li>
                <li>Legal obligations requiring data retention</li>
                <li>Legitimate business needs</li>
                <li>Resolution of disputes or enforcement of agreements</li>
              </ul>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                7. Your Rights and Choices
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal 
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal exceptions</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications and SMS messages</li>
                <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing 
                experience, analyze site traffic, and understand user behavior. Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              </ul>
              <p className="mt-3">
                You can control cookie settings through your browser preferences. Note that disabling 
                certain cookies may affect website functionality.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices or content of these external sites. We encourage you to review the 
                privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                10. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children. If we become aware that we have collected 
                information from a child, we will take steps to delete that information.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the new policy 
                on this page and updating the "Last updated" date. We encourage you to review this 
                Privacy Policy periodically.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                12. Contact Us
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our 
                privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p>
                  <strong>{company.name}</strong><br />
                  <strong>Email:</strong> {contact.email}<br />
                  <strong>Phone:</strong> {contact.phone}<br />
                  <strong>Address:</strong> {contact.address.street}, {contact.address.city}, {contact.address.state} {contact.address.zip}
                </p>
              </div>
              <p className="mt-4 text-sm">
                For SMS-related inquiries, you can also reply HELP to any SMS message or call us 
                directly at {contact.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
