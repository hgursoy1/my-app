import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold">ECOVOLVE</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Sign In</a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Get Started
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Simplifying ESG Reporting for SMEs
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Transform your sustainability reporting with AI-powered insights
              and automated compliance tracking.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Get Started Free
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-6">
              <img
                src="/dashboard.png"
                alt="Dashboard"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-2">
            Meet Your AI Assistants
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Specialized AI personas to guide you through every aspect of ESG reporting
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            <AIAssistantCard
              image="/foto1.png"
              title="Compliance Expert"
              description="Specialized in regulatory requirements and compliance frameworks"
            />
            <AIAssistantCard
              image="/foto2.png"
              title="Data Analyst"
              description="Expert in data interpretation and performance metrics"
            />
            <AIAssistantCard
              image="/foto3.png"
              title="Strategy Advisor"
              description="Guides you through sustainability strategy development"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const AIAssistantCard = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-gray-50 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 w-full flex items-center justify-center">
        <span className="mr-2">Chat Now</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </div>
  );
};

export default App;