export default function TableContent({ columns, rows }) {
    return (
        <div className="border">
            <table className="table custom-table">

                <thead>
                    <tr>
                        {columns.map((col, index) => (<th key={index} style={{ color: "#424242", fontWeight: "normal" }}>{col}</th>))}
                    </tr>
                </thead>

                <tbody >
                    {rows.map(([col1, col2, col3], index) => (
                        <tr key={index}>
                            <td style={{ color: "#666" }}>{col1}</td>
                            <td style={{ color: "#666" }}>{col2}</td>
                            <td style={{ color: "#666" }}>{col3}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    );
}



