import * as React from 'react';
import delay from './delay';
import Spinner from './Spinner';
import './style.css';

// UsersV1 don't use Suspense for fetching data
const UsersV1 = React.lazy(() => {
  return delay(import('./UsersV1'));
});
// // sersV2 use Suspense data fetching
// const UsersV2 = React.lazy(() => import('./UsersV2'));

export default function App() {
  return (
    <div>
      <React.Suspense fallback={<Spinner />}>
        <UsersV1 />
      </React.Suspense>
    </div>
  );
}
