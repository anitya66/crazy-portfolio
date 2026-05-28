import Navbar from "./layout/Navbar"
import Background from "./components/Background"
import SocialDock from "./components/SocialDock"

import Reveal from "./components/Reveal"

import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import VisitorCounter from "./components/VisitorCounter"
import Contact from "./sections/Contact"
import Footer from "./layout/Footer"
import Loader from "./components/Loader"
import ScrollProgress from "./components/ScrollProgress"
import config from "./data/config"
import Achievements from "./sections/Achievements"

import "./styles/achievement.css"

import "./styles/progress.css"

import "./styles/loader.css"

import "./styles/footer.css"

import "./styles/contact.css"

import "./styles/visitor.css"

import "./styles/projects.css"

import "./styles/navbar.css"
import "./styles/background.css"
import "./styles/hero.css"
import "./styles/social.css"
import "./styles/reveal.css"
import "./styles/skills.css"


function App(){

return(

<>
<ScrollProgress/>

{
config.showLoader
&&
<Loader/>
}

<Background/>

<Navbar/>

{
config.showDock
&&
<SocialDock/>
}

{
config.showVisitor
&&
<VisitorCounter/>
}

<Reveal>

<Hero/>

</Reveal>
<Reveal>

<Skills/>

</Reveal>

<Reveal>

<Projects/>

</Reveal>
<Reveal>
  <Achievements/>
</Reveal>
<Reveal>
<Contact/>
</Reveal>

<Footer/>

</>

)

}

export default App