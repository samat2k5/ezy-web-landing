import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  useSEO({
    title: 'Privacy Policy',
    description: 'ezyHR Privacy Policy & Data Protection compliance framework. Learn how we protect your personal and employee data.',
    canonicalPath: '/privacy-policy',
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
          <Shield className="w-4 h-4 text-emerald-600" />
          Privacy & Data Protection
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-500">
          Last Updated: 15 August 2026
        </p>
      </div>

      <div className="prose prose-slate prose-emerald max-w-none">
        <p>
          At <strong>ezyHR</strong>, operated by <strong>REALTEK ENGINEERING PTE. LTD.</strong> (UEN: 201723665M) ("we", "our", or "us"), we take data privacy seriously. This Privacy Policy outlines our compliance with the Personal Data Protection Act (PDPA) of Singapore and details how we handle information across our public marketing channels and our private HRMS platform.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Scope of This Policy & PDPA Role</h2>
        <p>
          This policy applies to:
        </p>
        <ul>
          <li><strong>ezy.sg (Prospects):</strong> Individuals who visit our public website, request a demo, or start a free trial.</li>
          <li><strong>hr.ezy.sg (Customers):</strong> Authorized administrators and employees using the ezyHR Software-as-a-Service (SaaS) platform.</li>
        </ul>
        <p>
          Where REALTEK ENGINEERING PTE. LTD. processes personal data solely on behalf of and for the purposes of a Customer in providing ezyHR, REALTEK may act as a Data Intermediary under the PDPA in respect of that processing. The Customer remains responsible for its own obligations as an Organisation under the PDPA.
        </p>
        <p>
          REALTEK may itself act as an Organisation for processing such as account administration, billing, security, service communications, business records, and website enquiries.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Data Collected from Prospects (ezy.sg)</h2>
        <p>
          When you request a demo, start a trial, or contact us via <strong>ezy.sg</strong>, we collect business contact information (Name, Work Email, Company Name, Phone/WhatsApp Number). 
        </p>
        <p>
          <strong>Purpose:</strong> We use this information to respond to your enquiry, arrange requested demonstrations or trials, provide related service communications, prevent abuse, and maintain the security of our services. We will use contact information for marketing communications only where permitted by applicable law and, where required, with the appropriate consent. We do not sell your contact information to third parties.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Data Processed within the Platform (hr.ezy.sg)</h2>
        <p>
          Depending on the Customer's configuration and the modules used, personal data processed through ezyHR may include:
        </p>
        <ul>
          <li>Identification and contact details</li>
          <li>NRIC / FIN / Passport where required</li>
          <li>Employment information</li>
          <li>Salary/payroll information</li>
          <li>CPF/statutory information</li>
          <li>Attendance</li>
          <li>Leave</li>
          <li>Bank/payment-related information</li>
          <li>Documents</li>
          <li>HR records</li>
          <li>Other information entered by Customer</li>
        </ul>
        <p>
          <strong>Geofencing / Location Data:</strong> If enabled by the Customer, device location coordinates may be processed at the time an employee clocks in or clocks out for work-location / geofence verification. We do not continuously track employee location, and this data is not used for unrelated marketing. The Customer is responsible for configuring the work-location policy and informing employees as required.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Cookies and Analytics</h2>
        <p>
          ezy.sg may use strictly necessary browser technologies for site operation and security. If we introduce analytics, cookies or similar measurement technologies, we will update this Policy and provide any notices or choices required by applicable law.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Service Providers and Data Intermediaries</h2>
        <p>
          We may engage service providers or data intermediaries to support hosting, infrastructure, communications, security, support, analytics or future payment processing. We require such providers to handle personal data for appropriate purposes and subject to applicable contractual and legal safeguards.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Overseas Data Processing</h2>
        <p>
          Where personal data is transferred outside of Singapore, we ensure that the recipient organization is bound by legally enforceable obligations to provide a standard of protection comparable to the protection under the Singapore PDPA.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Data Security and Breach Notification</h2>
        <p>
          We implement commercially reasonable technical and organizational security measures to protect your personal data. 
        </p>
        <p>
          Where REALTEK acts as an Organisation, we assess suspected data breaches and make notifications to the PDPC and affected individuals where required under the PDPA. Where REALTEK acts as a Data Intermediary for a Customer, we will notify the relevant Customer without undue delay after we have credible grounds to believe a breach has occurred and will assist the Customer as appropriate.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Accuracy</h2>
        <p>
          We take reasonable steps to ensure personal data in our possession or control is accurate and complete where it is likely to be used to make a decision affecting an individual or disclosed to another organisation. Customers remain responsible for maintaining the accuracy of employee information they enter into ezyHR.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Data Retention</h2>
        <p>
          We retain personal data only for as long as it is necessary to fulfill the purposes for which it was collected, or as required by applicable business or legal purposes.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">10. Access, Correction, and Withdrawal of Consent</h2>
        <p>
          Requests relating to employee data processed on behalf of a Customer should ordinarily be directed to the Customer. REALTEK will not independently amend or delete Customer employee records except in accordance with the Customer's instructions, applicable contractual terms or legal requirements.
        </p>
        <p>
          Prospects may contact privacy@ezy.sg for access/correction/withdrawal requests where applicable.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">11. Policy Updates</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">12. Contact Our Data Protection Officer (DPO)</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our PDPA compliance, please contact our DPO at:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-4">
          <p className="mb-1"><strong>REALTEK ENGINEERING PTE. LTD.</strong></p>
          <p className="mb-1">Email: <a href="mailto:privacy@ezy.sg" className="text-emerald-600 font-medium hover:underline">privacy@ezy.sg</a></p>
        </div>
      </div>
    </div>
  );
};
