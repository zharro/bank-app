import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';

import * as reducers from './reducers';

import './App.css';
import Registration from './components/register';
import HomePage from './components/home/HomePage';
import Payments from './components/payments';
import Money from './components/money';
import Feedback from './components/feedback';
import Own from './components/transfer/own';
import Client from './components/transfer/client';
import Card from './components/transfer/card';
import Account from './components/transfer/account';
import Transfer from './components/transfer';
import HistoryPage from './components/history';
import Layout from './components/layout';
import Templates from './components/payments/Templates';
import Autopayment from './components/payments/Autopayment';
import QR from './components/payments/QR';
import Partner from './components/money/partner';
import Bank from './components/money/bank';
import Gosuslugi from './components/payments/Gosuslugi';
import QRSuccess from './components/payments/QRSuccess';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(reducer);

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

//   const routes = [
//     {
//       path: "/login",
//       component: Login,
//     },
//     {
//       path: "/register",
//       component: RegistrationPage,
//     },
//     {
//       path: "/",
//       component: Layout,
//       routes: [
//         {
//           path: "/home",
//           component: HomePage
//         },
//         {
//           path: "/payments",
//           component: Payments
//         },
//         {
//           path: "/payments/templates",
//           component: Templates
//         },
//         {
//           path: "/payments/autopayment",
//           component: Autopayment
//         },
//         {
//           path: "/payments/QR",
//           component: QR
//         },
//         {
//           path: "/payments/Gosuslugi",
//           component: Gosuslugi
//         },
//         {
//           path: "/money",
//           component: Money
//         },
//         {
//           path: "/money/partner",
//           component: Partner
//         },
//         {
//           path: "/money/bank",
//           component: Bank
//         },
//         {
//           path: "/transfer",
//           component: Transfer
//         },
//         {
//           path: "/history",
//           component: HistoryPage
//         },
//         {
//           path: "/feedback",
//           component: Feedback
//         }
//       ]
//     }
//   ]

//  export const RouteWithSubRoutes = route => (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Registration} />
            <AppRoute layout={Layout} path="/home" component={HomePage} />
            <AppRoute layout={Layout} path="/payments" component={Payments} />
            <AppRoute layout={Layout} path="/templates" component={Templates} />
            <AppRoute layout={Layout} path="/autopayment" component={Autopayment} />
            <AppRoute exact layout={Layout} path="/QR" component={QR} />
            <AppRoute layout={Layout} path="/QR/success" component={QRSuccess} />
            <AppRoute layout={Layout} path="/money" component={Money} />
            <AppRoute layout={Layout} path="/partner" component={Partner} />
            <AppRoute layout={Layout} path="/bank" component={Bank} />
            <AppRoute layout={Layout} path="/gosuslugi" component={Gosuslugi} />
            <AppRoute layout={Layout} path="/feedback" component={Feedback} />
            <AppRoute layout={Layout} path="/history" component={HistoryPage} />
            <AppRoute layout={Layout} path="/transfer" component={Transfer} />
            <AppRoute layout={Layout} path="/own" component={Own} />
            <AppRoute layout={Layout} path="/client" component={Client} />
            <AppRoute layout={Layout} path="/card" component={Card} />
            <AppRoute layout={Layout} path="/account" component={Account} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;