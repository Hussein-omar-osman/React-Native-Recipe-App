import React, { useState } from 'react';
import Login from '../../componets/authComp/Login';
import Signup from '../../componets/authComp/Signup';

export default function AuthPage() {
  const [page, setPage] = useState('login');

  if (page === 'register') {
    return <Signup />;
  }
  return <Login />;
}
