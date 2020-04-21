import React from 'react';
import Home from './containers/Home'
// const CateringList = React.lazy(() => import('./containers/CateringList'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    pageLink: '/',
    view: Home,
    displayName: 'Home',
    animationDelayForNavbar: 0.2,
    showInNavbar: true,
  },
  // {
  //   pageLink: '/caterersList',
  //   view: CateringList,
  //   displayName: 'CaterersList',
  //   animationDelayForNavbar: 0.3,
  //   showInNavbar: true,
  // },
  // { path: '/', exact: true, name: 'Home' },
  // { path: '/caterersList', name: 'CaterersList', component: CateringList }
];

export default routes;
