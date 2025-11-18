export default function User({ handleSubmit, handleChange, input }) {
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
                <input type="number"
                    placeholder="Enter your share percentage..."
                    onChange={handleChange}
                    value={input.SharePercent}
                    name="SharePercent" />
                <button type="submit" className="btn">Add Expense</button>
            </form>
        </div>
    );
}
