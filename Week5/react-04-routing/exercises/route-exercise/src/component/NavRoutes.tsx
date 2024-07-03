import React from "react";
import { Route, Routes } from "react-router-dom";
import DeviceList from "./DeviceList";

export default function NavRoutes() {
  return (
    <div>
    <Routes>
      <Route path="/deviceList" element={<DeviceList />} />
      <Route path="/deviceList/:id" element={<DeviceList />} />
    </Routes>
    </div>
  );
}
