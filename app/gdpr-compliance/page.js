import Link from 'next/link';

export default function GDPRCompliance() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
        
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-800 font-semibold">
              Contacted AI is fully compliant with the General Data Protection Regulation (GDPR)
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our GDPR Commitment</h2>
          <p className="text-gray-600 mb-6">
            At Scavenger AI LLC (doing business as Contacted AI), we are committed to protecting your privacy and 
            ensuring full compliance with the European Union's General Data Protection Regulation (GDPR). We believe 
            in transparent data practices and giving you full control over your personal information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Ensure GDPR Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Protection by Design</h3>
              <p className="text-gray-600">
                GDPR principles are built into our platform from the ground up, ensuring privacy is at the core 
                of every feature we develop.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Explicit Consent</h3>
              <p className="text-gray-600">
                We obtain clear, informed consent before collecting any personal data, and you can withdraw 
                consent at any time.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Minimization</h3>
              <p className="text-gray-600">
                We only collect and process personal data that is necessary for our legitimate business purposes 
                and your service requirements.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Measures</h3>
              <p className="text-gray-600">
                We implement state-of-the-art technical and organizational measures to protect your personal data 
                from unauthorized access or breaches.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights Under GDPR</h2>
          <p className="text-gray-600 mb-6">
            As an individual, you have comprehensive rights regarding your personal data:
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Information</h3>
              <p className="text-gray-600">
                You have the right to know what personal data we collect, how we use it, and who we share it with.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Right of Access</h3>
              <p className="text-gray-600">
                You can request a copy of all personal data we hold about you, provided in a structured, 
                commonly used format.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Rectification</h3>
              <p className="text-gray-600">
                You can request that we correct any inaccurate or incomplete personal data about you.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Erasure ("Right to be Forgotten")</h3>
              <p className="text-gray-600">
                You can request that we delete your personal data under certain circumstances.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Restrict Processing</h3>
              <p className="text-gray-600">
                You can request that we limit how we process your personal data in specific situations.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Data Portability</h3>
              <p className="text-gray-600">
                You can request a copy of your personal data in a machine-readable format to transfer to another service.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Object</h3>
              <p className="text-gray-600">
                You can object to our processing of your personal data based on legitimate interests or for direct marketing.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Exercise Your Rights</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              To exercise any of your GDPR rights, please contact us using any of the following methods:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email:</strong> <Link href="mailto:privacy@contactedai.com" className="text-blue-600 hover:underline">privacy@contactedai.com</Link></li>
              <li><strong>Phone:</strong> 1-800-CONTACT</li>
              <li><strong>Online Form:</strong> <Link href="/contact-us" className="text-blue-600 hover:underline">Submit a privacy request</Link></li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              We will respond to your request within 30 days as required by GDPR.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Processing Activities</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Legal Basis</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Data Categories</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Retention Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-gray-700">Service Provision</td>
                  <td className="px-4 py-3 text-gray-600">Contract Performance</td>
                  <td className="px-4 py-3 text-gray-600">Contact details, Usage data</td>
                  <td className="px-4 py-3 text-gray-600">Duration of service + 7 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Marketing Communications</td>
                  <td className="px-4 py-3 text-gray-600">Consent</td>
                  <td className="px-4 py-3 text-gray-600">Contact details, Preferences</td>
                  <td className="px-4 py-3 text-gray-600">Until consent withdrawn</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Customer Support</td>
                  <td className="px-4 py-3 text-gray-600">Legitimate Interest</td>
                  <td className="px-4 py-3 text-gray-600">Contact details, Support requests</td>
                  <td className="px-4 py-3 text-gray-600">3 years after resolution</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Website Analytics</td>
                  <td className="px-4 py-3 text-gray-600">Legitimate Interest</td>
                  <td className="px-4 py-3 text-gray-600">Usage data, Technical data</td>
                  <td className="px-4 py-3 text-gray-600">26 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Data Transfers</h2>
          <p className="text-gray-600 mb-6">
            When we transfer personal data outside the European Economic Area (EEA), we ensure adequate protection through:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Adequacy decisions recognizing equivalent protection levels</li>
            <li>Binding Corporate Rules for intra-group transfers</li>
            <li>Certification schemes and approved codes of conduct</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Breach Procedures</h2>
          <p className="text-gray-600 mb-4">
            In the unlikely event of a data breach involving personal data, we will:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Notify the relevant supervisory authority within 72 hours if required</li>
            <li>Inform affected individuals without undue delay if there is a high risk to their rights</li>
            <li>Document the breach and our response measures</li>
            <li>Take immediate steps to contain and remedy the breach</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Regular Compliance Reviews</h2>
          <p className="text-gray-600 mb-6">
            We conduct regular reviews of our data protection practices to ensure ongoing compliance with GDPR requirements. 
            This includes staff training, privacy impact assessments for new processing activities, and third-party audits 
            of our security measures.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Our Data Protection Officer</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              For any questions about our GDPR compliance or data protection practices, contact our Data Protection Officer:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <Link href="mailto:dpo@contactedai.com" className="text-blue-600 hover:underline">dpo@contactedai.com</Link><br/>
              <strong>Phone:</strong> 1-800-CONTACT<br/>
              <strong>Address:</strong> [DPO Address]
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Filing a Complaint</h2>
          <p className="text-gray-600 mb-6">
            If you believe we have not handled your personal data in accordance with GDPR, you have the right to file a 
            complaint with your local data protection authority. However, we encourage you to contact us first so we can 
            address your concerns directly.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <svg className="w-6 h-6 text-yellow-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-yellow-700">
                  This page provides an overview of our GDPR compliance. For complete details about how we collect, 
                  use, and protect your personal data, please refer to our full{' '}
                  <Link href="/privacy-policy" className="underline hover:text-yellow-900">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 