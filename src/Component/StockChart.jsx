import { AgGridReact } from "ag-grid-react";
import { Badge } from "reactstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { useNavigate } from "react-router-dom";

export default function StockTable(props) {
  const navigate = useNavigate();
  const columns = [
    {
      headerName: "Symbol",
      field: "symbol",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Industry",
      field: "industry",
      sortable: true,
      filter: true,
      flex: 1,
    },
  ];

  return (
    <div
      className="ag-theme-balham-dark"
      style={{ height: "400px", width: "100%" }}
    >
      <Badge color="success">{props.data.length}</Badge>
      Results
      <AgGridReact
        columnDefs={columns}
        rowData={props.data}
        paginationPageSize={15}
        onRowClicked={(x) => {
          navigate(`/quotes/${x.data.symbol}`, {
            state: { selectedSymbol: x.data.symbol },
          });
        }}
        pagination={true}
      />
    </div>
  );
}
