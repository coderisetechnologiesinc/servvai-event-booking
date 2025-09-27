import { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/16/solid";
const ValidationScreen = ({ message, troubleshoot }) => {
  const [intercomLaded, setIntercomLoaded] = useState(false);
  useEffect(() => {
    handleIntercomClick();
  }, []);
  const handleIntercomClick = () => {
    // Avoid injecting multiple times
    if (window.IntercomInjected) return;
    window.IntercomInjected = true;

    // Set Intercom settings
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "peztdh9y",
      custom_launcher_selector: "#servv_live_chat",
    };

    // Inject main Intercom loader script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      (function () { 
        var w = window; 
        var ic = w.Intercom; 
        if (typeof ic === "function") { 
          ic('reattach_activator'); 
          ic('update', w.intercomSettings); 
        } else { 
          var d = document; 
          var i = function () { i.c(arguments); }; 
          i.q = []; 
          i.c = function (args) { i.q.push(args); }; 
          w.Intercom = i; 
          var l = function () { 
            var s = d.createElement('script'); 
            s.type = 'text/javascript'; 
            s.async = true; 
            s.src = 'https://widget.intercom.io/widget/peztdh9y'; 
            var x = d.getElementsByTagName('script')[0]; 
            x.parentNode.insertBefore(s, x); 
          }; 
          if (document.readyState === 'complete') { 
            l(); 
          } else if (w.attachEvent) { 
            w.attachEvent('onload', l); 
          } else { 
            w.addEventListener('load', l, false); 
          } 
        } 
      })();
    `;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Intercom) {
        window.Intercom("boot");
      }
    };
    setIntercomLoaded(true);
  };
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-[#ECE4F6] border-brand-800 gap-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-gray-900 text-display-sm">Installation & Setup</h2>
      </div>
      <p className="text-2xl font-regular text-gray-900 px-[10%] py-[2%]">
        {message}
      </p>
      {troubleshoot && (
        <div className="pb-[2%]">
          <ol>
            <li className="text-xl font-regular text-gray-900">
              Review our{" "}
              <a
                className="text-brand-500 hover:text-brand-400"
                href="https://support.servv.ai/getting-started/troubleshooting/faq/"
              >
                Troubleshooting Guide
              </a>{" "}
              to resolve common setup issues.
            </li>
            <li className="text-xl font-regular text-gray-900">
              Watch the Servv AI{" "}
              <a
                className="text-brand-500 hover:text-brand-400"
                href="https://demo.servv.ai/"
              >
                Demo
              </a>{" "}
              to see how the platform works.
            </li>
            <li className="text-xl font-regular text-gray-900">
              Explore our Servv AI{" "}
              <a
                className="text-brand-500 hover:text-brand-400"
                href="https://www.youtube.com/channel/UCiUGsW6_-iTqUw-tebA9CEQ"
              >
                Video Library
              </a>{" "}
              to learn more.
            </li>
          </ol>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-gray-900 text-display-sm">Need help?</h2>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <a
          href="mailto:support@servv.ai"
          className="rounded-[0.625rem] border no-underline border-gray-300 bg-white shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]"
        >
          <EnvelopeIcon className="w-[20px] fill-gray-700" />
          <span className="text-sm text-gray-700 font-semibold">Email Us</span>
        </a>

        {intercomLaded && (
          <button
            id="servv_live_chat"
            className="rounded-[0.625rem] border border-white bg-brand-600 shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]"
            // onClick={handleIntercomClick}
          >
            <ChatBubbleLeftRightIcon className="w-[20px] fill-white" />
            <span className="text-sm text-white font-semibold">Live Chat</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ValidationScreen;
