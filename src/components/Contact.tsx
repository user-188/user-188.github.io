import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
    return (
        <div className="space-y-8 min-h-[60vh] flex flex-col justify-center">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                <p className="text-xl text-muted max-w-3xl">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="max-w-2xl">
                <div className="space-y-6">
                    <a
                        href="mailto:guruvayoorra@wisc.edu"
                        className="flex items-center p-6 rounded-2xl bg-text/5 border border-text/10 hover:bg-text/10 transition-colors group"
                    >
                        <div className="p-4 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-bold text-text">Email</h3>
                            <p className="text-muted group-hover:text-primary transition-colors hover:text-primary">guruvayoorra@wisc.edu</p>
                        </div>
                    </a>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/Ananda-001"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex flex-col items-center justify-center p-6 rounded-2xl bg-text/5 border border-text/10 hover:bg-text/10 transition-colors group"
                        >
                            <Github size={32} className="mb-2 text-text group-hover:text-secondary transition-colors" />
                            <span className="text-sm font-medium text-muted">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/grananda/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex flex-col items-center justify-center p-6 rounded-2xl bg-text/5 border border-text/10 hover:bg-text/10 transition-colors group"
                        >
                            <Linkedin size={32} className="mb-2 text-text group-hover:text-blue-400 transition-colors" />
                            <span className="text-sm font-medium text-muted">LinkedIn</span>
                        </a>
                    </div>
                    
                    <div className="flex items-center p-6 rounded-2xl bg-text/5 border border-text/10 hover:bg-text/10 transition-colors group">
                        <div className="p-4 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform">
                            <span className="font-bold text-xl inline-block">📞</span>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-bold text-text">Phone</h3>
                            <p className="text-muted">+1 (608)-6589849</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
