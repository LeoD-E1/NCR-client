import React from "react";
import { useRoute, useLocation } from "wouter";

const Client = () => {
  const [location, setLocation] = useLocation();
  console.log(location);
  return <div>page of {location}</div>;
};

export default Client;
