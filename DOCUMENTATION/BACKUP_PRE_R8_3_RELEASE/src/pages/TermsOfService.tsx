import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ShieldAlert } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  useSEO({
    title: 'Terms of Service',
    description: 'Terms of Service and Master Subscription Agreement for the ezyHR platform.',
    canonicalPath: '/terms-of-service',
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
          <ShieldAlert className="w-4 h-4 text-emerald-600" />
          ezyHR Service Terms
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-500">
          Last Updated: 15 August 2026
        </p>
      </div>

      <div className="prose prose-slate prose-emerald max-w-none">
        <p>
          These Terms of Service ("Agreement" or "Terms") govern your access to and use of the <strong>ezyHR</strong> platform (the "Service"), provided by <strong>REALTEK ENGINEERING PTE. LTD.</strong> (UEN: 201723665M) ("Provider", "we", "us", or "our"). 
        </p>
        <p>
          By signing up for a free trial, executing an order form, or actively using the Service, you ("Customer", "you") agree to be bound by this Agreement.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Use of the Service & Licensing</h2>
        <p>
          <strong>1.1. Licence Grant.</strong> Subject to your compliance with this Agreement and payment of applicable fees, we grant you a non-exclusive, non-transferable, revocable right to access and use the Service solely for your internal business operations and in accordance with your subscription plan, applicable documentation and these Terms.
        </p>
        <p>
          <strong>1.2. Employee Licensing.</strong> An ezyHR licence represents the capacity for one active employee. Licences are not permanently assigned to a named employee. If an employee is terminated, their termination releases that capacity. Replacement within your existing capacity creates no billing event. Historical terminated records do not themselves consume active licence capacity. Temporary leave does not normally release a licence. Draft or Future Joiner records may exist without consuming licence capacity until their applicable activation or effective employment date. A requested licence reduction cannot fall below your current active employee count.
        </p>
        <p>
          <strong>1.3. Acceptable Use.</strong> You shall not: (a) sub-license, resell, or lease the Service; (b) attempt to reverse engineer or compromise the integrity of the Service; or (c) use the Service to store or transmit malicious code or illegal content.
        </p>
        <p>
          <strong>1.4. Authorized Users and Account Security.</strong> The Customer is responsible for its authorised users, account credentials, appropriate access permissions, and any activity occurring through its accounts, except where caused by a breach by the Provider. The Customer must provide prompt notice of any suspected account compromise.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Free Trial</h2>
        <p>
          We offer a 14-day free trial. The free trial is provided for evaluation purposes and may be subject to usage, feature or employee limits. No payment method is required to begin the trial, and the trial does not automatically convert into a paid subscription.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Customer Data & Responsibilities</h2>
        <p>
          <strong>3.1. Customer Data.</strong> REALTEK will process Customer Data in accordance with these Terms, the Privacy Policy and, where applicable, the Customer's documented instructions. The Customer is responsible for having the authority, notices, permissions or other lawful basis necessary to provide employee and personal data to ezyHR.
        </p>
        <p>
          <strong>3.2. Statutory and Payroll Assistance.</strong> ezyHR assists with CPF, SDL, SHG, payroll, and statutory processes. This does not constitute legal, tax, accounting, or government advice. The Customer remains entirely responsible for reviewing all inputs and outputs and for accurate statutory filing and payment.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Subscriptions, Renewals, and Billing</h2>
        <p>
          <strong>4.1. Subscription and Renewal.</strong> Paid subscription commencement establishes your billing anniversary. Unless cancelled, monthly subscriptions renew automatically monthly, and annual subscriptions renew automatically annually.
        </p>
        <p>
          <strong>4.2. Licence Increase.</strong> Licence capacity increases require explicit customer authorisation. Increases may occur mid-period. An applicable prorated charge is applied through your existing renewal date. The increased capacity becomes effective following successful applicable payment or confirmation. Your billing anniversary remains unchanged.
        </p>
        <p>
          <strong>4.3. Licence Reduction.</strong> You may request a licence reduction during an active subscription. The reduction takes effect at the next subscription renewal (the next monthly renewal for monthly subscriptions, or the next annual renewal for annual subscriptions). The quantity cannot be reduced below the active employee count. There is no automatic mid-period refund or credit. Your billing anniversary remains unchanged.
        </p>
        <p>
          <strong>4.4. Payment Failure.</strong> If a payment fails, we provide a 7-day recovery and grace period. We may suspend some or all access to the Service following the grace period, subject to these Terms.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Cancellation and Termination</h2>
        <p>
          <strong>5.1. Voluntary Cancellation.</strong> A voluntary cancellation may be requested before the next renewal date, which prevents the next renewal. Your paid entitlement ordinarily continues through the current paid period.
        </p>
        <p>
          <strong>5.2. Termination for Breach.</strong> In the event of a material breach, the non-breaching party may terminate this Agreement if the breach remains uncured after a reasonable cure period (where appropriate), which may result in an earlier termination of the Service.
        </p>
        <p>
          <strong>5.3. Post-Termination Data.</strong> Following termination or expiry, Customer Data may remain available for a limited transition period where technically and legally appropriate, after which it may be deleted or anonymised in accordance with the Privacy Policy, contractual commitments and applicable retention requirements.
        </p>
        <p>
          <strong>5.4. Suspension.</strong> We reserve the right to suspend access where reasonably necessary, including for a material security risk, unlawful use, a material breach of these Terms, or payment default after the grace period.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Security and Confidentiality</h2>
        <p>
          <strong>6.1. Security.</strong> We will implement and maintain appropriate technical and organisational measures designed to protect Customer Data against accidental or unlawful destruction, loss, alteration, and unauthorized disclosure.
        </p>
        <p>
          <strong>6.2. Confidentiality.</strong> Both parties agree to maintain the confidentiality of the other party's Confidential Information. Confidential Information does not include information that is publicly available without breach, already lawfully known, independently developed, or lawfully received from a third party. A party may disclose Confidential Information where legally required.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Service Availability and Third-Party Services</h2>
        <p>
          <strong>7.1. Service Availability.</strong> We use commercially reasonable efforts to maintain the availability and reliability of the Service. 
        </p>
        <p>
          <strong>7.2. Third-Party Services.</strong> The Service may depend on third-party infrastructure and integrations. Availability of such services may affect ezyHR, subject to any responsibilities we have under applicable law and these Terms.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Intellectual Property</h2>
        <p>
          All rights, title, and interest in and to the Service, including all software, code, algorithms, UI, documentation, and related intellectual property, remain exclusively with REALTEK ENGINEERING PTE. LTD.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Changes to Service and Plans</h2>
        <p>
          We reserve a reasonable right to evolve features, functionality, plans, and pricing. Material subscription or pricing changes will be communicated to you before taking effect where applicable.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data where legally permissible. Our total aggregate liability arising out of or related to this Agreement shall not exceed the total fees paid or payable by you for the Service in the twelve (12) months preceding the claim. Nothing in these Terms excludes or limits liability to the extent such liability cannot lawfully be excluded or limited.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">11. Force Majeure</h2>
        <p>
          Neither party will be liable for any failure or delay in performance under this Agreement (other than for delay in the payment of money due and payable) for causes beyond that party's reasonable control, including acts of God, natural disasters, war, terrorism, or widespread internet outages.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">12. Miscellaneous</h2>
        <p>
          <strong>12.1. Amendments to Terms.</strong> These Terms may be updated from time to time. Material changes will be communicated appropriately. Your continued use of the Service after the updated effective date is subject to applicable law.
        </p>
        <p>
          <strong>12.2. Assignment.</strong> Neither party may assign this Agreement without the prior written consent of the other party, except in connection with a merger, acquisition, or sale of all or substantially all of its assets.
        </p>
        <p>
          <strong>12.3. Severability and Waiver.</strong> If any provision of this Agreement is held invalid, the remainder of the Agreement shall continue in full force. Failure to enforce any provision is not a waiver.
        </p>
        <p>
          <strong>12.4. Entire Agreement and Order of Precedence.</strong> This Agreement comprises these Terms, any applicable Order Form or subscription order, the Payment, Cancellation & Refund Policy, and the Privacy Policy where relevant. In the event of a conflict, the Order Form takes precedence, followed by these Terms.
        </p>
        <p>
          <strong>12.5. Governing Law.</strong> This Agreement shall be governed by and construed in accordance with the laws of the Republic of Singapore. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of Singapore.
        </p>
        <p>
          <strong>12.6. Notices.</strong> Please send legal or operational notices to the appropriate verified contact:
          <br />Support: <a href="mailto:support@hr.ezy.sg" className="text-emerald-600 hover:underline">support@hr.ezy.sg</a>
          <br />Privacy: <a href="mailto:privacy@ezy.sg" className="text-emerald-600 hover:underline">privacy@ezy.sg</a>
        </p>
      </div>
    </div>
  );
};
