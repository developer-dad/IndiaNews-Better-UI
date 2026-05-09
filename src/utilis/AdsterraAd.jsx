import { useEffect, useRef } from "react";

const AdsterraBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        key: 'a7eadd51a7731ab1d7609915382b10ed',
        format: 'iframe',
        height: 60,
        width: 468,
        params: {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = "//www.highperformanceformat.com/a7eadd51a7731ab1d7609915382b10ed/invoke.js";
    invokeScript.async = true;

    adRef.current.appendChild(configScript);
    adRef.current.appendChild(invokeScript);

    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={adRef} className="w-full flex justify-center items-center"></div>;
};

export default AdsterraBanner;