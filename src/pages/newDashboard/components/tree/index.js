import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "./styles.scss";

const HierarchicalTree = () => {
  // recursive function to generate tree
  const generateTree = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode
            key={item.id}
            label={
              <StyledTreeNode
                type="node"
                label={item.name}
                value={item.value}
              />
            }
          >
            {generateTree(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          key={item.id}
          label={
            <StyledTreeNode type="node" label={item.name} value={item.value} />
          }
        />
      );
    });
  };

  return (
    <Tree
      lineWidth={"2px"}
      lineColor={"#1283EC"}
      lineBorderRadius={"10px"}
      label={
        <StyledTreeNode
          type="root"
          label={treeData.name}
          value={treeData.value}
        />
      }
    >
      {generateTree(treeData.children)}
    </Tree>
  );
};

const StyledTreeNode = ({ type = "node", label, value = "" }) => {
  return (
    <div className={`${type} tree-item`}>
      <h5>{label}</h5>
      <p>{value}</p>
    </div>
  );
};

const treeData = {
  id: "1",
  name: "Root",
  value: "3000",
  children: [
    {
      id: "1-1",
      name: "Child 1",
      value: "1000",
      children: [
        {
          id: "1-1-1",
          name: "Grandchild 1",
          value: "500",

          children: [
            {
              id: "1-1-1-1",
              name: "Great Grandchild 1",
              value: "100",
            },
          ],
        },
        {
          id: "1-1-2",
          name: "Grandchild 2",
          value: "500",
        },
      ],
    },
    {
      id: "1-2",
      name: "Child 2",
      value: "1000",
    },
  ],
};

export default HierarchicalTree;
