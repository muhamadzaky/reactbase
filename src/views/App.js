import { Provider } from 'react-redux';
import { configureStore } from '../common/services/store/index';
import { Router, Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Layout } from 'antd';
import history from '../common/routes/history';
import '../assets/scss/App.scss';
import 'antd/dist/antd.css';

import RestrictRoute from '../components/Route/RestrictRoute';

import ReactDefault from './ReactDefaultPage';
import PrivatePage from './PrivatePage';
import PublicPage from './PublicPage';
import NotFound404 from '../components/Feedback/NotFound404';

const App = () => {
  const { Footer } = Layout;
  return (
    <Provider store={configureStore}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ReactDefault} />
          <Route exact path="/PublicPage" component={PublicPage} />
          <RestrictRoute exact path="/PrivatePage" component={PrivatePage} />
          <Route exact path="*" component={NotFound404} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default withTranslation()(App);
