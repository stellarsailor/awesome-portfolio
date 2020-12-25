import './App.css';
import { Container, Row, Col } from 'react-grid-system';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Footer from './components/Footer';
import Projects from './components/Projects';
import BackToTop from './components/BackToTop';
import NavBar from './components/NavBar';

import Scroll from 'react-scroll';
var Element  = Scroll.Element;

export default function App() {

  return (
      <Container fluid style={{padding: 0}}>
        <BackToTop />
        <Element name="top" />
        <Router>
          <NavBar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/:title" component={Project} />
            <Route path="/project" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </Container>
  );
}

