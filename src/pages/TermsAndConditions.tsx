import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";

const TermsAndConditions = () => {
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
            Terms and Conditions
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

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using the services provided by {company.name}, you agree to be bound 
                by these Terms and Conditions. If you do not agree with any part of these terms, 
                you may not use our services.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                2. Services
              </h2>
              <p>
                {company.name} provides freight transportation and logistics services. All services 
                are subject to availability and the terms outlined in individual service agreements 
                and quotes provided to customers.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                3. Rates and Payment
              </h2>
              <p>
                All rates are quoted based on information provided by the customer. Final rates may 
                vary based on actual shipment characteristics. Payment terms are net 30 days unless 
                otherwise agreed upon in writing.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                4. Liability
              </h2>
              <p>
                {company.name} maintains cargo insurance as required by federal regulations. 
                Our liability for lost or damaged goods is limited to the terms of our insurance 
                policy and applicable federal regulations.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                5. Prohibited Items
              </h2>
              <p>
                We reserve the right to refuse transportation of hazardous materials, illegal 
                substances, or any items prohibited by federal or state law. Customers are 
                responsible for accurate declaration of shipment contents.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                6. Claims
              </h2>
              <p>
                Claims for lost or damaged freight must be submitted in writing within 9 months 
                of the delivery date. All claims will be processed in accordance with federal 
                regulations and our insurance policy terms.
              </p>

              {/* SMS Terms & Conditions Section - RingCentral TCR Compliant */}
              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                7. SMS Communication Terms of Service
              </h2>
              
              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.1 SMS Consent Communication
              </h3>
              <p>
                The information (phone numbers) obtained as part of the SMS consent process will not 
                be shared with third parties for marketing purposes. Your phone number is collected 
                solely for the purpose of providing you with SMS communications related to our services.
              </p>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.2 Types of SMS Communications
              </h3>
              <p>
                If you have consented to receive text messages from {company.name}, you may receive 
                messages related to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Shipment status updates and delivery notifications</li>
                <li>Appointment and pickup reminders</li>
                <li>Follow-up messages regarding your freight</li>
                <li>Billing inquiries and payment confirmations</li>
                <li>Driver communication and coordination</li>
                <li>Service updates and important announcements</li>
              </ul>
              <p className="mt-4 p-4 bg-muted rounded-lg text-sm">
                <strong>Example message:</strong> "Hello, this is a reminder that your shipment with 
                {company.name} is scheduled for pickup on [Date] at [Time]. You can reply STOP to opt 
                out of SMS messaging from {company.name} at any time."
              </p>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.3 Message Frequency
              </h3>
              <p>
                Message frequency may vary depending on the type of communication and your active 
                shipments. For example, you may receive up to 10 SMS messages per week related to 
                your shipments, appointments, and billing inquiries. During active deliveries, 
                message frequency may increase to provide timely updates.
              </p>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.4 Opt-In Confirmation
              </h3>
              <p>
                When you opt into SMS messages, you will receive the following confirmation:
              </p>
              <p className="mt-3 p-4 bg-muted rounded-lg text-sm italic">
                "Thank you for opting into SMS messages from {company.name}. To opt out at any time, 
                reply STOP. For assistance, reply HELP. Message and data rates may apply. Messaging 
                frequency may vary."
              </p>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.5 Opt-Out Instructions
              </h3>
              <p>
                You may opt out of SMS communications at any time by replying STOP to any message. 
                Upon opting out, you will receive:
              </p>
              <p className="mt-3 p-4 bg-muted rounded-lg text-sm italic">
                "Thank you for opting out of SMS messages from {company.name}. You will not receive 
                any further SMS communications. To opt back in at any time, reply START."
              </p>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.6 Help and Support
              </h3>
              <p>
                For assistance with SMS communications, reply HELP to any message. You will receive:
              </p>
              <p className="mt-3 p-4 bg-muted rounded-lg text-sm italic">
                "Thank you for contacting {company.name}. For immediate assistance, please call {contact.phone} or 
                visit our website. Message and data rates may apply."
              </p>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.7 Message and Data Rates
              </h3>
              <p>
                Standard message and data rates may apply to SMS communications based on your mobile 
                carrier plan. {company.name} is not responsible for any charges incurred from your 
                mobile carrier for receiving SMS messages.
              </p>

              <h3 className="text-lg font-display font-medium text-foreground mt-6 mb-3">
                7.8 Standard Messaging Disclosures:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mt-3"> {/* Заменили p на ul */}
                <li>Message and data rates may apply.</li>
                <li>You can opt out at any time by texting "STOP."</li>
                <li>
                  For assistance, text "HELP" or visit our{" "}
                  <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>
                  {" "}page and{" "}
                  <Link to="/terms-and-conditions" className="text-accent hover:underline">Terms & Conditions</Link> pages.
                </li>
                <li>Message frequency may vary</li>
              </ul>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                8. Modifications
              </h2>
              <p>
                {company.name} reserves the right to modify these terms at any time. Continued 
                use of our services after any modifications constitutes acceptance of the updated terms.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                9. Contact Information
              </h2>
              <p>
                For questions regarding these Terms and Conditions, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> {contact.email}<br />
                <strong>Phone:</strong> {contact.phone}<br />
                <strong>Address:</strong> {contact.address.street}, {contact.address.city}, {contact.address.state} {contact.address.zip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
