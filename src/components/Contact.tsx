
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
                            <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-text/5 border border-text/10 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-text/5 border border-text/10 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-muted">Subject</label>
                        <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-text/5 border border-text/10 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="e.g., Finite Loop or Alfahive Opportunity" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-text/5 border border-text/10 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                        Send Message
                    </button>
                    <p className="text-xs text-center text-muted">Note: This is a demo form. Please email me directly above for inquiries, including roles relating to my past experience at Finite Loop and Alfahive.</p>
                </form>
            </div>
        </div>
    );
};
