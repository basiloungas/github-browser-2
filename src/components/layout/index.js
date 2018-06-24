import React from 'react';

import ErrorBoundary from '../errorBoundary';

const Layout = (props) => {
  const {children} = props;

  return (
    <ErrorBoundary>
      <header>
        <p>Header</p>
      </header>

      <section>
        {children}
      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </ErrorBoundary>
  );
};

// Layout.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };

export default Layout;
