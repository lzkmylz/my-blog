import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import AppRouter from './routers/AppRouter';
import configureStores from './store/configureStores';
import { setArticals } from './actions/articals';

import './css/styles.scss';

const store = configureStores();

const articals = [{
  title: 'artical 1',
  summary: 'test case 1',
  createdAt: 1,
  id: 1,
  totalReaders: 0,
}, {
  title: 'artical 2',
  summary: 'test case 2',
  createdAt: 2,
  id: 2,
  totalReaders: 233,
}, {
  title: 'artical 3',
  summary: 'test case 3',
  createdAt: 3,
  id: 3,
  totalReaders: 23333,
}];

store.dispatch(setArticals(articals));
ReactDOM.render(AppRouter(store), document.getElementById('app'));
