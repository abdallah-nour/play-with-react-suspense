import * as React from 'react';
import './style.css';
const UsersV1 = React.lazy(() => import('./UsersV1'));

export default function App() {
  return (
    <div>
      <UsersV1 />
    </div>
  );
}
