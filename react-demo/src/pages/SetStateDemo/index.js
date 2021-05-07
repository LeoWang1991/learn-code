/*
 * @Author: wangjx
 * @Date: 2021-04-29 15:20:29
 * @Description: 
 */

class SetStateDemo extends React.Component {
  state = {
    count: 0,
    name: 'xiaofei'
  }

  add = () => {  
    this.setState({ count: 2 });
    console.log(this.state);
    
  }

  min = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 })
  }

  render() {
    return (
      <div>       
        <p>{this.state.count}</p>        
        <p>
          <button onClick={this.add}>+</button>
          <button onClick={this.min}>-</button>
        </p>
      </div>
    )
  }
}

export default SetStateDemo;
