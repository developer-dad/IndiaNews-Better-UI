import { useEffect, useRef } from "react";

const AdsterraBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        key: '85dac19641f64b9342ab7bd3d437a972',
        format: 'iframe',
        height: 200,
        width: 300,
        params: {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = "//www.highperformanceformat.com/85dac19641f64b9342ab7bd3d437a972/invoke.js";
    invokeScript.async = true;

    adRef.current.appendChild(configScript);
    adRef.current.appendChild(invokeScript);

    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={adRef}></div>;
};

export default AdsterraBanner;