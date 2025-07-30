import React from 'react';
import { Code2, Database, Palette, Code } from 'lucide-react';

const About: React.FC = () => {
    const skills = [
        { name: 'HTML/CSS', level: 95 },
        { name: 'Angular', level: 83 },
        { name: 'React', level: 60 },
        { name: 'Tailwind CSS', level: 72 },
        { name: 'JavaScript', level: 50 },
        { name: 'TypeScript', level: 50 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Git', level: 87 },
    ];

    const experiences = [
        // {
        //     title: 'Senior Frontend Developer',
        //     company: 'Tech Innovations Inc.',
        //     period: '2022 - Present',
        //     icon: Code2,
        //     description: 'Lead frontend development for enterprise applications using React and TypeScript.'
        // },
        {
            title: 'Frontend Developer',
            company: 'Pyramid IT',
            period: '2024 - 2025',
            icon: Code2,
            description: 'Built responsive web interfaces using Angular, Tailwind CSS, and JavaScript. Integrated RESTful APIs, improved performance, and collaborated with backend teams to deliver full-stack features.'
        },
        {
            title: 'Frontend Developer Intern',
            company: 'Pyramid IT',
            period: '2023 - 2024',
            icon: Code,
            description: 'Assisted in developing UI components with HTML, CSS, and Angular. Focused on responsive layouts, cross-browser compatibility, and improving overall user experience on web and mobile.'
        },

    ];

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I’m a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and modern frameworks
                        like React and Angular. I love building creative, user-friendly websites with clean UI and smooth animations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* About Content */}
                    <div className="space-y-8">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                as a Frontend Developer began 1.8 years ago, when I joined a startup as a UI Developer.
                                I worked on multiple live projects using HTML, CSS, JavaScript, Angular, and React,
                                focusing on building responsive and user-friendly interfaces. Over time, I improved
                                my skills in writing clean code, integrating APIs, and creating modern UI components with
                                frameworks like Tailwind CSS and Bootstrap.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I’ve collaborated with designers, followed agile methods,
                                and handled complete frontend modules from scratch — turning
                                complex designs into fast, functional web apps.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-blue-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl group-hover:shadow-lg transition-all duration-300">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                                            <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                                            <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                                            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;