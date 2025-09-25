"use client"; // important if you’re using the App Router

import { useEffect } from "react";

export default function HubspotEmbedForm() {
  useEffect(() => {
    // dynamically load HubSpot script on the client only
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/243954602.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // optional cleanup if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na2"
      data-form-id="9aa6139a-6c34-4eef-9c98-c5d4c724bac8"
      data-portal-id="243954602"
    />
  );
}
