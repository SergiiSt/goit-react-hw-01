import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ transactions }) {
    return (
        <div className={css.container}>
        <table className={css.table}>
  <thead className={css.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id} className="tableRow">
                    <td className={css.tableData}>{transaction.type}</td>
                    <td className={css.tableData}>{transaction.amount}</td>
                    <td className={css.tableData}>{transaction.currency}</td>
                </tr>))}
   
  </tbody>
</table>
        </div>

    )
}