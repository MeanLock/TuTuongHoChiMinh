import { useEffect } from "react";

const AIPage = () => {
  useEffect(() => {
    // Load script của jotform
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Sau khi script load xong thì gọi init
      // @ts-ignore vì thư viện global
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-01998a96c14e75a9b528746aa02cec6fb365']",
          "https://www.jotform.com"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center z-0">
      <iframe
        id="JotFormIFrame-01998a96c14e75a9b528746aa02cec6fb365"
        title="Trợ Lý AI Tư Tưởng Hồ Chí Minh: Historical Research Assistant"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://agent.jotform.com/01998a96c14e75a9b528746aa02cec6fb365?embedMode=iframe&background=1&shadow=1"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default AIPage;
