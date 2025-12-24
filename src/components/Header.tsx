import React, { FC } from 'react';

// Define the types for the component's props
export type AppHeaderProps = {
  /** The title to display in the header */
  title: string;
};

/**
 * A functional React component for the application header.
 * Uses the FC (Functional Component) type from React.
 */
const AppHeader: FC<AppHeaderProps> = ({title}) => {
  return (
    <header style={{ padding: '1rem', borderBottom: '2px solid #ccc' }}>
      <div>
        <h1>{title}</h1>
      </div>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default AppHeader;