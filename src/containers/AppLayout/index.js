import React, { Component, Suspense } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

// Components
import Navbar from '../../components/navbar';

// routes config
import routes from '../../routes';

class AppLayout extends Component {
  
  
  state = {
    idToken: null, // Token indicating user is logged in
    user: null, // Full user for that logged in user, if exists
  }

  loading = () => <div class="preloader"><div></div></div>;//<div className="animated fadeIn pt-1 text-center">Loading...</div>


//   componentWillMount() {
//     if (process.env.AUTH0_PUB_KEY) {
//       this.lock = new Auth0Lock(process.env.AUTH0_PUB_KEY, process.env.AUTH0_DOMAIN);
//       this.setState({idToken: this.getIdToken()}); // Must come after this.lock init
//     }

//     eventBus.on('logout', () => this.onLogout());
//   }

//   componentDidMount() {
//     if (! this.state.idToken && process.env.AUTH0_PUB_KEY) {
//       return this.redirectToLogin();
//     }
//     return this.setUser();
//   }

//   onLogout() {
//     localStorage.removeItem('userToken');
//     this.setState({ idToken: null, user: null });
//     return this.redirectToLogin();
//   }

//   redirectToLogin() {
//     this.props.router.push({
//       pathname: '/login',
//       query: { redirectUri: encodeURIComponent(this.props.location.pathname) },
//     });
//   }

//   setUser() {
//     if (! this.state.idToken) {
//       return null;
//     }

//     return this.lock.getProfile(this.state.idToken, (err, user) => {
//       return err ? this.onLogout() : this.setState({user});
//     });
//   }

//   getIdToken() {
//     let idToken = localStorage.getItem('userToken');
//     const authHash = this.lock.parseHash(window.location.hash);
//     if (!idToken && authHash) {
//       if (authHash.id_token) {
//         idToken = authHash.id_token;
//         localStorage.setItem('userToken', authHash.id_token);
//       }
//       if (authHash.error) {
//         return this.onLogout();
//       }
//     }
//     return idToken;
//   }

  render() {
    // @todo main - menu-collapsed
    return (
      <div>
        <Route
        render={({location}) => (
          <div className="Almighty-Router">
            <Navbar pages={routes} />
            <Route exact path="/" render={() => <Redirect to="/" />} />
            <AnimatedSwitch
              atEnter={{opacity: 0}}
              atLeave={{opacity: 0}}
              atActive={{opacity: 5}}
              className="switch-wrapper"
              location={location}
            >
              {routes.map((page, i) => {
                return (
                  <Route
                    exact
                    path={page.pageLink}
                    component={page.view}
                    key={i}
                  />
                );
              })}
              <Redirect to="/" />
            </AnimatedSwitch>
          </div>
        )}
      />
      </div>
    );
  }
}
export default AppLayout;