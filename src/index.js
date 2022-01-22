import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactLightbox from 'simple-react-lightbox'

import Home from './components/Home';
import Photo from './components/Photo';
import PhotoDetail from './components/PhotoDetail';
import Films from './components/Films';
import FilmsDetail from './components/FilmsDetails';
import Music from './components/Music';
import MusicDetails from './components/MusicDetails';
import Text from './components/Text';
import Publications from './components/Publications';
import PublicationsDetail from './components/PublicationsDetail';
import About from './components/About';
import Contact from './components/Contact';
import SideBar from './components/SideBar';
import AdminApp from './components/Admin/Admin';
import TextDetail from './components/TextDetail';

import Test from './components/test';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  useParams,
  Route,
  browserHistory,
} from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
    
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/photo' component={Photo}/>
        <Route exact path='/photo/:id' component={PhotoDetail}/>
        <Route exact path='/film' component={Films}/>
        <Route exact path='/film/:id' component={FilmsDetail}/>
        <Route exact path='/music' component={Music}/>
        <Route exact path='/music/:id' component={MusicDetails}/>
        <Route exact path='/text' component={Text}/>
        <Route exact path='/text/:id' component={TextDetail}/>
        <Route exact path='/publications' component={Publications}/>
        <Route exact path='/publications/:id' component={PublicationsDetail}/>
        <Route exact path='/test' component={SideBar} />
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/admin' component={AdminApp}/>
        </Switch>
      </Router>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
