
const flattenRoutes = (routes) => {
  return routes.reduce((acc, route) => {
    if (route.children) {
      // append parent path to children
      const children = route.children.map((child) => {
        let path = route.path + "/" + child.path;
        path = path.replace(/\/\//g, "/");
        path = path.replace("/undefined", "/");
        return {
          ...child,
          path,
        };
      });
      return [...acc, ...flattenRoutes(children)];
    }
    return [...acc, route];
  }, []);
};

export { flattenRoutes };
