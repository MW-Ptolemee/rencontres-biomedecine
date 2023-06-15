import React, { useEffect } from "react";

function FormComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://public.message-business.com/Javascript/form/MB_Form_JsApp.js?v=UCo40toBXGgTD3m";
    document.body.appendChild(script);

    script.onload = () => {
      const MB_Form_JsApp = new window.MB_Form_JsApp();
      MB_Form_JsApp.ContainerId = "formContainer_UCo40toBXGgTD3m";
      MB_Form_JsApp.AccountId = "58393";
      MB_Form_JsApp.OperationId = "222";
      MB_Form_JsApp.OperationType = "form";
      MB_Form_JsApp.Init();
    };

    return () => {
      // Cleanup code
      document.body.removeChild(script);
    };
  }, []);

  return <div id="formContainer_UCo40toBXGgTD3m"></div>;
}

export default FormComponent;
