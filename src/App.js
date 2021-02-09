import Header from './common/header/header';
import FontAwesome from './font-awesome';
import './App.css';
import './i18n';
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './common/home/home';
import Footer from './common/footer/footer';
import Markdown from './common/markdown/markdown';

FontAwesome();

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Router basename="/ditus">
          <div className="app-top-space" />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:id" component={Markdown} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
