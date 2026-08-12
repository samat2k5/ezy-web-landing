import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenDemo: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDemo }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-3');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Payroll', 'Employee', 'Attendance', 'Leave', 'Security', 'Company'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything you need to know about ezyHR.
          </h2>
          <p className="text-base text-slate-600">
            Have questions about Singapore statutory rules, onboarding, or cloud security? We've got answers.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-12">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. CPF, IR8A, GIRO, mobile, security)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 placeholder-slate-400 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3.5 rounded-xl text-xs font-semibold border transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found. Try searching another term or contact our support team.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/80"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-2">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Banner */}
        <div className="mt-14 p-7 bg-white rounded-3xl border border-slate-200 text-center space-y-3 shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">Still have questions about your HR setup?</h3>
          <p className="text-xs sm:text-sm text-slate-600">Our Singapore HR tech specialists are happy to assist your team.</p>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md mt-2"
          >
            Speak to a Specialist <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
