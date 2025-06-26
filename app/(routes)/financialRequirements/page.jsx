"use client";

import React, { useState } from "react";
import NewRequirement from "../../components/financialRequirements/NewRequirement";
import toast, { Toaster } from "react-hot-toast";

import MissionStatus from "@/app/components/financialRequirements/MissionStatus";
export default function page() {
  return (
    <div className=" py-2 h-full dirLtr ">
      <MissionStatus />

      {/* <NewRequirement /> */}
      {/* // <Toaster position="top-center" /> */}
    </div>
  );
}
