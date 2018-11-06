import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import AppRouter from './routers/AppRouter';
import configureStores from './store/configureStores';

import './css/styles.scss';

const store = configureStores();

ReactDOM.render(AppRouter(store), document.getElementById('app'));
