export const Skills = () => {
    // Helper to get icon URL
    const getIcon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", icon: getIcon('python') },
                { name: "Java", icon: getIcon('java') },
                { name: "C#", icon: getIcon('csharp') },
                { name: "SQL", icon: getIcon('postgresql') }, // Using Postgres as generic SQL rep
                { name: "JavaScript", icon: getIcon('javascript') },
                { name: "C++", icon: getIcon('cplusplus') }
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "AI/ML Frameworks",
            skills: [
                { name: "TensorFlow", icon: getIcon('tensorflow') },
                { name: "PyTorch", icon: getIcon('pytorch') },
                { name: "Transformers", icon: null },
                { name: "OpenCV", icon: getIcon('opencv') },
                { name: "LLaMA-CPP", icon: null },
                { name: "LoRa", icon: null }
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Backend Technologies",
            skills: [
                { name: "FastAPI", icon: getIcon('fastapi') },
                { name: "Node.js", icon: getIcon('nodejs') },
                { name: "PostgreSQL", icon: getIcon('postgresql') },
                { name: "GraphQL", icon: getIcon('graphql') },
                { name: "Microservices", icon: null }
            ],
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "DevOps & Infrastructure",
            skills: [
                { name: "Docker", icon: getIcon('docker') },
                { name: "Kubernetes", icon: getIcon('kubernetes') },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                { name: "GCP", icon: getIcon('googlecloud') },
                { name: "Linux", icon: getIcon('linux') },
                { name: "Git", icon: getIcon('git') }
            ],
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Computer Vision",
            skills: [
                { name: "OpenPose", icon: null },
                { name: "U-Net", icon: null },
                { name: "Diffusion", icon: null },
                { name: "YOLO", icon: null },
                { name: "Segmentation", icon: null },
                { name: "3D Rendering", icon: null }
            ],
            color: "from-indigo-500 to-violet-500"
        },
        {
            title: "Database Systems",
            skills: [
                { name: "Neo4j", icon: getIcon('neo4j') },
                { name: "PostgreSQL", icon: getIcon('postgresql') },
                { name: "MongoDB", icon: getIcon('mongodb') },
                { name: "ChromaDB", icon: null }
            ],
            color: "from-yellow-500 to-amber-500"
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
                <p className="text-xl text-muted max-w-3xl">
                    My technical expertise spans multiple domains including backend development, artificial intelligence, computer vision, and database systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 backdrop-blur-sm"
                    >
                        <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:border-white/10 group-hover:bg-white/10 transition-colors"
                                >
                                    {skill.icon ? (
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                                    ) : (
                                        <div className="w-2 h-2 rounded-full bg-slate-500" />
                                    )}
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-white">Research Interests</h3>
                    <ul className="space-y-3">
                        {["Virtual Try-On Technology and Advanced Rendering", "Edge AI Optimization and Model Deployment", "Computer Vision Applications and Algorithms", "Large Language Models and Natural Language Processing"].map((item, i) => (
                            <li key={i} className="flex items-start text-slate-300">
                                <span className="mr-2 text-primary">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-white">Leadership & Soft Skills</h3>
                    <p className="text-slate-300 leading-relaxed">
                        I have demonstrated my ability to <span className="text-white font-semibold">lead technical discussions</span> on AI implementation strategies. I am skilled in communicating complex technical concepts to diverse audiences and collaborating effectively in team environments.
                    </p>
                </div>
            </div>
        </div>
    );
};
