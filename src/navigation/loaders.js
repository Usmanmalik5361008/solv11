import * as XLSX from "xlsx";

export const excelDataLoader = async (filePath) => {
  try {
    const fullPath = `/excelSheets/${filePath}`; // Assuming files are located in public/excelSheets directory

    const response = await fetch(fullPath);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        try {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          resolve(jsonData); // Resolve the promise with jsonData
        } catch (err) {
          reject(err); // Reject the promise if any error occurs
        }
      };

      reader.onerror = function (error) {
        reject(new Error("Error reading the Excel file."));
      };

      reader.readAsBinaryString(blob);
    });
  } catch (error) {
    console.error("Error loading excel file:", error);
    return [];
  }
};
