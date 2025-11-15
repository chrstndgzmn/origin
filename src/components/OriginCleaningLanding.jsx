import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Users, Award, ChevronDown, ChevronUp, Check, Sparkles, Building2, Dumbbell, Stethoscope } from 'lucide-react';
import favicon from '../assets/favicon.png'
import logo from '../assets/logo-long-removebg.png'
const OriginCleaningLanding = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    businessType: '',
    squareFootage: '',
    frequency: '',
    name: '',
    email: '',
    phone: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({
        businessType: '',
        squareFootage: '',
        frequency: '',
        name: '',
        email: '',
        phone: ''
      });
    }, 5000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      q: "How much does commercial cleaning cost?",
      a: "Pricing varies based on your space size, cleaning frequency, and specific needs. Most of our clients invest between $200-$800 per service. Request a free quote to get an accurate estimate tailored to your business."
    },
    {
      q: "Are you insured and bonded?",
      a: "Yes, Origin Cleaning is fully insured and bonded. We carry comprehensive liability insurance and all our staff undergo thorough background checks for your peace of mind."
    },
    {
      q: "Do you require long-term contracts?",
      a: "No long-term contracts required. We offer flexible month-to-month agreements because we believe in earning your business through exceptional service, not binding contracts."
    },
    {
      q: "What if I'm not satisfied with the cleaning?",
      a: "We offer a 100% satisfaction guarantee. If you're not completely happy with our service, we'll return within 24 hours to re-clean at no additional cost."
    },
    {
      q: "When are you available to clean?",
      a: "We offer flexible scheduling including after-hours, weekends, and early morning services to minimize disruption to your business operations."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "FitCore Gym",
      quote: "Origin Cleaning transformed our gym. Members consistently comment on how clean and fresh everything is. Their attention to detail with equipment sanitization is outstanding."
    },
    {
      name: "Dr. James Chen",
      business: "Smile Dental Clinic",
      quote: "As a dental practice, we need medical-grade cleaning standards. Origin Cleaning exceeds our expectations every time. Reliable, thorough, and professional."
    },
    {
      name: "Michael Roberts",
      business: "TechHub Office",
      quote: "After-hours cleaning means our team arrives to a spotless office every morning. Origin Cleaning has been a game-changer for our workplace environment."
    }
  ];

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a2332] via-[#2d4a6d] to-[#1a2332] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[#10b981]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-[#2d4a6d] mb-6">
            We've received your quote request and will contact you within 24 hours with a custom cleaning plan for your business.
          </p>
          <p className="text-[#1e293b]">
            Need immediate assistance? Call us at <a href="tel:+14035551234" className="text-[#2d4a6d] font-semibold hover:underline">(403) 555-1234</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-[#1a2332] via-[#2d4a6d] to-[#171f2c] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <nav className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
                <img src={logo} alt="Origin Corporate Cleaning" className="h-12 md:h-16" />
            {/* <div className="flex flex-row items-center justify-center">
                <span className="text-3xl md:text-4xl lg:text-5xl  leading-tight text-[#c8a363]">ORIGIN CLEANING</span>
            </div> */}
            <a href="tel:+14035551234" className="flex items-center gap-2 bg-[#c8a363] hover:bg-[#b08f57] text-black px-4 md:px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">(403) 555-1234</span>
            </a>
          </div>
        </nav>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Commercial Cleaning for <span className="text-[#c8a363]">Gyms, Offices & Dental Practices</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#ceac73] mb-8">
              Trusted by Calgary businesses for reliable, professional cleaning services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote-form" className="bg-[#c8a363] hover:bg-[#b08f57] text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6" />
                Get Your Free Quote
              </a>
              <a href="tel:+14035551234" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Industry Sections */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2332] mb-4">
            Specialized Cleaning for Your Industry
          </h2>
          <p className="text-xl text-[#2d4a6d] text-center mb-12 max-w-3xl mx-auto">
            We understand the unique cleaning requirements of different businesses
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Gyms */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-[#dadbdd] hover:border-[#c8a363]">
              <div className="w-16 h-16 bg-[#ceac73]/20 rounded-full flex items-center justify-center mb-6">
                <Dumbbell className="w-8 h-8 text-[#c8a363]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">For Gyms & Fitness Centers</h3>
              <ul className="space-y-3 text-[#2d4a6d]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Complete equipment sanitization after every session</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Locker room deep cleaning and odor elimination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Member safety through hospital-grade disinfection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Shower and bathroom sanitization protocols</span>
                </li>
              </ul>
            </div>

            {/* Corporate Offices */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-[#dadbdd] hover:border-[#c8a363]">
              <div className="w-16 h-16 bg-[#2d4a6d]/20 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-[#2d4a6d]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">For Corporate Offices</h3>
              <ul className="space-y-3 text-[#2d4a6d]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Professional appearance that impresses clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>After-hours service for zero disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Common areas, workstations, and meeting rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Kitchen and breakroom sanitation</span>
                </li>
              </ul>
            </div>

            {/* Dental Practices */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-[#dadbdd] hover:border-[#c8a363]">
              <div className="w-16 h-16 bg-[#10b981]/20 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-[#10b981]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">For Dental Practices</h3>
              <ul className="space-y-3 text-[#2d4a6d]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Medical-grade cleaning protocols and products</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Compliance with health and safety standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Patient safety and infection control focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                  <span>Reception and treatment room sanitization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 md:py-24 bg-gradient-to-br from-[#2d4a6d] via-[#1a2332] to-[#1e293b]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center">
                Get Your Custom Quote
              </h2>
              <p className="text-lg text-[#2d4a6d] mb-8 text-center">
                Tell us about your space and we'll create a tailored cleaning plan
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#dadbdd] rounded-lg focus:border-[#c8a363] focus:ring-2 focus:ring-[#ceac73]/20 transition-all"
                  >
                    <option value="">Select your business type</option>
                    <option value="gym">Gym / Fitness Center</option>
                    <option value="office">Corporate Office</option>
                    <option value="dental">Dental Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                      Square Footage *
                    </label>
                    <input
                      type="text"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      placeholder="e.g., 2000 sq ft"
                      required
                      className="w-full px-4 py-3 border-2 border-[#dadbdd] rounded-lg focus:border-[#c8a363] focus:ring-2 focus:ring-[#ceac73]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                      Cleaning Frequency *
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#dadbdd] rounded-lg focus:border-[#c8a363] focus:ring-2 focus:ring-[#ceac73]/20 transition-all"
                    >
                      <option value="">Select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="">Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-3 border-2 border-[#dadbdd] rounded-lg focus:border-[#c8a363] focus:ring-2 focus:ring-[#ceac73]/20 transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 border-2 border-[#dadbdd] rounded-lg focus:border-[#c8a363] focus:ring-2 focus:ring-[#ceac73]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(403) 555-1234"
                      required
                      className="w-full px-4 py-3 border-2 border-[#dadbdd] rounded-lg focus:border-[#c8a363] focus:ring-2 focus:ring-[#ceac73]/20 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8a363] hover:bg-[#b08f57] text-black py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-6 h-6" />
                  Get My Custom Quote
                </button>

                <p className="text-sm text-[#2d4a6d] text-center">
                  We'll respond within 24 hours with your personalized cleaning plan
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2332] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-[#2d4a6d] text-center mb-12 max-w-3xl mx-auto">
            Simple, transparent process from quote to sparkling clean
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ceac73]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-3xl font-bold text-[#c8a363]">1</span>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c8a363] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-3">Free Walkthrough</h3>
              <p className="text-[#2d4a6d]">
                We assess your space and understand your specific cleaning needs and schedule requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2d4a6d]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-3xl font-bold text-[#2d4a6d]">2</span>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2d4a6d] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-3">Custom Plan</h3>
              <p className="text-[#2d4a6d]">
                Receive a tailored cleaning schedule and transparent pricing based on your exact needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#10b981]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-3xl font-bold text-[#10b981]">3</span>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-3">Guaranteed Clean</h3>
              <p className="text-[#2d4a6d]">
                We clean it right the first time, or we'll return to re-clean at no additional cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2332] mb-4">
            Trusted by Calgary Businesses
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-[#c8a363] fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-[#1a2332]">4.9 on Google</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border border-[#dadbdd]">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#c8a363] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2d4a6d] mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-[#1a2332]">{testimonial.name}</p>
                  <p className="text-sm text-[#1e293b]">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a363]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#c8a363]" />
              </div>
              <h3 className="font-bold mb-2">Fully Insured & Bonded</h3>
              <p className="text-sm text-[#ceac73]">Comprehensive coverage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2d4a6d]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#ceac73]" />
              </div>
              <h3 className="font-bold mb-2">Background-Checked Staff</h3>
              <p className="text-sm text-[#ceac73]">Trusted team members</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#10b981]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#10b981]" />
              </div>
              <h3 className="font-bold mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-sm text-[#ceac73]">We make it right</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a363]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#c8a363]" />
              </div>
              <h3 className="font-bold mb-2">Serving Calgary Since 2018</h3>
              <p className="text-sm text-[#ceac73]">Local expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2332] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#2d4a6d] text-center mb-12 max-w-3xl mx-auto">
            Everything you need to know about our commercial cleaning services
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#f8fafc] rounded-xl overflow-hidden border border-[#dadbdd]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#dadbdd]/30 transition-colors"
                >
                  <span className="font-bold text-lg text-[#1a2332]">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-[#c8a363] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#2d4a6d] flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-[#2d4a6d]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#c8a363] to-[#b08f57]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Ready to Experience the Origin Cleaning Difference?
            </h2>
            <p className="text-xl text-[#1e293b] mb-8">
              Join hundreds of satisfied Calgary businesses who trust us with their cleaning needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote-form" className="bg-[#1a2332] hover:bg-[#171f2c] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6" />
                Schedule Your Free Assessment
              </a>
              <a href="tel:+14035551234" className="bg-white hover:bg-[#f8fafc] text-[#1a2332] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img src={logo} alt="Origin Corporate Cleaning" className="h-12 mb-6" />
              <p className="text-[#ceac73] mb-4">
                Professional commercial cleaning services for gyms, offices, and dental practices in Calgary and surrounding areas.
              </p>
              <p className="text-[white] text-sm">
                Origin Corporate Cleaning Inc.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#c8a363]">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+14035551234" className="flex items-center gap-2 text-[#ceac73] hover:text-[#c8a363] transition-colors">
                    <Phone className="w-5 h-5" />
                    (403) 555-1234
                  </a>
                </li>
                <li>
                  <a href="mailto:info@origincleaning.ca" className="flex items-center gap-2 text-[#ceac73] hover:text-[#c8a363] transition-colors">
                    <Mail className="w-5 h-5" />
                    info@origincleaning.ca
                  </a>
                </li>
                <li className="flex items-start gap-2 text-[#ceac73]">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Calgary, AB & Surrounding Areas</span>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#c8a363]">Business Hours</h3>
              <ul className="space-y-2 text-[#ceac73]">
                <li className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Available 24/7</span>
                </li>
                <li className="text-sm text-[white]">
                  Office Hours:<br />
                  Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 4:00 PM<br />
                  Sun: Closed
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2d4a6d] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#white] text-sm">
                © 2025 Origin Corporate Cleaning Inc. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#quote-form" className="text-[#white] hover:text-[#c8a363] transition-colors text-sm">
                  Get a Quote
                </a>
                <a href="#" className="text-[#white] hover:text-[#c8a363] transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-[#white] hover:text-[#c8a363] transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OriginCleaningLanding;