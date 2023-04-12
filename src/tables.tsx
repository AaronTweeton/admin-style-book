import React from "@wordpress/element";
import { WPListTable } from "./components/wp-list-table";

export const Tables = () => {
  const columns = [
    { key: "foo", name: "Foo" },
    { key: "bar", name: "Bar" },
  ];

  const items = [
    { foo: "Wuz", bar: "What is" },
    { foo: "Up", bar: "Yup" },
  ];
  return (
    <>
      <WPListTable columns={columns} items={items} />
    </>
  );
};
