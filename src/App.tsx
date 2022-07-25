import React from 'react'
import Panel from './components/panel'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'
import { Provider } from 'react-redux'
import store from './store/store'

function App () {
  return (
      <Router>
        <Provider store={store}>
            <Panel />
        </Provider>
      </Router>
  )
}

export default App
