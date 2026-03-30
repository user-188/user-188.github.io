import { useState } from 'react'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

function App() {
    const [page, setPage] = useState('home');

    return (
        <Layout currentPage={page} setPage={setPage}>
            {page === 'home' && <Hero setPage={setPage} />}
            {page === 'skills' && <Skills />}
            {page === 'projects' && <Projects />}
            {page === 'experience' && <Experience />}
            {page === 'education' && <Education />}
            {page === 'contact' && <Contact />}
        </Layout>
    )
}

export default App
