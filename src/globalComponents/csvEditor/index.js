import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { message, Tooltip } from "antd";
import { CLOSE_ICON, DOWNLOAD_ICON, TICK_ICON } from "assets";
import PillButton from "globalComponents/pillButton";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCSVReader, usePapaParse } from "react-papaparse";
import "./styles.scss";

const CsvEditor = () => {
  const { t } = useTranslation();
  const { jsonToCSV } = usePapaParse();
  const { CSVReader } = useCSVReader();
  const inputFieldRef = useRef(null);
  const [tableData, setTableData] = useState({
    header: [],
    data: [],
  });

  const [cellToEdit, setCellToEdit] = useState({
    rowIndex: -1,
    colIndex: -1,
    value: "",
  });

  const handleCellEdit = (rowIndex, colIndex, value) => {
    setCellToEdit({
      rowIndex,
      colIndex,
      value,
    });
  };

  const isCellDisabled = (rowIndex, colIndex) => {
    if (cellToEdit.rowIndex === rowIndex && cellToEdit.colIndex === colIndex) {
      return false;
    }
    return true;
  };

  const handleSaveCell = () => {
    const { rowIndex, colIndex } = cellToEdit;
    // get value from input field ref
    const inputFieldValue = inputFieldRef.current.value;

    tableData.data[rowIndex][colIndex] = inputFieldValue;
    setCellToEdit({
      rowIndex: -1,
      colIndex: -1,
    });
    message.success("Cell updated successfully");
  };

  const handleCancel = () => {
    inputFieldRef.current = null;
    setCellToEdit({
      rowIndex: -1,
      colIndex: -1,
    });
  };

  const handleRowDelete = (rowIndex) => {
    const newData = [...tableData.data];
    newData.splice(rowIndex, 1);
    setTableData({
      ...tableData,
      data: [...newData],
    });

    message.success("Row deleted successfully");
  };

  const handleAddRow = () => {
    setTableData({
      ...tableData,
      data: [
        ...tableData.data,
        [
          // empty row
          ...Array(tableData.header.length).fill(""),
        ],
      ],
    });
    message.success("Row added successfully");
  };

  const generateCsv = () => {
    // check if any operation is in progress
    if (cellToEdit.rowIndex !== -1 || cellToEdit.colIndex !== -1) {
      message.error("Please save or cancel the current operation");
      return;
    }

    const dataWithHeader = [tableData.header, ...tableData.data];
    const csv = jsonToCSV(dataWithHeader);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="csv-editor">
      {tableData.data.length === 0 ? (
        <CSVReader
          onUploadAccepted={(results) => {
            setTableData({
              header: results.data[0],
              data: (() => {
                // tell user if there is no data
                if (results.data.length === 1) {
                  message.error("No data found");
                }
                // check for errors
                if (results.errors.length > 0) {
                  message.error("Error in data");
                }
                results.data = results.data.slice(1);
                results.data.pop();
                return results.data;
              })(),
            });
          }}
        >
          {({
            getRootProps,
            acceptedFile,
            ProgressBar,
            getRemoveFileProps,
          }) => (
            <div>
              <button
                type="button"
                className="csv-upload-btn"
                {...getRootProps()}
              >
                Browse Csv
                <UploadOutlined style={{ fontSize: 20, color: "#19202e" }} />
              </button>
              <ProgressBar />
            </div>
          )}
        </CSVReader>
      ) : (
        <>
          <div className="csv-table-top">
            <PillButton
              title={t("generateCsv")}
              prependIcon={DOWNLOAD_ICON}
              onClick={generateCsv}
            />
          </div>

          <div className="custom-table-style-2-wrapper">
            <table>
              <thead>
                <tr>
                  <th key={"actions"}>{t("actions")}</th>
                  {tableData.header.map((title, index) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.data.map((row, rowIndex) => (
                  <tr key={row.toString()}>
                    <>
                      <td key={"delete"}>
                        <div style={{ display: "flex", gap: 5 }}>
                          <Icon
                            tooltipMessage="Delete Row"
                            type="delete"
                            onClick={() => handleRowDelete(rowIndex)}
                          />
                          {rowIndex === tableData.data.length - 1 && (
                            <Icon
                              tooltipMessage="Add Row"
                              type="add"
                              onClick={handleAddRow}
                            />
                          )}
                        </div>
                      </td>
                      {row.map((item, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            defaultValue={item}
                            disabled={isCellDisabled(rowIndex, colIndex)}
                            ref={(ref) => {
                              // only set input field ref if input is not disabled
                              if (isCellDisabled(rowIndex, colIndex)) {
                                return;
                              }
                              inputFieldRef.current = ref;
                            }}
                            // onChange={handleCellChange}
                          />
                          <div className="cell-actions">
                            {cellToEdit.rowIndex !== rowIndex &&
                              cellToEdit.colIndex !== colIndex && (
                                <Icon
                                  tooltipMessage="Edit Cell"
                                  type="edit"
                                  onClick={() =>
                                    handleCellEdit(rowIndex, colIndex, item)
                                  }
                                />
                              )}
                            {cellToEdit.rowIndex === rowIndex &&
                              cellToEdit.colIndex === colIndex && (
                                <>
                                  <Icon type="cross" onClick={handleCancel} />
                                  <Icon type="save" onClick={handleSaveCell} />
                                </>
                              )}
                          </div>
                        </td>
                      ))}
                    </>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

const Icon = ({ type = "", onClick, tooltipMessage = "" }) => {
  switch (type) {
    case "edit":
      return (
        <Tooltip title={tooltipMessage}>
          <span className="edit-icon" onClick={onClick}>
            <EditOutlined />
          </span>
        </Tooltip>
      );
    case "save":
      return (
        <Tooltip title={tooltipMessage}>
          <span className="cross-icon" onClick={onClick}>
            <img src={TICK_ICON} />
          </span>
        </Tooltip>
      );

    case "cross":
      return (
        <Tooltip title={tooltipMessage}>
          <span className="save-icon" onClick={onClick}>
            <img src={CLOSE_ICON} />
          </span>
        </Tooltip>
      );
    case "delete":
      return (
        <Tooltip title={tooltipMessage}>
          <span className="delete-icon" onClick={onClick}>
            <DeleteOutlined />
          </span>
        </Tooltip>
      );
    case "add":
      return (
        <Tooltip title={tooltipMessage}>
          <span className="add-icon" onClick={onClick}>
            <PlusOutlined />
          </span>
        </Tooltip>
      );

    default:
      break;
  }
};

export default CsvEditor;
