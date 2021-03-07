// import React from 'react'
// import './index.css'
import styles from './index.less'

const App = () => {

  return <div className={styles.container}>
    hello world222

    这是测试1112222
    <span className={styles.tag}>tag111</span>
  </div>
}

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    this.addCount = this.addCount.bind(this)
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  
  render() {
    return (
      <div>
        <p><button onClick={this.addCount}>add</button></p>
        <p>{this.state.count}</p>
      </div>
    )
  }
}


export default App2