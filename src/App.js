import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
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

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...rest}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export const routes = [
  { path: '/', component: Registration, name: 'Регистрация' },
  { path: '/home', component: HomePage, name: 'Главная' },
  { path: '/payments', component: Payments, name: 'Платежи' },
  { path: '/templates', component: Templates, name: 'Шаблоны', back: true },
  {
    path: '/autopayment',
    component: Autopayment,
    name: 'Автоплатежи',
    back: true,
  },
  { path: '/QR', component: QR, name: 'QR-код', back: true },
  { path: '/QR/success', component: QRSuccess, name: 'QR-код' },
  { path: '/money', component: Money, name: 'Наличные' },
  { path: '/partner', component: Partner, name: 'Наличные', back: true },
  { path: '/bank', component: Bank, name: 'Наличные', back: true },
  { path: '/gosuslugi', component: Gosuslugi, name: 'Платежи', back: true },
  { path: '/feedback', component: Feedback, name: 'Обратная связь' },
  { path: '/history', component: HistoryPage, name: 'Выписка' },
  { path: '/transfer', component: Transfer, name: 'Переводы' },
  { path: '/own', component: Own, name: 'Переводы', back: true },
  { path: '/client', component: Client, name: 'Переводы', back: true },
  { path: '/card', component: Card, name: 'Переводы', back: true },
  { path: '/account', component: Account, name: 'Переводы', back: true },
];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <Route exact path="/" component={Registration} /> */}
            {routes.map(r => (
              <AppRoute
                key={r.path}
                exact
                back={r.back}
                layout={Layout}
                path={r.path}
                component={r.component}
              />
            ))}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
