import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { Badge } from "reactstrap";

export function startDateSearch(rowData, startDate) {
  const final_data = rowData.filter((company) => {
    if (startDate <= company.date) {
      return company;
    } else if (startDate === "") {
      return company;
    }
  });
  return final_data;
}

export default function HistoryTable(props) {
  const columns = [
    { headerName: "Date", field: "date", flex: 1 },
    { headerName: "Open", field: "open", flex: 1 },
    { headerName: "High", field: "high", flex: 1 },
    { headerName: "Low", field: "low", flex: 1 },
    { headerName: "Close", field: "close", flex: 1 },
    { headerName: "Volumes", field: "volume", flex: 1 },
  ];

  return (
    <div
      className="ag-theme-balham-dark"
      style={{ height: "300px", width: "100%" }}
    >
      <Badge color="success">{props.filterData.length}</Badge>
      Results
      <AgGridReact
        columnDefs={columns}
        rowData={props.filterData}
        pagination={true}
      />
    </div>
  );
}
