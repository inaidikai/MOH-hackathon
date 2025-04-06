import { useEffect } from "react";

export default function ElevenLabsWidget() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return <elevenlabs-convai agent-id="TqdkGbWqqQMPUprTG0BR"></elevenlabs-convai>;
}
