
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
    const experiences = [
        {
            role: "Backend Intern",
            company: "Finite Loop",
            location: "Bangalore, Karnataka",
            duration: "May 2025 – August 2025",
            description: "Gained extensive experience in backend development, AI model integration, and deployment optimization. Worked on cutting-edge virtual try-on technology and robust API development.",
            achievements: [
                "Designed and created backend API endpoints using FastAPI framework",
                "Deployed applications via Docker serving 1000+ concurrent requests",
                "Developed modular workflow for integrating custom AI models into agent frameworks",
                "Optimized performance using quantized models (FP8/INT4) on Linux GPU servers"
            ]
        },
        {
            role: "Data Security Intern",
            company: "Alfahive",
            location: "Bangalore, Karnataka",
            duration: "April 2023 – May 2023",
            description: "Contributed to enhancing data security processes through graph database modeling and analysis. Designed systems to identify potential security threats.",
            achievements: [
                "Streamlined data security processes using Neo4j graph database modeling",
                "Developed node graph models for hack mitigation and security analysis",
                "Analyzed complex interconnected data relationships for pattern detection"
            ]
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
                <p className="text-xl text-muted max-w-3xl">
                    My professional journey in the tech industry, highlighting key roles and contributions.
                </p>
            </div>

            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <span className="hidden md:inline text-white/20">|</span>
                                <span className="text-xl text-secondary font-medium">{exp.company}</span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-muted">
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    {exp.duration}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    {exp.location}
                                </div>
                            </div>

                            <p className="text-slate-300 max-w-4xl leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="bg-surface/50 rounded-xl p-6 border border-white/5">
                                <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Achievements</h4>
                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-400 text-sm md:text-base">
                                            <span className="mr-2 text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
