/*
 * @Author: wangjx
 * @Date: 2021-04-22 13:28:53
 * @Description: file content
 */

import React from 'react'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import routes from './router.config'
import Home from '@/pages/Home'
import ProviderDemo from '@/pages/ProviderDemo'
import HooksDemo from '@/pages/HooksDemo'
import styles from './index.less';

const BasicRoute = () => (
  <Router>
    <div className={styles.container}>
      <div className={styles.nav}>
        {routes.map(item => <div className={styles.link} key={item.name}><Link to={item.path}>{item.name}</Link></div>)}
      </div>
      <div className={styles.content}>
        <Switch>
          {routes.map(item => <Route key={item.name} exact path={item.path} component={item.component} />)}         
        </Switch>
      </div>
    </div>    
  </Router>
)

export default BasicRoute;