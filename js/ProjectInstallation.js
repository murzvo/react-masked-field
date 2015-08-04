'use strict';

import React from 'react';

export default class ProjectInstallation extends React.Component {
  render() {
    return (
      <div>
        <h4>Installation</h4>
        <p>A standalone build is also available in the dist folder.</p>
        <pre><code>npm install react-masked-field</code></pre>
      </div>
    );
  }
}
