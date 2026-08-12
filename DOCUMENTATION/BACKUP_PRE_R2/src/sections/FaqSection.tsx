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
    <section id="faq" className="py-20 md:py-28 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Everything you need to know about ezyHR.
          </h2>
          <p className="text-base text-slate-300">
            Have questions about Singapore statutory compliance, implementation, or security? We've got answers.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. CPF, IR8A, GIRO, mobile, security)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-bold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 text-sm">
              No matching questions found. Try searching another term or contact our support team.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-slate-900/90 rounded-2xl border border-slate-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-800/60"
                  >
                    <span className="text-sm sm:text-base font-bold text-white pr-2">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-800/60 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-3">
          <h3 className="text-base font-bold text-white">Still have questions about your HR setup?</h3>
          <p className="text-xs text-slate-400">Our Singapore HR tech specialists are happy to assist your team.</p>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl transition-all"
          >
            Speak to a Specialist <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
