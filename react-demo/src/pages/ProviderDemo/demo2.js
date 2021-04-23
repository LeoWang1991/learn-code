/*
 * @Author: wangjx
 * @Date: 2021-04-22 16:02:37
 * @Description: 通过react context实现换肤方案
 */

import React, { Component } from 'react'
import classnames from 'classnames';
import styles from './index.less';

const CustomContext = React.createContext({ theme: 'light' });
const CustomProvider = CustomContext.Provider;
const CustomConsumer = CustomContext.Consumer;

class App extends Component {
  state = {
    custom: {
      theme: 'dark'
    }
  }

  changeMode = () => {
    const { custom } = this.state;
    this.setState({
      custom: {
        ...custom,
        theme: custom.theme === 'dark' ? 'light' : 'dark'
      }
    })
  }

  render() {
    const { custom } = this.state;
    return (
      <CustomProvider value={this.state.custom}>
        <CustomConsumer>
          { context => (
            <div className={classnames(styles.demo2, styles[context.theme])}>
              context demo页面
              <p>
                <button onClick={this.changeMode}>{custom.theme === 'dark' ? '浅色' : '深色' }</button>
              </p>
            </div>
          )}
        </CustomConsumer>
      </CustomProvider>
    )
  }
}

export default App;