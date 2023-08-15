import { useLoaderData } from "react-router-dom";
import DataGrid from "react-data-grid";

const ExcelDataPage = () => {
  const excelData = useLoaderData();

  if (!excelData) return <h1>No Excel Data</h1>;

  const columns = Object.keys(excelData[0] || {}).map((key) => ({
    key: key,
    name: key,
    resizable: true,
    sortable: true,
  }));

  return (
    <DataGrid
      columns={columns}
      rows={excelData}
      minHeight={900}
      className={"rdg-light"}
    />
  );
};

export default ExcelDataPage;
