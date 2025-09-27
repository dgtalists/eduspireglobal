import { useEffect, useRef, useState } from "react";

export default function HubspotEmbedForm() {
  const formContainerId = "hubspotForm";
  const formCreated = useRef(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const loadHubspotForm = () => {
      if (!window.hbspt) return;

      // clear container
      const formContainer = document.getElementById(formContainerId);
      if (formContainer) formContainer.innerHTML = "";

      window.hbspt.forms.create({
        region: "na2",
        portalId: "243520853",
        formId: "7aaf61c4-ef5b-48be-858f-7ba12b1ede12",
        target: `#${formContainerId}`,
        onFormSubmitted: () => {
          // Show thank you message
          setShowThankYou(true);

          // Reload form after 3 seconds
          setTimeout(() => {
            setShowThankYou(false);
            loadHubspotForm();
          }, 3000);
        },
      });

      formCreated.current = true;
    };

    if (window.hbspt) {
      loadHubspotForm();
    } else {
      if (!document.querySelector("#hs-form-script")) {
        const script = document.createElement("script");
        script.id = "hs-form-script";
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.async = true;
        script.defer = true;
        script.onload = loadHubspotForm;
        document.body.appendChild(script);
      } else {
        const interval = setInterval(() => {
          if (window.hbspt) {
            loadHubspotForm();
            clearInterval(interval);
          }
        }, 300);
      }
    }
  }, []);

  return (
    <div>
      {showThankYou ? (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "#e6f7e6",
            color: "#2a7a2a",
            borderRadius: "8px",
          }}
        >
          ✅ Thank you! Your form has been submitted.
        </div>
      ) : (
        <div id={formContainerId}></div>
      )}
    </div>
  );
}
