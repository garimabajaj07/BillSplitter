
import User from './User.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState({
    Username: '',
    Expense: Number('')
  }
  )
  const [userList, setUserList] = useState([])
  const [total, setTotal] = useState('');
  const [splitAmt, setSplitAmt] = useState('')

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })

  }
  function handleSubmit(e) {
    e.preventDefault();
    if(input.Username===""){
      return
    }
    setUserList(
      [...userList, { id: Date.now(), userName: input.Username, userExpense: input.Expense }]
    )

    setInput({ Username: '', Expense: '' })

  }
  function totalBill() {
    // let sum = 0
    // userList.forEach((obj) => {
    //   sum += Number(obj.userExpense)
    // })
    const sum = userList.reduce((sum, obj) => {
      return sum + Number(obj.userExpense)
    }, 0)

    setTotal(sum);

    //split the bill
    const split = sum / userList.length 
    setSplitAmt(split)
  }
  return (
    <>
      <User
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
        userList={userList}
        totalBill={totalBill}
        total={total}
        splitAmt={splitAmt}
      />

    </>
  )
}

export default App
