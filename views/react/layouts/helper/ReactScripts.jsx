import React from 'react';

export default class ReactScripts extends React.Component {
  getScriptForInitialData () {
    var initialDataJson = JSON.stringify(this.props.initialData);
    return `
      window.app = window.app || {};
      window.app.initialData = ${initialDataJson};
    `;
  }

  render () {
    var serverSideDataBinding = {
      __html: this.getScriptForInitialData()
    };

    return (
      <div className="react-script">
        <script src="lib/react/react.js"></script>
        <script dangerouslySetInnerHTML={serverSideDataBinding} />
      </div>
    );
  }
}
