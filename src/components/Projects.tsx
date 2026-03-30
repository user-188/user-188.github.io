import { ExternalLink, Play, Eye } from 'lucide-react';
import { useState } from 'react';
import { VTONPipeline } from './visualizations/VTONPipeline';
import { RoboticArm } from './visualizations/RoboticArm';
import { ReactNode } from 'react';

interface Project {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    image: string;
    link?: string;
    demo?: ReactNode;
}

export const Projects = () => {
    const [activeDemo, setActiveDemo] = useState<number | null>(null);

    const projects: Project[] = [
        {
            title: "Custom VTON Pipeline",
            subtitle: "Virtual Try-On System",
            description: "Pioneered implementation of marching cubes style rendering approach for Virtual Try-On achieving better geometric accuracy and latency. End-to-end pipeline: OpenPose/DensePose → U-Net/PGN segmentation → Diffusion synthesis. Quantization strategies for real-time edge device deployment.",
            technologies: ["OpenPose", "DensePose", "U-Net", "Diffusion Models", "Python", "PyTorch"],
            image: "https://idm-vton.github.io/static/images/teaser.png",
            link: "https://idm-vton.github.io/",
            demo: <VTONPipeline />
        },
        {
            title: "VR-Controlled Robotic Arm",
            subtitle: "Immersive Control System",
            description: "Developed a sophisticated control system enabling virtual reality interface for precise robotic arm manipulation with inverse kinematics. Utilized Python and OpenCV for real-time processing and Unity XR framework.",
            technologies: ["Python", "OpenCV", "Unity XR", "C#", "Inverse Kinematics"],
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop", // Safe Unsplash tech/robotics image
            demo: <RoboticArm />
        },
        {
            title: "Large-Scale Graph Database Management",
            subtitle: "Data Pattern Recognition",
            description: "Optimized database management techniques for handling massive interconnected datasets (200+ GB) with advanced pattern recognition algorithms using Neo4j.",
            technologies: ["Neo4j", "Graph Algorithms", "Python", "Database Optimization"],
            image: "/database_project_banner_1774839605113.png",
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <p className="text-xl text-muted max-w-3xl">
                    A selection of my most significant academic and professional projects demonstrating technical expertise and innovation.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`group rounded-3xl overflow-hidden bg-surface border border-white/10 hover:border-white/20 transition-all duration-300 ${index === 0 ? 'lg:col-span-2' : ''}`}
                    >
                        {/* Project Preview or Interactive Demo */}
                        <div className={`relative overflow-hidden bg-black/20 ${index === 0 ? 'min-h-96' : 'min-h-64'}`}>

                            {/* Demo Toggle for available projects */}
                            {project.demo && (
                                <button
                                    onClick={() => setActiveDemo(activeDemo === index ? null : index)}
                                    className="absolute top-4 right-4 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 transition-colors"
                                >
                                    {activeDemo === index ? <Eye size={16} /> : <Play size={16} />}
                                    <span className="text-sm font-medium">{activeDemo === index ? 'View Image' : 'Interactive Demo'}</span>
                                </button>
                            )}

                            {activeDemo === index ? (
                                <div className="w-full h-full p-8 flex items-center justify-center animate-in fade-in duration-500">
                                    {project.demo}
                                </div>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </>
                            )}
                        </div>

                        <div className="p-8 relative z-20">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-secondary font-medium mb-1">{project.subtitle}</h4>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>

                            <p className="text-slate-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-xs md:text-sm rounded-lg bg-surfaceHighlight border border-white/10 text-muted">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
