import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RefreshCcw, Play, Pause } from 'lucide-react';

export const VTONPipeline = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);



    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) return 0;
                    return p + 0.5;
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Derived states based on progress timeline (0-100)
    const stage =
        progress < 25 ? 'input' :
            progress < 50 ? 'preprocess' :
                progress < 75 ? 'diffusion' : 'result';

    return (
        <div className="w-full bg-black/80 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative select-none">
            {/* Header / Controls */}
            <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-white/70">VTON-HD PIPELINE.PY</span>
                </div>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
            </div>

            {/* Main Visual Area */}
            <div className="relative h-[400px] flex items-center justify-center p-8">

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />

                <div className="flex gap-8 relative z-10">

                    {/* LEFT SIDE: Inputs */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="relative w-48 h-64 rounded-lg overflow-hidden border-2 border-white/20 bg-slate-900"
                            layout
                        >
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center opacity-80 border-2 border-dashed border-slate-600">
                                <span className="text-white font-mono text-sm text-center">Model<br />Placeholder</span>
                            </div>
                            <div className="absolute bottom-2 left-2 text-xs font-bold text-white bg-black/50 px-2 rounded">
                                REFERENCE IMAGE
                            </div>

                            {/* PREPROCESS: Pose Overlay Animation */}
                            {stage === 'preprocess' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.8 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full p-4 stroke-primary stroke-2 fill-none">
                                        <motion.path
                                            d="M 50 20 L 50 50 L 30 70 M 50 50 L 70 70 M 50 20 L 40 40 M 50 20 L 60 40"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1 }}
                                        />
                                        <circle cx="50" cy="20" r="5" fill="white" />
                                    </svg>
                                    <div className="absolute top-2 right-2 text-[10px] bg-primary px-1 rounded text-black font-bold">OPENPOSE</div>
                                </motion.div>
                            )}

                            {/* MASKING OVERLAY */}
                            {stage === 'diffusion' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    className="absolute inset-0 bg-green-500/30 mix-blend-color"
                                >
                                    <div className="absolute top-2 right-2 text-[10px] bg-green-500 px-1 rounded text-black font-bold">INPAINT MASK</div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* ARROW / PROCESS INDICATOR */}
                    <div className="flex flex-col justify-center items-center gap-2 w-16">
                        <motion.div
                            animate={{
                                scale: stage === 'diffusion' ? 1.2 : 1,
                                color: stage === 'diffusion' ? '#8b5cf6' : '#555'
                            }}
                        >
                            <RefreshCcw className={`w-8 h-8 ${stage === 'diffusion' ? 'animate-spin' : ''}`} />
                        </motion.div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                style={{ width: `${(progress % 25) * 4}%` }}
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Cloth / Result */}
                    <div className="relative w-48 h-64 rounded-lg overflow-hidden border-2 border-white/20 bg-slate-900">
                        {/* CLOTH INPUT */}
                        <AnimatePresence>
                            {stage !== 'result' && (
                                <motion.div
                                    initial={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <div className="w-full h-full p-2">
                                        <div className="w-full h-full bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-600">
                                            <span className="text-white font-mono text-sm text-center">Target<br />Cloth<br />Placeholder</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 left-2 text-xs font-bold text-white bg-black/50 px-2 rounded">
                                        TARGET CLOTH
                                    </div>

                                    {/* WARPING ANIMATION */}
                                    {stage === 'preprocess' && (
                                        <motion.div
                                            className="absolute inset-0 backdrop-blur-[2px]"
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center text-secondary font-bold text-xs tracking-widest bg-black/20">
                                                WARPING...
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* DIFFUSION NOISE */}
                        {stage === 'diffusion' && (
                            <motion.div
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <svg className="w-full h-full opacity-50">
                                    <filter id="noise">
                                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                                    </filter>
                                    <rect width="100%" height="100%" filter="url(#noise)" />
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                                <div className="absolute bottom-2 right-2 text-xs font-bold text-white bg-purple-600 px-2 rounded">
                                    DENOISING
                                </div>
                            </motion.div>
                        )}

                        {/* FINAL RESULT */}
                        {stage === 'result' && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full flex items-center justify-center bg-blue-600"
                            >
                                <span className="text-white font-mono text-sm font-bold text-center drop-shadow-lg">Generated<br />Result<br />Placeholder</span>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Timeline Labels */}
            <div className="flex justify-between px-8 pb-6 text-[10px] md:text-xs font-mono text-muted uppercase tracking-widest">
                <div className={`${stage === 'input' ? 'text-white' : ''}`}>1. Load Assets</div>
                <div className={`${stage === 'preprocess' ? 'text-white' : ''}`}>2. Segment & Pose</div>
                <div className={`${stage === 'diffusion' ? 'text-white' : ''}`}>3. Synthesize</div>
                <div className={`${stage === 'result' ? 'text-secondary' : ''}`}>4. Result</div>
            </div>
        </div>
    );
};
