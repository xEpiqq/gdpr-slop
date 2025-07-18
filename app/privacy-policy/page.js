export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br/>
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Scavenger AI LLC, doing business as Contacted AI ("we," "us," or "our"), is committed to protecting your privacy and personal data. 
            This Privacy Policy explains how we collect, use, and protect your information in compliance with the General Data Protection 
            Regulation (GDPR) and other applicable privacy laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company information and job title</li>
              <li>Communication preferences</li>
              <li>Messages and inquiries you send us</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Website usage analytics</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Legal Basis for Processing</h2>
          <p className="text-gray-600 mb-4">We process your personal data based on:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Consent:</strong> When you explicitly consent to marketing communications</li>
            <li><strong>Legitimate Interest:</strong> For business operations and service improvement</li>
            <li><strong>Contract Performance:</strong> To provide services you've requested</li>
            <li><strong>Legal Obligation:</strong> When required by law</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Process and verify toll-free phone number access</li>
            <li>Send service updates and important notifications</li>
            <li>Provide marketing communications (with your consent)</li>
            <li>Improve our services and website functionality</li>
            <li>Comply with legal requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your GDPR Rights</h2>
          <p className="text-gray-600 mb-4">Under GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Right of Access:</strong> Request copies of your personal data</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
            <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p className="text-gray-600 mb-6">
            We retain your personal data only as long as necessary for the purposes outlined in this policy. 
            Marketing consent data is retained until you withdraw consent. Contact information for active 
            customers is retained for the duration of our business relationship plus 7 years as required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security measures to protect your personal data 
            against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
            secure data transmission, and regular security assessments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Transfers</h2>
          <p className="text-gray-600 mb-6">
            Your personal data may be transferred to and processed in countries outside the European Economic Area. 
            We ensure adequate protection through appropriate safeguards such as Standard Contractual Clauses 
            approved by the European Commission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cookies and Tracking</h2>
          <p className="text-gray-600 mb-6">
            Our website uses essential cookies for functionality and analytics cookies to improve user experience. 
            You can manage cookie preferences in your browser settings. Marketing cookies are only used with your consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We may use third-party services for analytics, customer support, and marketing automation. 
            These providers are contractually bound to protect your data and use it only for specified purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              <strong>Data Controller:</strong><br/>
              Scavenger AI LLC<br/>
              Doing business as Contacted AI
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Privacy Officer:</strong><br/>
              Email: privacy@contactedai.com<br/>
              Phone: 1-800-CONTACT
            </p>
            <p className="text-gray-700">
              <strong>EU Representative:</strong><br/>
              [To be appointed if processing EU personal data]
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy periodically. We will notify you of material changes by email 
            or through a prominent notice on our website. Your continued use of our services after changes 
            take effect constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Complaints</h2>
          <p className="text-gray-600 mb-6">
            If you believe we have not complied with this Privacy Policy or data protection laws, you have the 
            right to file a complaint with your local data protection authority or with us directly at 
            privacy@contactedai.com.
          </p>
        </div>
      </div>
    </div>
  );
} 