/*
 * @Author: wangjx
 * @Date: 2021-05-01 21:14:52
 * @Description: 
 */

import DemoApp from './SnapshotBeforeUpdate'; 

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log('Info component constructor---');
    this.state = {
      name: props.name,
      age: props.age,
      addr: '浙江杭州'      
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps---', nextProps); 
    if(this.props.age !== nextProps.age) {
      // this.setState({ age: nextProps.age });
    }        
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps---', props, state);
  //   return {
  //     addr: '浙江宁波',
  //     name: '消费222'
  //   }
  // }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', this.props, nextProps);
  //   return true;  
  // }
  componentDidMount() {
    console.log('Info componentDidMount');
  }
  componentDidUpdate() {
    console.log('Info componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('compoentWillUnmount---');
  }
  render() {
    console.log('Info render...')
    const { name, age, addr } = this.state;
    return (
      <div>
        <p>name: { name }</p>
        <p>age: { age }</p>
        <p>addr: { addr }</p>
      </div>
    )
  }
}

class LifecycleDemo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: 'xiaofei',
      age: 20,
      count: 0
    } 
  }

  addCount = () => {
    this.setState(state => ({...state, count: state.count + 1}) )
  }

  changeInfo = () => {
    this.setState(state => ({...state, age: state.age + 1}) )
  }

  updateInfo = () => {
    this.forceUpdate(() => {
      console.log('force updated---', this.state)
    })
  }
  
  render() {
    const { name, age, count } = this.state;
    return (
      <div>
        <p>lifecycle demo</p>
        <p>
          <button onClick={this.addCount} style={{marginRight:10}}>add+</button>
          {count}
        </p>     
        <button onClick={this.changeInfo}>change Info</button><br />
        <Info name={name} age={age} />
        <button onClick={this.updateInfo}>force update</button>
      </div>
    )
  }
}

export default DemoApp;