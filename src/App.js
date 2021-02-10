import Header from './common/header/header';
import FontAwesome from './font-awesome';
import './App.css';
import './i18n';
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './common/home/home';
import Footer from './common/footer/footer';
import Markdown from './common/markdown/markdown';
import SideBar from './common/side-bar/side-bar';
import { Col, Row } from 'react-bootstrap';
const toc = require('./toc');

FontAwesome();

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Router basename="/ditus">
          <div className="app-top-space" />
          <Header />
          <Row>
            <Col sm={12} md={4} lg={2}>
              <SideBar
                sections={toc.sections}
              />
            </Col>
            <Col sm={12} md={8} lg={10}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:id" component={Markdown} />
              </Switch>
            </Col>
          </Row>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
