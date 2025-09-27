import { useEffect, useRef } from "react";

export default function HubspotEmbedForm() {
  const formCreated = useRef(false); // track if form already created

  useEffect(() => {
    const loadHubspotForm = () => {
      if (formCreated.current) return; // prevent duplicate
      if (!window.hbspt) return;

      window.hbspt.forms.create({
        region: "na2",
        portalId: "243954602",
        formId: "9aa6139a-6c34-4eef-9c98-c5d4c724bac8",
        target: "#hubspotForm",
      });

      formCreated.current = true; // mark as created
    };

    if (window.hbspt) {
      loadHubspotForm();
    } else {
      // check if script already loaded
      if (!document.querySelector("#hs-form-script")) {
        const script = document.createElement("script");
        script.id = "hs-form-script";
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.async = true;
        script.defer = true;
        script.onload = loadHubspotForm;
        document.body.appendChild(script);
      } else {
        // script exists but maybe not loaded yet
        const interval = setInterval(() => {
          if (window.hbspt) {
            loadHubspotForm();
            clearInterval(interval);
          }
        }, 300);
      }
    }
  }, []);

  return <div id="hubspotForm"></div>;
}
