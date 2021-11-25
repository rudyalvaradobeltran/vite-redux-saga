import React from 'react'
import Shop from './Shop/Shop'
import { Provider } from 'react-redux'
import Store from './Redux/Store'

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Shop />
      </div>
    </Provider>
  );
}

export default App