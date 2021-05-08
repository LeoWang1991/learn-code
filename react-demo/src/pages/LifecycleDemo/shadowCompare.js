/*
 * @Author: wangjx
 * @Date: 2021-05-07 22:31:22
 * @Description: 组件componentShouldUpdate 浅比较
 */

class Info extends React.PureComponent {  
  render() {
    console.log('Info render');
    return (
      <div>
        <p>name: {this.props.name}</p>
        <p>age: {this.props.age}</p>
        <p>
          {this.props.score.map(v => <span key={v}>{v},</span>)}
        </p>
      </div>
    )
  }   
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'xiaofei',
      age: '',
      score: [1,2,3]
    }
  }

  addScore = () => {
    const { score } = this.state;
    const score2 = [...score];
    // score2.push(score[score.length-1] + 10);
    console.log('addScore', score2);
    this.setState({ score: score2 })
  }

  changeName = () => {
    console.log(this.state.name);
    this.setState({ name: `${this.state.name}`})
  }

  render() {
    const { name, age, score } = this.state;
    return (
      <div>
        <button onClick={this.addScore}>add score</button>
        <button onClick={this.changeName}>change Name</button>
        <Info name={name} age={age} score={score} />
      </div>
    )
  }
}

export default App;
