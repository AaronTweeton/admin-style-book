import React from "@wordpress/element";

interface Props {
  columns: {
    key: string;
    name: string;
  }[];
  items: { [key: string]: unknown }[];
}

function composeColumnHeaders(columns) {
  return (
    <tr>
      {columns.map((column) => (
        <th key={column.key}>{column.name}</th>
      ))}
    </tr>
  );
}

function composeRows(columns, items) {
  return (
    <>
      {items.map((item, i: number) => (
        <tr key={i}>
          {columns.map((column) => (
            <td key={column.key}>{composeItem(item, column)}</td>
          ))}
        </tr>
      ))}
    </>
  );
}

function composeItem(item, column) {
  return <>{item[column.key]}</>;
}

export const WPListTable = (props: Props) => {
  const { columns, items } = props;

  return (
    <table className="wp-list-table widefat striped">
      <thead>{composeColumnHeaders(columns)}</thead>
      <tbody>{composeRows(columns, items)}</tbody>
    </table>
  );
};
