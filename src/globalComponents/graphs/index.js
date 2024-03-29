import { ResponsiveLine } from "@nivo/line";
import Spreadsheet from "react-spreadsheet";
import data from "./data.json";
import "./styles.scss";

const Graph = () => {
  // const [spreedsheetData, setspreedsheetData] = useState([
  //   [{ value: "Vanilla" }, { value: "Chocolate" }],
  //   [{ value: "Strawberry" }, { value: "Cookies" }],
  // ]);

  const spreedsheetData = [
    [
      { value: "1" },
      { value: "John Doe" },
      { value: "2" },
      { value: "Pakistanss" },
    ],
    [
      { value: "2" },
      { value: "John Doe" },
      { value: "2" },
      { value: "Pakistan" },
    ],
  ];

  const headings = ["ID", "Name", "Age", "Country"];

  return (
    <>
      <div style={{ height: 300 }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <div className="spreedsheet-wrapper">
        <Spreadsheet
          data={spreedsheetData}
          columnLabels={headings}
          onChange={(data) => console.log({ data })}
          className="cell"
        />
      </div>
    </>
  );
};

export default Graph;
