import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import reducer from './reducers';
import history from './history';

import './App.css';
import Registration from './components/register';
import HomePage from './components/home/HomePage';
import AddCard from './components/addCard';
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
import AddCardFromVk from './components/addCard/vk';
import VkCardsList from './components/addCard/vk/CardsList';
import AddCardFromPhone from './components/addCard/phone';
import PhoneCardsList from './components/addCard/phone/CardsList';
import AddCardByRequisites from './components/addCard/requisites';
import Profile from './components/profile';
import Settings from './components/settings';

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
  { path: '/addCard', component: AddCard, name: 'Привязать карту' },
  {
    path: '/addCard/social',
    component: AddCardFromVk,
    name: 'Карты Вконтакте',
    back: true,
  },
  {
    path: '/addCard/social/list',
    component: VkCardsList,
    name: 'Карты Вконтакте',
    back: true,
  },
  {
    path: '/addCard/phone',
    component: AddCardFromPhone,
    name: 'По номеру телефона',
    back: true,
  },
  {
    path: '/addCard/phone/list',
    component: PhoneCardsList,
    name: 'По номеру телефона',
    back: true,
  },
  {
    path: '/addCard/requisites',
    component: AddCardByRequisites,
    name: 'По реквизитам',
    back: true,
  },
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
  {
    path: '/partner',
    component: Partner,
    name: 'В кассе партнера',
    back: true,
  },
  { path: '/bank', component: Bank, name: 'В банке-партнере', back: true },
  { path: '/gosuslugi', component: Gosuslugi, name: 'Платежи', back: true },
  { path: '/feedback', component: Feedback, name: 'Обратная связь' },
  { path: '/history', component: HistoryPage, name: 'Выписка' },
  { path: '/transfer', component: Transfer, name: 'Переводы' },
  { path: '/own', component: Own, name: 'Между своими счетами', back: true },
  { path: '/client', component: Client, name: 'Клиенту банка', back: true },
  {
    path: '/card',
    component: Card,
    name: 'На карту другого банка',
    back: true,
  },
  {
    path: '/account',
    component: Account,
    name: 'На счет в другом банке',
    back: true,
  },
  { path: '/profile', component: Profile, name: 'Профиль', back: true },
  { path: '/settings', component: Settings, name: 'Настройки', back: true }
];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
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
