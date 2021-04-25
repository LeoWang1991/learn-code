/*
 * @Author: wangjx
 * @Date: 2021-04-22 19:22:42
 * @Description: useState使用和实现demo
 */
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);


  return <div>
    <p>{count}</p>
    <p><button onClick={() => setCount(count + 1)}>add</button></p>
  </div>
}

export default App;