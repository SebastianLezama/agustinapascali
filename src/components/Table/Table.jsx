import React from "react";
import "./Table.css";

const Table = ({ data = null }) => {
  const columns = [
    { field: "date", header: "Fecha" },
    { field: "alegria", header: "Alegria" },
    { field: "enojo", header: "Enojo" },
    { field: "tristeza", header: "Tristeza" },
    { field: "verguenza", header: "Verguenza" },
    { field: "culpa", header: "Culpa" },
    { field: "frustracion", header: "Frustracion" },
    { field: "ansiedad", header: "Ansiedad" },
    { field: "sorpresa", header: "Sorpresa" },
  ];
  return (
    <table>
      <thead className="header">
        <tr>
          {columns.map((header) => (
            <th key={header.field}>{header.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="body">
        {data &&
          data.map((row) => (
            <tr key={row.date}>
              {columns.map((col) => (
                <td key={col.field}>{row[col.field]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
