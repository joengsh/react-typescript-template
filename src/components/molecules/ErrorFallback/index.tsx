import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ErrorFallback({ error, resetErrorBoundary }: any) {
  const location = useLocation();
  const navigate = useNavigate();
  let key: keyof typeof location;

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      {Object.entries(location).map(([key, value]) => {
        return (
          <p>
            {key}: {value}
          </p>
        );
      })}
      <button
        onClick={() => {
          resetErrorBoundary();
          navigate(location.pathname, { replace: true });
        }}
      >
        Try again
      </button>
      <button
        onClick={() => {
          resetErrorBoundary();
          navigate('/', { replace: true });
        }}
      >
        Back home
      </button>
    </div>
  );
}

export default ErrorFallback;
