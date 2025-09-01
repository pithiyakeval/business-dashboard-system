export default function Table({ columns, data, actions }) {
  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr>
          {columns.map((col) => <th key={col} className="border px-4 py-2">{col}</th>)}
          {actions && <th className="border px-4 py-2">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row._id}>
            {columns.map((col) => <td key={col} className="border px-4 py-2">{row[col.toLowerCase()]}</td>)}
            {actions && <td className="border px-4 py-2 flex gap-2">{actions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
