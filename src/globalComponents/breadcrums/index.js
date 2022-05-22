import { Breadcrumb } from "antd";
import { t } from "i18next";
import getRoutes from "navigation/routes";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { flattenRoutes } from "utils";

const Breadcrums = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const allRoutes = flattenRoutes(getRoutes());

  const breadcrumbNameMap = allRoutes.reduce((acc, route) => {
    acc[route.path] = route.title;
    return acc;
  }, {});

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return breadcrumbNameMap[url] ? (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    ) : (
      ""
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">{t('home')}</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb className="mt-auto">{breadcrumbItems}</Breadcrumb>;
};

export default Breadcrums;
