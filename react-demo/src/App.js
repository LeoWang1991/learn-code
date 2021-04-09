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

class Counter extends React.Component {
  constructor(kk) {
    super(kk);
    console.log('props---', kk);
    console.log(this.props)
  }

  // constructor() {}

  render() {
    return <div>结果：{this.props.value}</div>
  }
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
        <Counter value={this.state.count} />
      </div>
    )
  }
}


export default App2