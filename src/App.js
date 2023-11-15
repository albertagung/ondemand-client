// Views
import Main from './views/Main'

// React-redux
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
