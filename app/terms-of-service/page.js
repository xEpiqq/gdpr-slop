export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br/>
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using the Contacted AI service provided by Scavenger AI LLC ("Company," "we," "us," or "our"), 
            you ("User," "you," or "your") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to 
            these Terms, please do not use our service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 mb-6">
            Contacted AI is an AI-powered customer communication platform that automates responses, enhances customer 
            engagement, and provides intelligent customer support solutions. Our service includes but is not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>AI-powered customer response automation</li>
            <li>Multi-channel communication integration</li>
            <li>Analytics and reporting tools</li>
            <li>Customer support and consultation services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts and Registration</h2>
          <p className="text-gray-600 mb-4">To access certain features of our service, you must:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security and confidentiality of your account credentials</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use Policy</h2>
          <p className="text-gray-600 mb-4">You agree not to use our service to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Send spam, unsolicited communications, or violate anti-spam laws</li>
            <li>Engage in fraudulent, misleading, or deceptive practices</li>
            <li>Impersonate another person or entity</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Attempt to gain unauthorized access to the service</li>
            <li>Use the service for any unlawful or prohibited purpose</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Subscription Plans and Billing</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Subscription fees are charged in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>Prices may change with 30 days advance notice</li>
              <li>Failed payments may result in service suspension</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Trial</h3>
            <p className="text-gray-600 mb-4">
              We offer a 14-day free trial for new users. No credit card is required to start your trial. 
              At the end of your trial period, you must choose a paid plan to continue using the service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cancellation</h3>
            <p className="text-gray-600 mb-4">
              You may cancel your subscription at any time. Cancellation will be effective at the end of your 
              current billing cycle. You will retain access to the service until the end of your paid period.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property Rights</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Rights</h3>
            <p className="text-gray-600 mb-4">
              Contacted AI and all related trademarks, service marks, graphics, and logos are the property of 
              Scavenger AI LLC. You may not use our intellectual property without prior written consent.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Content</h3>
            <p className="text-gray-600 mb-4">
              You retain ownership of content you provide to our service. By using our service, you grant us a 
              limited license to use your content solely to provide and improve our services.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Privacy and Data Protection</h2>
          <p className="text-gray-600 mb-6">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
            information. By using our service, you consent to our data practices as described in our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Service Level Agreement (SLA)</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>We strive for 99.9% uptime for our service</li>
              <li>Scheduled maintenance will be announced in advance</li>
              <li>Emergency maintenance may occur without notice</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Email support available to all users</li>
              <li>Priority support for Professional and Enterprise plans</li>
              <li>Phone support for Enterprise customers</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCAVENGER AI LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, 
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
            WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Disclaimers</h2>
          <p className="text-gray-600 mb-6">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS 
            OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Indemnification</h2>
          <p className="text-gray-600 mb-6">
            You agree to indemnify and hold harmless Scavenger AI LLC from any claims, damages, or expenses 
            arising from your use of the service or violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Termination</h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your account and access to the service immediately, without prior notice, 
            for any breach of these Terms or for any other reason at our sole discretion.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of [State/Country], 
            without regard to conflict of law principles. Any disputes shall be resolved in the courts of [Jurisdiction].
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these Terms at any time. We will notify users of material changes 
            by email or through the service. Your continued use of the service after such modifications constitutes 
            acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              <strong>Scavenger AI LLC</strong><br/>
              Doing business as Contacted AI<br/>
              Email: legal@contactedai.com<br/>
              Phone: 1-800-CONTACT<br/>
              Address: [Company Address]
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Severability</h2>
          <p className="text-gray-600 mb-6">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
            limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain 
            in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Entire Agreement</h2>
          <p className="text-gray-600 mb-6">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
            Scavenger AI LLC regarding the use of the service.
          </p>
        </div>
      </div>
    </div>
  );
} 