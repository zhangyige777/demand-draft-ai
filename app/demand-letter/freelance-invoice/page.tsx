'use client';

import React, { useState } from 'react';
// 引入了 Loader2, Copy, Lock 等新图标用于功能区
import { Shield, Zap, DollarSign, FileText, ArrowRight, CheckCircle2, Loader2, Copy, Lock } from 'lucide-react';

export default function FreelanceLandingPage() {
  const [formData, setFormData] = useState({
    clientName: '',
    amount: '',
    service: ''
  });

  // 新增状态：控制生成过程
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 核心逻辑函数
  const generateLetter = () => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return `DEMAND FOR PAYMENT
    
Date: ${today}

To: ${formData.clientName}
From: [Your Name/Company]

Re: Overdue Invoice for ${formData.service} - Amount Outstanding: $${formData.amount}

Dear Hiring Manager,

This letter serves as a formal notice regarding the outstanding balance of $${formData.amount} for the ${formData.service} services provided.

Despite my previous attempts to resolve this matter amicably, payment has not yet been received. The services were completed and delivered in accordance with our agreement.

Please be advised that if payment in the full amount of $${formData.amount} is not received within 7 business days from the date of this letter, I will be forced to take further action. This may include, but is not limited to, turning this account over to a debt collection agency, reporting the delinquency to credit bureaus, and pursuing legal action to recover the debt plus all accrued legal fees and interest.

Sincerely,

[Your Name]
Freelance Professional`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // 模拟 AI 思考 1.5秒
    setTimeout(() => {
      const letter = generateLetter();
      setGeneratedLetter(letter);
      setIsGenerating(false);
      
      // 自动滚动到预览区
      setTimeout(() => {
        document.getElementById('preview-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-800">
      
      {/* Navbar - 保持你的设计 */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-800 tracking-tight">
          <FileText className="w-6 h-6 text-indigo-600" />
          <span>DemandDraft<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="hidden md:block">
          <button className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section - 保持你的设计 */}
      <section className="relative pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Content (Left) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider self-center lg:self-start">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                AI-Powered Legal Tech
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Client Ghosting You? <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">
                  Turn Your Unpaid Invoice Into Cash
                </span> Without Hiring a Lawyer.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The #1 AI Demand Letter Generator for freelancers. Create a firm, legally persuasive formal notice in under 60 seconds—and force your client to take you seriously.
              </p>
              
              {/* 这里的按钮指向下面的表单 */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => document.getElementById('generator-form')?.scrollIntoView({behavior:'smooth'})} className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5">
                  Generate My Demand Letter Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Legally Vetted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Instant PDF</span>
                </div>
              </div>
            </div>

            {/* Interactive Form (Right) - 保持设计，注入逻辑 */}
            <div className="lg:col-span-5 w-full relative z-10" id="generator-form">
              {/* Decorative Blur */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="bg-slate-900 px-6 py-4 border-b border-slate-800">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Start Your Free Demand Letter
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="clientName" className="block text-sm font-semibold text-slate-700">
                      Client Name
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      name="clientName"
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-slate-50 focus:bg-white text-slate-900"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="amount" className="block text-sm font-semibold text-slate-700">
                      Amount Owed ($)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-slate-500 font-medium">$</span>
                      </div>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="2500.00"
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-slate-50 focus:bg-white text-slate-900"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700">
                      Service Provided
                    </label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      placeholder="e.g. Web Design"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-slate-50 focus:bg-white text-slate-900"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* 注入逻辑的按钮 */}
                  <button
                    type="submit"
                    disabled={isGenerating}
                    className={`w-full flex items-center justify-center px-6 py-3.5 text-base font-bold text-white rounded-lg transition-colors shadow-md mt-2
                      ${isGenerating ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
                    `}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        AI Drafting...
                      </>
                    ) : (
                      'Generate Preview'
                    )}
                  </button>
                  
                  <p className="text-xs text-center text-slate-400 mt-3">
                    No credit card required for preview.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* [新增] PREVIEW SECTION - 放在 Hero 下面 */}
      {generatedLetter && (
        <section id="preview-section" className="py-20 bg-indigo-50 border-y border-indigo-100">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-4">Draft Generated Successfully</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Professional Demand Letter</h2>
              <p className="text-slate-600">Review the draft below. This is what authority looks like.</p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl shadow-indigo-100 border border-slate-200 relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Copy to Clipboard">
                   <Copy size={20} />
                </button>
              </div>
              
              <div className="font-mono text-sm md:text-base text-slate-700 whitespace-pre-wrap leading-relaxed">
                {generatedLetter}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Introduction Section - 保持你的设计 */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="prose prose-lg md:prose-xl prose-slate mx-auto text-slate-600 leading-relaxed">
            <p className="font-medium text-slate-900 mb-6 text-2xl md:text-3xl">
              You did the work. You met the deadline. You delivered value.
            </p>
            <p className="mb-6">
              But now, your emails are going into a black hole. Whether it’s 'the check is in the mail,' 'accounting is slow,' or total radio silence, dealing with a freelance unpaid invoice is exhausting. It drains your energy and kills your cash flow.
            </p>
            <p className="mb-6">
              You shouldn't have to beg for money that is rightfully yours. Stop sending polite 'just checking in' emails that get ignored. It’s time to escalate the conversation professionally.
            </p>
            <p className="font-semibold text-indigo-900 bg-indigo-50 p-4 rounded-xl inline-block border border-indigo-100">
              Our AI instantly drafts the perfect demand letter—striking the exact balance between 'professional business partner' and 'legally intimidating force.'
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - 保持你的设计 */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Freelancers Trust Us
            </h2>
            <p className="text-lg text-slate-600">Professional escalation without the legal fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Project Authority, Not Desperation</h3>
              <p className="text-slate-600 leading-relaxed">
                Stop worrying about sounding too aggressive or too weak. Our AI calibrates the tone to be 'Empathetic but Firm,' using the specific legal language that signals to clients you are ready to escalate if necessary.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Get Paid Faster <br/><span className="text-indigo-600 text-sm font-extrabold tracking-wide uppercase">(7x Higher Response Rate)</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Clients ignore emails; they do not ignore formal demand letters. By formalizing your request with proper legal terminology and clear deadlines, you move your invoice to the top of their payment pile.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Save Thousands on Legal Fees</h3>
              <p className="text-slate-600 leading-relaxed">
                A lawyer charges $300+ just to draft a letter. With our demand letter generator, you get the same legal weight for a fraction of the cost, and you can send it immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [新增] PRICING SECTION - 匹配你的设计风格 */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Simple Pricing</h2>
            <p className="text-lg text-slate-600">Pay only when you are ready to send.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Draft</h3>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">$0<span className="text-lg font-normal text-slate-500">/forever</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> AI-Generated Content</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> Web Preview Mode</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> Standard Legal Tone</li>
              </ul>
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full py-3 bg-white border border-slate-300 text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Start for Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border-2 border-indigo-600 rounded-2xl p-8 hover:shadow-2xl shadow-indigo-100 transition-all relative transform hover:-translate-y-1">
               <div className="absolute top-[-2px] left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-b-lg shadow-sm">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional PDF</h3>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">$9<span className="text-lg font-normal text-slate-500">/letter</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Everything in Basic</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> <b>Official PDF Download</b></li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Remove Watermarks</li>
              </ul>
              <button onClick={() => alert("Pro plan is currently invite-only.")} className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-colors flex items-center justify-center gap-2">
                 <Lock size={16} /> Get Pro Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 保持你的设计 */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-xl text-white mb-4 tracking-tight">
            <FileText className="w-6 h-6 text-indigo-500" />
            <span>DemandDraft<span className="text-indigo-500">.ai</span></span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Freelance Recovery Solutions. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}