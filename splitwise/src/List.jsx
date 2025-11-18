export default function List({ userList }) {
    return (

        <ul className="list">
            {userList.map((obj) => (
                <li key={obj.id}>
                    <span className="name">{obj.userName}</span>
                    <span className="price">₹{obj.userExpense}</span>
                </li>
            ))}
        </ul>

    )
}