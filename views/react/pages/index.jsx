import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import HelloMessage from '../components/HelloMessage';

export default class IndexPage extends React.Component {
  render () {
    var initialData = this.props.initialData;

    return (
      <DefaultLayout initialData={initialData} bundledScript="index.js">
        <HelloMessage name={initialData.name} />
      </DefaultLayout>
    );
  }
}

if (typeof window !== 'undefined') {
  React.render(<IndexPage initialData={app.initialData} />, document);
}
