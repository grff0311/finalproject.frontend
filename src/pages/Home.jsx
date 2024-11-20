import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import {coursesSection} from '../data/CoursesSection'

import parse from 'html-react-parser'
import '../styles/Home.css'
function Home() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
            {/* home */}
            <section id="home">
                <img src= {homeSection.image} />
                <div className="kolom">
                    {parse(homeSection.content)}
                </div>
            </section>
            {/* online course */}
            <section id="courses">
            <div className="kolom">
               {parse(coursesSection.content)}
            </div>
            <img src={coursesSection.image}/>
            {/* Tutors */}
            <section id="tutors">
                <div className="tengah">
                    <div className="kolom">
                       
                    </div>
                </div>
            </section>
        </section>
        </div>
        <Footer />
    </>
  )
}

export default Home