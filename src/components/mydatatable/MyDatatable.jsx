import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "lastName", headerName: "name", width: 130 },
  {
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "anggur"},
  { id: 2, lastName: "apel" },
  { id: 3, lastName: "mangga" },
  { id: 4, lastName: "jambu" },
  { id: 5, lastName: "rambutan" },
  { id: 6, lastName: "manggis" },
  { id: 7, lastName: "pepaya" },
  { id: 8, lastName: "jeruk" },
  { id: 9, lastName: "kelengkeng" },
  { id: 10, lastName: "semangka" },
];

const actionColumn = [
  {
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
          </Link>
        </div>
      );
    },
  },
];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        AllData
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
