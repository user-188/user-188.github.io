import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education = () => {
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
                <div className="relative overflow-hidden rounded-3xl bg-surface border border-white/10 p-8 group transition-all duration-300 hover:border-white/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                        <div className="w-full md:w-1/3 min-w-[250px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-white/10 flex-shrink-0 relative">
                            <img 
                                src="/uw_madison_banner_1774839634176.png" 
                                alt="View of Bascom Hall on top of the Bascom Hill" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                            />
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="text-3xl font-bold text-white group-[.light]:text-black">University of Wisconsin-Madison</h3>
                            
                            <div className="flex items-center gap-3 text-lg text-secondary font-medium">
                                <GraduationCap size={24} />
                                <span>B.S. Computer Science & Data Science</span>
                            </div>
                            
                            <div className="text-muted text-base">
                                Expected Graduation: <span className="text-white group-[.light]:text-black font-medium">December 2027</span>
                            </div>

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 text-yellow-500 font-medium text-sm border border-yellow-500/30">
                                <Award size={16} />
                                Honors: Dean's List
                            </div>
                            
                            <div className="pt-4 border-t border-white/10">
                                <h4 className="font-bold text-white group-[.light]:text-black mb-2 flex items-center gap-2">
                                    <BookOpen size={18} className="text-primary"/> Summary
                                </h4>
                                <p className="text-muted group-[.light]:text-slate-600 leading-relaxed text-sm md:text-base">
                                    Aspiring dual major student with 5 months of industry internship experience specializing in FastAPI microservices, Docker containerization, and AI optimization. Proven track record of deploying end to end VTON pipelines and developing secure containerized environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-xl font-bold mb-4 text-white group-[.light]:text-black">Relevant Coursework</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                "CS 540 - Introduction to Artificial Intelligence",
                                "CS 539 - Compilers and programing languages",
                                "CS 400 - Programming III",
                                "Math 340 - Linear Algebra & Matrix Analysis",
                                "ECE 354 - Machine organization",
                                "STAT 340 - Advanced Statistics",
                                "Math 234 - Calculus III"
                            ].map((course, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-surfaceHighlight border border-white/5 text-sm font-medium text-slate-300 group-[.light]:text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    {course}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
