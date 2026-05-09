import { useEffect } from "react";

const AdsterraSocialBar = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://pl29399347.profitablecpmratenetwork.com/80/d5/f8/80d5f8b5b7230a87c59246168bfe2320.js"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src =
      "https://pl29399347.profitablecpmratenetwork.com/80/d5/f8/80d5f8b5b7230a87c59246168bfe2320.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default AdsterraSocialBar;