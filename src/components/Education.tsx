import { GraduationCap, Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COURSES = [
    {
        name: "CS 540 - Introduction to Artificial Intelligence",
        syllabus: [
            "State-space search & heuristics",
            "Probability & Bayesian networks",
            "Machine Learning basics",
            "Neural Networks",
            "Logic & Reasoning"
        ]
    },
    {
        name: "CS 539 - Compilers and programing languages",
        syllabus: [
            "Lexical Analysis & Scanners",
            "Parsing techniques",
            "Semantic Analysis & Type checking",
            "Code optimization",
            "Machine code generation"
        ]
    },
    {
        name: "CS 400 - Programming III",
        syllabus: [
            "Advanced Data Structures (Trees, Graphs, Hash Tables)",
            "Software Engineering Principles & Testing",
            "Java Programming Context",
            "Graph Algorithms (Dijkstra, etc.)",
            "Object-Oriented Design"
        ]
    },
    {
        name: "Math 340 - Linear Algebra & Matrix Analysis",
        syllabus: [
            "Vector spaces & Subspaces",
            "Linear Transformations",
            "Eigenvalues & Eigenvectors",
            "Matrix Factorizations (SVD, LU, QR)",
            "Applications to AI/Data Science"
        ]
    },
    {
        name: "ECE 354 - Machine organization",
        syllabus: [
            "Assembly Language Programming (x86/MIPS)",
            "Memory Hierarchy & Caching",
            "Processor Architecture & Pipelining",
            "C Programming",
            "Hardware/Software Interface"
        ]
    },
    {
        name: "STAT 340 - Advanced Statistics",
        syllabus: [
            "Statistical Inference",
            "Hypothesis Testing",
            "Linear & Logistic Regression",
            "Probability Distributions",
            "Monte Carlo Methods"
        ]
    },
    {
        name: "Math 234 - Calculus III",
        syllabus: [
            "Functions of Several Variables",
            "Partial Derivatives",
            "Multiple Integrals",
            "Vector Fields & Line Integrals",
            "Green's & Stokes' Theorems"
        ]
    }
];

export const Education = () => {
    const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
                <p className="text-xl text-muted max-w-3xl">
                    My academic background and core coursework that built my foundation in software systems and AI.
                </p>
            </div>

            <div className="space-y-8">
                {/* UW Madison Section */}
                <div className="relative overflow-hidden rounded-3xl bg-surface border border-text/10 p-8 group transition-all duration-300 hover:border-text/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                        <div className="w-full md:w-1/3 min-w-[250px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-text/10 flex-shrink-0 relative">
                            <img 
                                src="/uw_madison_banner_1774839634176.png" 
                                alt="View of Bascom Hall on top of the Bascom Hill" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                            />
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="text-3xl font-bold text-text">University of Wisconsin-Madison</h3>
                            
                            <div className="flex items-center gap-3 text-lg text-secondary font-medium">
                                <GraduationCap size={24} />
                                <span>B.S. Computer Science & Data Science</span>
                            </div>
                            
                            <div className="text-muted text-base">
                                Expected Graduation: <span className="text-text font-medium">December 2027</span>
                            </div>

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 text-yellow-500 font-medium text-sm border border-yellow-500/30">
                                <Award size={16} />
                                Honors: Dean's List
                            </div>
                            
                            <div className="pt-4 border-t border-text/10">
                                <h4 className="font-bold text-text mb-2 flex items-center gap-2">
                                    <BookOpen size={18} className="text-primary"/> Summary
                                </h4>
                                <p className="text-muted leading-relaxed text-sm md:text-base">
                                    Aspiring dual major student with 5 months of industry internship experience specializing in FastAPI microservices, Docker containerization, and AI optimization. Proven track record of deploying end to end VTON pipelines and developing secure containerized environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-xl font-bold mb-4 text-text">Relevant Coursework</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {COURSES.map((course, idx) => (
                                <div key={idx} className="flex flex-col p-3 rounded-lg bg-surfaceHighlight border border-text/5 text-sm transition-colors hover:bg-white/5">
                                    <button 
                                        onClick={() => setExpandedCourse(expandedCourse === idx ? null : idx)}
                                        className="flex items-center justify-between w-full text-left font-medium text-text group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            {course.name}
                                        </div>
                                        {expandedCourse === idx ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
                                    </button>
                                    
                                    <AnimatePresence>
                                        {expandedCourse === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <ul className="mt-4 pl-6 space-y-2 border-l border-text/10 ml-1 text-muted/80 list-disc pb-2">
                                                    {course.syllabus.map((bullet, i) => (
                                                        <li key={i}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
