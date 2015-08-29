import React from 'react/addons';

export default function reactLoader(file, data) {
  var ComponentClass = require(`../views/react/pages/${file}`);
  var component = React.createElement(ComponentClass, { initialData: data });
  return React.renderToString(component);
}
