import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DeviceList() {
  const [device, setdeviceDetails] = useState<any[]>([]);
  const { id } = useParams();
  async function getData() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const data = await response.json();
      setdeviceDetails(data);
    } catch (e) {
      console.log("error", e);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <select>
        {device.map((item) => (
          <option key={id}> <div> <Link to ={"/deviceList/"+item.id}> {item.title}</Link></div>)</option>
        ))}
      </select>
      <div>You have selected blog id:{id}</div>
    </div>
  );
}
