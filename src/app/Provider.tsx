"use client"

import React from 'react'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
 
export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      <Provider store={store}>
      {children}
      </Provider>

    </div>
  )
} 

