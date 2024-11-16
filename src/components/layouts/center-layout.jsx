import React from 'react'

export default function CenterLayout({children, className}) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}
