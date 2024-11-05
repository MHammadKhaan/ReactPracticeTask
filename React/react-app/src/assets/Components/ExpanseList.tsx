import React from "react";
interface Expanse {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expanses: Expanse[];
  onDelete: (id: number) => void;
}
function ExpanseList({ expanses, onDelete }: Props) {
  if (expanses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expanses.map((expanse) => (
          <tr key={expanse.id}>
            <td>{expanse.description}</td>
            <td>{expanse.amount}</td>
            <td>{expanse.category} </td>
            <td>
              <button
                onClick={() => onDelete(expanse.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{expanses.reduce((acc, expanse) => expanse.amount + acc, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpanseList;
