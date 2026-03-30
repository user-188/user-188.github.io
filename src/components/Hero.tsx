import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = ({ setPage }: { setPage: (page: string) => void }) => {
    return (
        <div className="flex flex-col justify-center min-h-[80vh] space-y-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-secondary w-fit"
            >
                <span className="bg-secondary/20 text-secondary w-2 h-2 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
            </motion.div>

            <div className="space-y-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligence</span> <br />
                    at the Edge.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed"
                >
                    I bridge the gap between complex AI models and real-world applications.
                    Specializing in Backend Development, Computer Vision, and Distributed Systems.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
            >
                <button
                    onClick={() => setPage('projects')}
                    className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 group"
                >
                    View Projects
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => setPage('contact')}
                    className="px-8 py-4 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                    Contact Me
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 pt-12 text-muted"
            >
                <a href="https://github.com/Ananda-001" target="_blank" rel="noreferrer" className="hover:text-white group-[.light]:hover:text-black transition-colors"><Github size={24} /></a>
                <a href="https://linkedin.com/in/grananda/" target="_blank" rel="noreferrer" className="hover:text-white group-[.light]:hover:text-black transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:guruvayoorra@wisc.edu" className="hover:text-white group-[.light]:hover:text-black transition-colors"><Mail size={24} /></a>
            </motion.div>
        </div>
    );
};
