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
import UseStateDemo from '@/pages/UseState'
import styles from './index.less';

const BasicRoute = () => (
  <Router>
    <div className={styles.container}>
      <div className={styles.nav}>
        {routes.map(item => <div className={styles.link} key={item.name}><Link to={item.path}>{item.name}</Link></div>)}
      </div>
      <div className={styles.content}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/provider' component={ProviderDemo} />
          <Route exact path='/usestate' component={UseStateDemo} />
        </Switch>
      </div>
    </div>    
  </Router>
)

export default BasicRoute;