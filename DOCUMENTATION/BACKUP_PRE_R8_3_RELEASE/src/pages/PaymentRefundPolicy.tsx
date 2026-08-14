import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { CreditCard } from 'lucide-react';

export const PaymentRefundPolicy: React.FC = () => {
  useSEO({
    title: 'Payment, Cancellation & Refund Policy',
    description: 'Learn about ezyHR billing, licence upgrades, prorated charges, and our cancellation and refund policy.',
    canonicalPath: '/payment-refund-policy',
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
          <CreditCard className="w-4 h-4 text-emerald-600" />
          Commercial Policy
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Payment, Cancellation & Refund Policy
        </h1>
        <p className="text-slate-500">
          Last Updated: 15 August 2026
        </p>
      </div>

      <div className="prose prose-slate prose-emerald max-w-none">
        <p>
          This Payment, Cancellation & Refund Policy is part of our <a href="/terms-of-service" className="text-emerald-600 hover:underline">Terms of Service</a>. It outlines the billing rules, employee licence mechanics, and refund conditions for all ezyHR paid subscriptions.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Billing Anniversaries & Currency</h2>
        <p>
          <strong>1.1. Billing Cycle.</strong> The commencement of a paid subscription establishes your billing anniversary. Unless cancelled, monthly subscriptions renew automatically monthly from that anniversary, and annual subscriptions renew automatically annually from that anniversary.
        </p>
        <p>
          <strong>1.2. Currency & GST.</strong> All listed prices are in Singapore Dollars (SGD). Public pricing is GST inclusive where stated.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Employee Licensing & Capacity</h2>
        <p>
          An ezyHR licence represents capacity for one active employee. Termination of an employee does not automatically reduce your purchased licence quantity. The released capacity may be reassigned to another active employee during the current subscription period. Replacing an employee within your existing active capacity creates no additional billing event.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Licence Increases</h2>
        <p>
          If you wish to increase your active employee capacity, this requires explicit customer authorisation. Licence increases may occur mid-period. The applicable charge will be prorated through your existing renewal date. The expanded capacity becomes effective following successful applicable payment and confirmation. Your renewal anniversary remains unchanged.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Licence Reductions</h2>
        <p>
          You may request a licence reduction anytime. However, the reduction becomes effective at your next subscription renewal (i.e., next monthly renewal for monthly subscriptions, or next annual renewal for annual subscriptions). A scheduled licence reduction does not change your existing billing anniversary. You cannot reduce your licence count below your applicable active employee count. There is no automatic mid-period refund for a requested licence reduction.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Cancellations</h2>
        <p>
          You may request to cancel your subscription at any time before your next renewal. A cancellation ordinarily prevents the next renewal. Your paid entitlement ordinarily continues through the end of the current paid period.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Payment Failure & Grace Period</h2>
        <p>
          If your automatic payment fails, ezyHR provides an approved 7-day recovery/grace period before we may suspend some or all access to the Service, subject to the Terms of Service. A payment failure does not imply the immediate deletion of your HR and payroll data.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Refund Policy</h2>
        <p>
          Subscription fees are generally non-refundable once the applicable paid subscription period begins, subject to exceptions including:
        </p>
        <ul>
          <li>Duplicate charges;</li>
          <li>Confirmed ezyHR billing errors;</li>
          <li>Refunds required by applicable law;</li>
          <li>Exceptional circumstances approved by ezyHR;</li>
          <li>Expressly agreed account credits/refunds.</li>
        </ul>
        <p>
          Voluntary cancellation, unused subscription time, employee termination, unused licence capacity, or a requested licence reduction do not ordinarily create an automatic refund entitlement.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Payment Processing</h2>
        <p>
          Where electronic payment is offered, payment may be processed by a third-party payment service provider. REALTEK ENGINEERING PTE. LTD. does not intend to store complete payment-card numbers or card security codes within ezyHR.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Invoices and Tax Documents</h2>
        <p>
          Applicable invoices, receipts and tax documents will be issued in accordance with the billing arrangement and applicable Singapore requirements.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">10. Billing Disputes</h2>
        <p>
          If you believe a charge is incorrect, please contact us promptly with sufficient information to investigate the charge. Raising a billing dispute does not limit any rights you may have under applicable law.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12">
          <p className="mb-1 text-sm text-slate-700">For billing enquiries or disputes, please contact:</p>
          <p className="mb-0">
            <a href="mailto:support@hr.ezy.sg" className="text-emerald-600 font-medium hover:underline">support@hr.ezy.sg</a>
          </p>
        </div>
      </div>
    </div>
  );
};
