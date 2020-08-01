import React from 'react';
import { AuthProvider } from 'providers/Auth';
import { environment } from 'constants/environment';
import { Routes } from 'routes';

export const App = () => {
  return (
    <AuthProvider
      clientId={environment.authClientId}
      audience={environment.authAudience}
      domain={environment.authDomain}
      scope="openid profile email"
    >
      <Routes />
    </AuthProvider>
  );
};
