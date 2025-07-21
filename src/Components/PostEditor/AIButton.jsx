import { SparklesIcon } from "@heroicons/react/16/solid";
import axios from "axios";
const AIButton = ({ onClick, children = "Use AI" }) => {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center
        px-6 py-2
        rounded-lg 
        text-md             
        text-brand-700
        bg-transparent           
        relative                 
        font-semibold
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        overflow-hidden          
      "
    >
      <div
        className="
          absolute inset-0     
          rounded-lg           
          -z-10                
        "
        style={{
          background:
            "linear-gradient(90deg, #6ee7b7, #8b5cf6, #ec4899, #fbbf24)",

          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
      ></div>

      <SparklesIcon className="w-4 h-4 mr-3" aria-hidden="true" />
      {children}
    </button>
  );
};
export default AIButton;
