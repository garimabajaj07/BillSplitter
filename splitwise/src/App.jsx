
import User from './User.jsx'
import List from './List.jsx'
import Calculator from './Calculator.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState({
    Username: '',
    Expense: '',
    SharePercent: ''
  }
  )
  const [userList, setUserList] = useState([])
  const [total, setTotal] = useState('');
  const [splitAmt, setSplitAmt] = useState('')
  const [showSummary, setShowSummary] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })

  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.Username || !input.Expense || !input.SharePercent) {
      return
    }
    setUserList(
      [...userList, { id: Date.now(), userName: input.Username, userExpense: input.Expense, userShare: input.SharePercent }]
    )

    setInput({ Username: '', Expense: '', SharePercent: '' })

  }
  function totalBill() {
    if (userList.length === 0) {
      return
    }
    let sum = 0
    userList.forEach((obj) => {
      sum += Number(obj.userExpense)
    })
    // const sum = userList.reduce((sum, obj) => {
    //   return sum + Number(obj.userExpense)
    // }, 0)

    setTotal(sum);

    //split the bill
    setSplitAmt(userList.map((obj) => {
      const share = Number(obj.userShare / 100)
      return { ...obj, finalAmount: sum * share }
    }))

    //show summary
    setShowSummary(true)

  }
  return (
    <>
      <User
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
      <List
        userList={userList}
      />
      <Calculator
        splitAmt={splitAmt}
        total={total}
        totalBill={totalBill}
        userList={userList}
        showSummary={showSummary}
      />

    </>
  )
}

export default App
