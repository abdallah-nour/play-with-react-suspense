import * as React from 'react';

export default function Spinner() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>Loading...</h1>
      <span className="loader" />
    </div>
  );
}
