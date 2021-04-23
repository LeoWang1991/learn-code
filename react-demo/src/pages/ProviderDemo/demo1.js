import React, { Component } from 'react'
import styles from './index.less'

const ThemeContext = React.createContext('dark');
ThemeContext.displayName = 'ReactContext';

class ThemeButton extends Component { 
  static contextType = ThemeContext; 

  render() {
    return <button className={styles[this.context]}>测试按钮222</button>
  }
}

// ThemeButton.contextType = ThemeContext

function Toolbar() {
  return <div>
    <ThemeButton />
    <ThemeContext.Consumer>
      {value => <div>当前模式：{value === 'dark' ? '暗黑' : '浅色'}</div>}
    </ThemeContext.Consumer>    
  </div>
}


export default class extends Component {  

  render() {
    return (
      <ThemeContext.Provider value='light'>
        <Toolbar />        
      </ThemeContext.Provider>
    )
  }
}