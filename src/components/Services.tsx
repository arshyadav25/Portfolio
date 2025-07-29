import React from 'react';
import { Code, Palette, Smartphone, Server } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Specializing in building scalable and responsive web applications using Angular as the core framework. Also experienced with React and modern tools to ensure performance and clean UI.',
            features: ['Angular & TypeScript', 'Reusable Components', 'Performance Optimization', 'Cross-browser Compatibility']
        },
        {
            icon: Palette,
            title: 'Clean Code & Optimization',
            description: 'Writing clean, maintainable code and optimizing frontend performance for fast and smooth user experience.',
            features: ['Code Splitting', 'Lazy Loading', 'Best Practices', 'Performance Tuning']
        },

        {
            icon: Smartphone,
            title: 'Responsive Design',
            description: 'Creating mobile-first, fully responsive layouts that ensure smooth performance across all screen sizes and devices.',
            features: ['Mobile-First Approach', 'Flexible Layouts', 'Touch-Friendly', 'Fast Loading']
        },
        {
            icon: Server,
            title: 'API Integration',
            description: 'Integrating frontend applications with secure backend services and third-party APIs to enable dynamic functionality.',
            features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Data Management']
        }

    ];

    return (
        <section id="services" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I offer a comprehensive range of web development and design services to help bring your ideas to life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                                        <Icon size={32} className="text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-400">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;