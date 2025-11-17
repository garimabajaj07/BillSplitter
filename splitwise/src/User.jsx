export default function User({ handleSubmit, handleChange, input, userList, totalBill, total, splitAmt }) {
    return (
        <div className="container">
            <h1> Bill Splitter</h1>

            <form className="card" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name..."
                    onChange={handleChange}
                    value={input.Username}
                    name="Username"
                />
                <input
                    type="number"
                    placeholder="Your Expense..."
                    onChange={handleChange}
                    value={input.Expense}
                    name="Expense"
                />
                <button type="submit" className="btn">Add Expense</button>
            </form>

            <ul className="list">
                {userList.map((obj) => (
                    <li key={obj.id}>
                        <span className="name">{obj.userName}</span>
                        <span className="price">₹{obj.userExpense}</span>
                    </li>
                ))}
            </ul>

            <button className="btn calc-btn" onClick={totalBill}>Calculate Bill</button>

            <div className="expenseSummary">
                <p>Total Bill:₹{total}</p>
                <p>No. of People:{userList.length}</p>
                <p>Share per Person: ₹{splitAmt}</p>
            </div>
        </div>
    );
}
