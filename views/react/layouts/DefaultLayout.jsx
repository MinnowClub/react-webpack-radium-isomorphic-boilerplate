import React from 'react';
import ReactScripts from './helper/ReactScripts';

export default class DefaultLayout extends React.Component {
  render () {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>{this.props.children}</body>

        <ReactScripts initialData={this.props.initialData} />
        <script src={this.props.bundledScript}></script>
      </html>
    );
  }
}
