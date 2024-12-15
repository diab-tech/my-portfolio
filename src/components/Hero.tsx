import React from 'react';
import { Github, Mail, FileText, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700">
              <span>Available for new projects</span>
              <ArrowRight size={16} className="ml-2" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
              Full-Stack Developer & UI Designer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              I build exceptional digital experiences that combine elegant design with robust functionality. Specialized in React, Node.js, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                <Mail size={20} />
                Work with me
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition"
              >
                <FileText size={20} />
                Download CV
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="your-profile-image.jpg"
                alt="Profile"
                className="relative rounded-3xl w-80 h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}