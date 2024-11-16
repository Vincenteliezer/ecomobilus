"use client";
import { ConfigProvider } from "antd";
import React from "react";

export default function AntdProvider({ poppins, children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: poppins,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
