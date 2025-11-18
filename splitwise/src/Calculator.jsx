export default function Calculator({ userList, totalBill, total, splitAmt, showSummary }) {
    return (
        <>
            <button className="btn calc-btn" onClick={totalBill}>Calculate Bill</button>

            {showSummary && (
                <div className="expenseSummary">
                    <p>Total Bill:₹{total}</p>
                    <p>No. of People:{userList.length}</p>
                    <h4>Share per person:</h4>
                    {splitAmt.map((obj) => {
                        return (<p>
                            {obj.userName} pays: {obj.finalAmount}
                        </p>
                        )
                    })}
                </div>
            )
            }
        </>
    )
}