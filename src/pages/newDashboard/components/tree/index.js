import { OrgChart } from "d3-org-chart";
import { useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import "./styles.scss";

const HierarchicalTree = ({ scrHierarchyFormatted }) => {
  const d3Container = useRef(null);
  let chart = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      if (!chart.current) {
        chart.current = new OrgChart();
      }
      chart.current
        .container(d3Container.current)

        .data(scrHierarchyFormatted)
        .nodeWidth((d) => 140)
        .nodeHeight((d) => 50)

        .nodeContent((d) => {
          return ReactDOMServer.renderToStaticMarkup(
            <NodeCard props={d.data} />
          );
        });

      setTimeout(() => {
        chart.current.render().expandAll().fit();
      }, 300);
    }
  }, [scrHierarchyFormatted]);

  return <div className="org-chart" ref={d3Container}></div>;
};

const NodeCard = ({ props }) => {
  return (
    <div
      className="node-card"
      style={{
        backgroundColor: props.color,
        border: `5px solid ${props?.border}` || 0,
      }}
    >
      <h5> {props.positionName}</h5>
      <p>{props.value}</p>
    </div>
  );
};

export default HierarchicalTree;
