import React from 'react';
import { Search, BarChart, LineChart, PenTool, Brain, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO',
    description: 'Boost your online visibility with our expert SEO strategies'
  },
  {
    icon: BarChart,
    title: 'Google Ads',
    description: 'Drive targeted traffic with optimized Google Ads campaigns'
  },
  {
    icon: TrendingUp,
    title: 'Facebook Ads',
    description: 'Reach your ideal audience through strategic social media advertising'
  },
  {
    icon: PenTool,
    title: 'Copy Writing',
    description: 'Compelling content that converts visitors into customers'
  },
  {
    icon: LineChart,
    title: 'Data Science & Analysis',
    description: 'Make data-driven decisions with our advanced analytics'
  },
  {
    icon: Brain,
    title: 'Growth Hacking',
    description: 'Innovative strategies for rapid business growth'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive digital marketing solutions for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}