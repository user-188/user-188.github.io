import { useState, useRef, useEffect } from 'react';

export const RoboticArm = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mouseTarget, setMouseTarget] = useState({ x: 150, y: 100 });
    const [currentTarget, setCurrentTarget] = useState({ x: 150, y: 100 });
    const [isIdle, setIsIdle] = useState(true);
    const requestRef = useRef<number>();

    // Arm segment lengths
    const L1 = 90;
    const L2 = 70;

    // Base position
    const BASE = { x: 200, y: 300 };

    // Smooth Animation Loop
    useEffect(() => {
        let time = 0;

        const animate = () => {
            time += 0.05;

            setCurrentTarget(prev => {
                let targetX, targetY;

                if (isIdle) {
                    // Idle Animation: Figure-8 swaying
                    targetX = BASE.x + Math.sin(time) * 60;
                    targetY = BASE.y - 150 + Math.cos(time * 2) * 30;
                } else {
                    // Smooth follow mouse (Lerp)
                    // Smoothing factor 0.1 for nice weight
                    targetX = prev.x + (mouseTarget.x - prev.x) * 0.1;
                    targetY = prev.y + (mouseTarget.y - prev.y) * 0.1;

                    // Reset time so idle picks up smoothly if we switch back (optional)
                }
                return { x: targetX, y: targetY };
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current!);
    }, [mouseTarget, isIdle]);

    // Inverse Kinematics Calculation
    const calculateIK = (tx: number, ty: number) => {
        const dx = tx - BASE.x;
        const dy = BASE.y - ty;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Clamp reach
        const reach = Math.min(dist, L1 + L2 - 2);
        const scale = reach / dist;
        const cx = dx * scale;
        const cy = dy * scale;

        const alpha = Math.acos((L1 * L1 + reach * reach - L2 * L2) / (2 * L1 * reach));
        const beta = Math.atan2(cy, cx);

        // Shoulder Angle (theta1)
        let theta1;

        // Logic: Keep elbow consistent. Pivit right when on left side.
        if (tx < BASE.x) {
            // Left side: Inverse elbow
            theta1 = beta - alpha;

        } else {
            // Right side: Standard elbow
            theta1 = beta + alpha;

        }

        const j1x = BASE.x + L1 * Math.cos(theta1);
        const j1y = BASE.y - L1 * Math.sin(theta1);

        const eex = BASE.x + cx;
        const eey = BASE.y - cy;

        return { j1x, j1y, eex, eey };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setIsIdle(false);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMouseTarget({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleMouseLeave = () => {
        setIsIdle(true);
    };

    // Calculate IK based on the SMOOTHED currentTarget, not raw mouse
    const ik = calculateIK(currentTarget.x, currentTarget.y);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-96 bg-gradient-to-b from-gray-900 to-black rounded-xl border border-white/10 relative overflow-hidden cursor-crosshair touch-none shadow-inner"
        >
            <div className="absolute top-4 left-4 z-10">
                <h4 className="text-sm font-bold text-muted uppercase tracking-wider pointer-events-none select-none">
                    Inverse Kinematics Demo
                </h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className={`w-2 h-2 rounded-full ${isIdle ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
                    <span className="text-xs text-slate-500 pointer-events-none select-none">
                        {isIdle ? 'Idle Mode' : 'User Control'}
                    </span>
                </div>
            </div>

            <svg width="100%" height="100%" className="pointer-events-none filter drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <defs>
                    <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                </defs>

                {/* Grid */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Base */}
                <path d={`M ${BASE.x - 30} ${BASE.y} L ${BASE.x + 30} ${BASE.y} L ${BASE.x + 20} ${BASE.y - 15} L ${BASE.x - 20} ${BASE.y - 15} Z`} fill="#334155" />
                <circle cx={BASE.x} cy={BASE.y - 10} r="12" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

                {/* Arm Segment 1 */}
                <line
                    x1={BASE.x} y1={BASE.y - 10}
                    x2={ik.j1x} y2={ik.j1y}
                    stroke="url(#armGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                />

                {/* Elbow Joint */}
                <circle cx={ik.j1x} cy={ik.j1y} r="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />

                {/* Arm Segment 2 */}
                <line
                    x1={ik.j1x} y1={ik.j1y}
                    x2={ik.eex} y2={ik.eey}
                    stroke="url(#armGradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                />

                {/* End Effector */}
                <circle cx={ik.eex} cy={ik.eey} r="6" fill="#06b6d4" className={!isIdle ? "animate-pulse" : ""} />

                {/* Gripper */}
                <g transform={`translate(${ik.eex}, ${ik.eey}) rotate(45)`}>
                    <path d="M -2 2 L -8 12" stroke="#06b6d4" strokeWidth="3" />
                    <path d="M 2 2 L 8 12" stroke="#06b6d4" strokeWidth="3" />
                </g>

                {/* Debug: Ghost Target */}
                {!isIdle && (
                    <circle cx={mouseTarget.x} cy={mouseTarget.y} r="4" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeDasharray="2,2" />
                )}
            </svg>
        </div>
    );
};
