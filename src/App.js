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

export const routes = [
  { path:"/home", component: HomePage, name: 'Главная'},
  { path:"/payments", component: Payments, name: 'Платежи'},
  { path:"/templates", component: Templates, name: 'Шаблоны'},
  { path:"/autopayment", component: Autopayment, name: 'Автоплатежи'},
  { path:"/QR", component: QR, name: 'QR-код'},
  { path:"/QR/success", component: QRSuccess, name: 'QR-код'},
  { path:"/money", component: Money, name: 'Наличные'},
  { path:"/partner", component: Partner, name: 'Наличные'},
  { path:"/bank", component: Bank, name: 'Наличные'},
  { path:"/gosuslugi", component: Gosuslugi, name: 'Платежи'},
  { path:"/feedback", component: Feedback, name: 'Обратная связь'},
  { path:"/history", component: HistoryPage, name: 'Выписка'},
  { path:"/transfer", component: Transfer, name: 'Переводы'},
  { path:"/own", component: Own, name: 'Переводы'},
  { path:"/client", component: Client, name: 'Переводы'},
  { path:"/card", component: Card, name: 'Переводы'},
  { path:"/account", component: Account, name: 'Переводы'}
]

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Registration} />
            { routes.map(r => <AppRoute key={r.path} exact layout={Layout} path={r.path} component={r.component}/>)}

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;