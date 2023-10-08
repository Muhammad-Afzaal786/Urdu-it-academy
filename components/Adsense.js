"use client";
import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    // Load the AdSense script asynchronously
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8409124849421096";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <></>; // Empty fragment as this component doesn't render anything
};

export default AdSense;
