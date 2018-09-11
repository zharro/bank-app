import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { routerReducer } from 'react-router-redux'

import * as reducers from './reducers'

import './App.css';
import RegistrationPage from './components/register/RegistrationPage'
import HomePage from './components/home/HomePage'
import Payments from './components/payments'
import Money from './components/money'
import Feedback from './components/feedback'
import Transfer from './components/transfer'
import HistoryPage from './components/history'
import Layout from './components/layout'
import Templates from './components/payments/Templates'
import Autopayment from './components/payments/Autopayment'
import QR from './components/payments/QR'
import Partner from './components/money/partner'
import Bank from './components/money/bank'


const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })
  
  const store = createStore(
    reducer
  )

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )
  
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={RegistrationPage}/>
            <AppRoute layout={Layout} path="/home" component={HomePage} />
            <AppRoute layout={Layout} path="/payments" component={Payments} />
            <AppRoute layout={Layout} path="/templates" component={Templates} />
            <AppRoute layout={Layout} path="/autopayment" component={Autopayment} />
            <AppRoute layout={Layout} path="/QR" component={QR} />

            <AppRoute layout={Layout} path="/money" component={Money} />
            <AppRoute layout={Layout} path="/partner" component={Partner} />
            <AppRoute layout={Layout} path="/bank" component={Bank} />

            <AppRoute layout={Layout} path="/feedback" component={Feedback} />
            <AppRoute layout={Layout} path="/history" component={HistoryPage} />
            <AppRoute layout={Layout} path="/transfer" component={Transfer} />
            


          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;