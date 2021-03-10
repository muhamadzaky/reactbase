import { Provider } from 'react-redux';
import { configureStore } from '../common/services/store/index';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../common/routes/history';
import '../assets/scss/App.scss';
import 'antd/dist/antd.css';

import RestrictRoute from '../components/Route/RestrictRoute';

import ReactDefault from './ReactDefaultPage';
import PrivatePage from './PrivatePage';
import PublicPage from './PublicPage';

const App = () => {
  return (
    <Provider store={configureStore}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ReactDefault} />
          <Route exact path="/PublicPage" component={PublicPage} />
          <RestrictRoute exact path="/PrivatePage" component={PrivatePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
