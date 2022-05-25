import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, reset } from '../actions'

const Counter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
          display: flex;
          justify-content:center;
          align-items:center
        }
        button {
          margin: 0 20px
        }
      `}</style>
      <button onClick={() => dispatch(increment())}>+1</button>
      <h1>
        <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  )
}

export default Counter
