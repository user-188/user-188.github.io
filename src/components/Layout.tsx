import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Lightbulb, Briefcase, Layers, GraduationCap, Mail, Sun, Moon } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
    currentPage: string;
    setPage: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        if (isLight) {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
    }, [isLight]);

    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'skills', icon: Lightbulb, label: 'Skills' },
        { id: 'projects', icon: Layers, label: 'Projects' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'education', icon: GraduationCap, label: 'Education' },
        { id: 'contact', icon: Mail, label: 'Contact' },
    ];

    return (
        <div className="flex h-screen w-full bg-background text-text overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            {/* Sidebar Navigation */}
            <nav className="w-20 md:w-64 h-full bg-surface/50 backdrop-blur-xl border-r border-white/5 flex flex-col p-4 z-50">
                <div className="mb-8 flex items-center justify-center md:justify-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                        A
                    </div>
                    <span className="hidden md:block ml-3 font-bold text-xl tracking-tight">Ananda</span>
                </div>

                <div className="space-y-2 flex-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setPage(item.id)}
                            className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${currentPage === item.id
                                ? 'bg-white/10 text-white shadow-inner'
                                : 'text-muted hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={20} className={`relative z-10 ${currentPage === item.id ? 'text-secondary' : ''}`} />
                            <span className="hidden md:block ml-3 relative z-10 font-medium">{item.label}</span>

                            {currentPage === item.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-white/5 rounded-xl border border-white/10"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="text-xs text-muted/50 hidden md:block text-center mt-auto">
                    &copy; 2025 Ananda
                </div>

                <button
                    onClick={() => setIsLight(!isLight)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:static md:mt-4 w-10 h-10 md:w-full flex items-center justify-center p-3 rounded-xl hover:bg-white/10 transition-colors text-muted hover:text-white group"
                >
                    {isLight ? (
                        <>
                            <Moon size={20} className="relative z-10 transition-transform group-hover:-rotate-12" />
                            <span className="hidden md:block ml-3 font-medium">Dark Mode</span>
                        </>
                    ) : (
                        <>
                            <Sun size={20} className="relative z-10 transition-transform group-hover:rotate-45 text-yellow-500" />
                            <span className="hidden md:block ml-3 font-medium">Light Mode</span>
                        </>
                    )}
                </button>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative scroll-smooth">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full min-h-full p-4 md:p-12 max-w-7xl mx-auto"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};
