import { OrgChart } from "d3-org-chart";
import { useEffect, useLayoutEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import "./styles.scss";

const HierarchicalTree = () => {
  const d3Container = useRef(null);
  let chart = null;
  useEffect(() => {
    if (d3Container.current) {
      if (!chart) {
        chart = new OrgChart();
      }
      chart
        // .expandAll()
        .container(d3Container.current)

        .data(treeData)
        .nodeWidth((d) => 140)
        .nodeHeight((d) => 50)

        .nodeContent((d, i, arr, state) => {
          return ReactDOMServer.renderToStaticMarkup(
            <NodeCard props={d.data} />
          );
        });

      setTimeout(() => {
        chart.render().expandAll().fit();
      }, 300);
    }
  }, [d3Container.current]);
  return <div className="org-chart" ref={d3Container}></div>;
};

const NodeCard = ({ props }) => {
  return (
    <div
      className="node-card"
      style={{ backgroundColor: props.color, border: `5px solid ${props?.border}` || 0 }}
    >
      <h5> {props.positionName}</h5>
    </div>
  );
};

export default HierarchicalTree;

export const treeData = [
  {
    id: "1",
    parentId: "",
    positionName: "SCR",
    color: "#4c4e8d",
  },
  {
    id: "1-1",
    parentId: "1",
    positionName: "Adj",
    color: "#1283ec",
  },
  {
    id: "1-2",
    parentId: "1",
    positionName: "BSCR",
    color: "#1283ec",
  },
  {
    id: "1-3",
    parentId: "1",
    positionName: "OP",
    color: "#1283ec",
  },
  {
    id: "1-2-1",
    parentId: "1-2",
    positionName: "Market",
    color: "#1283ec",
  },
  {
    id: "1-2-2",
    parentId: "1-2",
    positionName: "Health",
    color: "#1283ec",
  },
  {
    id: "1-2-3",
    parentId: "1-2",
    positionName: "Default",
    color: "#1283ec",
  },
  {
    id: "1-2-4",
    parentId: "1-2",
    positionName: "Life",
    color: "#1283ec",
  },
  {
    id: "1-2-5",
    parentId: "1-2",
    positionName: "Non-Life",
    color: "#1283ec",
  },
  {
    id: "1-2-6",
    parentId: "1-2",
    positionName: "Intang",
    color: "#1283ec",
  },
  {
    id: "1-2-1-1",
    parentId: "1-2-1",
    positionName: "Interest Rate",
    border: "red",
    color: "#1283ec",
  },
  {
    id: "1-2-1-2",
    parentId: "1-2-1",
    positionName: "Equity",
    border: "red",
    color: "#1283ec",
  },
  {
    id: "1-2-1-3",
    parentId: "1-2-1",
    positionName: "Property",
    color: "#1283ec",
  },
  {
    id: "1-2-1-4",
    parentId: "1-2-1",
    positionName: "Spread",
    border: "red",
    color: "#1283ec",
  },
  {
    id: "1-2-1-5",
    parentId: "1-2-1",
    positionName: "Currency",
    color: "#1283ec",
  },
  {
    id: "1-2-1-6",
    parentId: "1-2-1",
    positionName: "Concentration",
    color: "#1283ec",
  },
  {
    id: "1-2-1-7",
    parentId: "1-2-1",
    positionName: "Equidty",
    border: "red",
    color: "#1283ec",
  },
  {
    id: "1-2-2-1",
    parentId: "1-2-2",
    positionName: "SLT Health",
    color: "#1283ec",
  },
  {
    id: "1-2-2-2",
    parentId: "1-2-2",
    positionName: "CAT",
    color: "#1283ec",
  },
  {
    id: "1-2-2-3",
    parentId: "1-2-2",
    positionName: "Non SLT Health",
    color: "#1283ec",
  },
  {
    id: "1-2-2-2-1",
    parentId: "1-2-2-1",
    positionName: "Mortality",
    color: "#1283ec",
  },
  {
    id: "1-2-2-2-2",
    parentId: "1-2-2-1",
    positionName: "Longetivity",
    color: "#1283ec",
  },
  {
    id: "1-2-2-2-3",
    parentId: "1-2-2-1",
    positionName: "Disability/Morbility",
    color: "#1283ec",
  },
  {
    id: "1-2-2-2-4",
    parentId: "1-2-2-1",
    positionName: "Lapse",
    border: "red",
    color: "#1283ec",
  },
  {
    id: "1-2-2-2-5",
    parentId: "1-2-2-1",
    positionName: "Expenses",
    color: "#1283ec",
  },
  {
    id: "1-2-2-2-6",
    parentId: "1-2-2-1",
    positionName: "Revision",
    color: "#1283ec",
  },
  {
    id: "1-2-2-3-1",
    parentId: "1-2-2-3",
    positionName: "Premium Reserve",
    color: "#1283ec",
  },
  {
    id: "1-2-2-3-2",
    parentId: "1-2-2-3",
    positionName: "Lapse",
    color: "#1283ec",
  },
  {
    id: "1-2-4-1",
    parentId: "1-2-4",
    positionName: "Mortality",
    color: "#1283ec",
  },
  {
    id: "1-2-4-2",
    parentId: "1-2-4",
    positionName: "Longevity",
    color: "#1283ec",
  },
  {
    id: "1-2-4-3",
    parentId: "1-2-4",
    positionName: "Disability/Morbility",
    color: "#1283ec",
  },
  {
    id: "1-2-4-4",
    parentId: "1-2-4",
    positionName: "Lapse",
    color: "#1283ec",
  },
  {
    id: "1-2-4-5",
    parentId: "1-2-4",
    positionName: "Expenses",
    color: "#1283ec",
  },
  {
    id: "1-2-4-6",
    parentId: "1-2-4",
    positionName: "Revision",
    color: "#1283ec",
  },
  {
    id: "1-2-4-7",
    parentId: "1-2-4",
    positionName: "CAT",
    color: "#1283ec",
  },
  {
    id: "1-2-5-1",
    parentId: "1-2-5",
    positionName: "Premium Reserve",
    color: "#1283ec",
  },
  {
    id: "1-2-5-2",
    parentId: "1-2-5",
    positionName: "Lapse",
    color: "#1283ec",
  },
  {
    id: "1-2-5-3",
    parentId: "1-2-5",
    positionName: "CAT",
    color: "#1283ec",
  },
];
