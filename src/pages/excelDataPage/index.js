import { useMemo } from "react";
import DataGrid from "react-data-grid";
import { useLoaderData } from "react-router-dom";
const ExcelDataPage = () => {
  const excelData = useLoaderData();

  const columns = useMemo(
    () =>
      Object.keys(excelData[0] || {}).map((key) => ({
        key: key,
        name: key,
        resizable: true,
        sortable: true,
      })),
    [excelData]
  );

  if (!excelData || excelData.length === 0) return <h1>No Excel Data</h1>;

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
