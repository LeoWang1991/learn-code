import styles from './index.less';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [1,2,3,4,5]      
    };
    this.index = 5;
    this.containerRef = React.createRef();    
  }

  addItem = () => {
    const { items } = this.state;
    const newItems = [...items];
    this.index++;
    newItems.push(this.index);
    items.push(this.index);
    this.setState({ items: newItems })
  }

  minItem = () => {
    const { items } = this.state;
    if(!items.length) {
      return;
    }
    this.index--;
    items.pop()
    // this.setState({ items: items.slice(0, items.length - 1)});    
    this.setState({ items })
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {   
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevState, this.state);
   
    const container  = this.containerRef.current;    
    return container.scrollHeight - container.scrollTop;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('current state---', this.state);
    console.log('prevState', prevState);
    console.log(this.state == prevState);

    const container = this.containerRef.current;
    container.scrollTop = container.scrollHeight - snapshot;
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <p>
          <button onClick={this.addItem}>add item</button>
          <button onClick={this.minItem}>min item</button>
          <span>{this.props.name}</span>
        </p>
        <div className={styles.container} ref={this.containerRef} id='mytest'>
          {items.map(v => <div key={v} className={styles.item}>{v}</div>)}
        </div>        
      </>      
    )
  }
}

class App2 extends React.Component {
  state = {
    name: 'xiaofei'
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState(state => ({name: state.name + '1'}))}>改名</button>
        <App name={this.state.name} />        
      </div>
    )
  }
}

export default App2;