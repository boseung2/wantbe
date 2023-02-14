"use client";

import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <CommonLayout>
      <main>{children}</main>
    </CommonLayout>
  );
}

export default layout;
