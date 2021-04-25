/*
 * @Author: wangjx
 * @Date: 2021-04-23 16:18:15
 * @Description: 
 */
import { connect } from 'react-redux';
import { incr, decr } from './redux/action';

const Counter = (props) => {
  console.log(props);
  const incr = () => {    
    // props.dispatch({ type: 'INCR' });
    props.incr();
  }

  const decr = () => {
    // props.dispatch({ type: 'DECR' });
    props.decr();
  }
  return (
    <div>
      <p>
        <button onClick={incr} style={{marginRight:12}}>加1</button>
        <button onClick={decr}>减1</button>
      </p>
      <p>
        {props.num}
      </p>
    </div>
  )
}

const mapStateToProps = state => ({ num: state.count, hello: 'kkkk' });

export default connect(mapStateToProps, { incr, decr })(Counter);