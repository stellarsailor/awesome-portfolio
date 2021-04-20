import { Container } from "react-grid-system"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { LanguageProvider } from "./store/LanguageProvider"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Project from "./pages/ProjectDetail"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import NavBar from "./components/NavBar"

import Scroll from "react-scroll"

var Element = Scroll.Element

export default function App() {
  return (
    <LanguageProvider>
      <Container fluid style={{ padding: 0 }}>
        <BackToTop />
        <Element name="top" />
        <Router>
          <NavBar />
          <div style={{ paddingTop: 45 }}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/project/:title" component={Project} />
              <Route path="/project" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </Container>
    </LanguageProvider>
  )
}
