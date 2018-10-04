import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import AppRouter from './routers/AppRouter';

import './css/styles.scss';


ReactDOM.render(AppRouter(), document.getElementById('app'));
