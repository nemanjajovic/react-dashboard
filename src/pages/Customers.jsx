import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Delete", "Edit"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, id) => (
            <ColumnDirective key={id} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
