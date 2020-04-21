import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

import store, { history } from './store';

// import Home from './containers/Home';

import './App.scss';


const loading = () => <div class="preloader"><div></div></div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/AppLayout'));

export default class App extends Component {

  state = {
    idToken: null, // Token indicating user is logged in
    user: null, // Full user for that logged in user, if exists
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {/* <div>
            <main className=''>   
              <Sidebar {...this.props} />
              <PageTop location={this.props.location} user={this.state.user} />
              <div className="al-main">
                <div className="al-content">
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                  </Switch>
                </div>
              </div>
            </main>
          </div> */}
          <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              </Switch>
            </React.Suspense>
          </HashRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}