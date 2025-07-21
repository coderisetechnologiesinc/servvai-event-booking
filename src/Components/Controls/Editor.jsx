import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";
import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";
import Clipboard from "quill/modules/clipboard";
const Editor = forwardRef(
  (
    {
      readOnly,
      defaultValue,
      onTextChange,
      onSelectionChange,
      onChange,
      disabled,
    },
    ref
  ) => {
    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);
    const getDecoratedTplText = useCallback((text) => {
      if (!text) return "";
      const replaceRegex = new RegExp(/\n\s*|\n+/gm);
      return text
        .replace(replaceRegex, "")
        .replace(/<b>/gi, "<strong>")
        .replace(/<\/b>/gi, "</strong>")
        .replace(/<p>\s*<\/p>/gi, "<p> </p>")
        .replace(/>\s+</g, "><")
        .replace(/<p>\s+/g, "<p>")
        .replace(/\s+<\/p>/g, "</p>")
        .replace(/(<br\s*\/?>\s*){2}/gi, "</p><p></p><p>");
    }, []);
    const containerRef = useRef(null);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);
    const onChangeRef = useRef(onChange);
    const [initailValue, setInitialValue] = useState(
      getDecoratedTplText(defaultValue) || ""
    );

    Quill.register({
      "modules/toolbar": Toolbar,
      "modules/clipboard": Clipboard,
      "themes/snow": Snow,
      "formats/bold": Bold,
      "formats/italic": Italic,
      "formats/header": Header,
    });

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onChangeRef.current = onChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      if (ref.current?.clipboard) {
        ref.current?.clipboard.dangerouslyPasteHTML(defaultValue, "api");
      }
    }, [defaultValue]);

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      );

      const options = {
        debug: "error",
        theme: "snow",
      };

      const quill = new Quill(editorContainer, options);

      ref.current = quill;

      if (defaultValue) {
        quill.clipboard.dangerouslyPasteHTML(defaultValue, "api");
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
        const newText = getDecoratedTplText(quill.getSemanticHTML());

        if (args[2] === "api") {
          setInitialValue(newText);
        }
        if (args[2] === "user") {
          onChange(newText, newText.localeCompare(initailValue));
        }
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref.current = null;
        container.innerHTML = "";
      };
    }, [ref, initailValue]);

    return <div ref={containerRef}></div>;
  }
);

Editor.displayName = "Editor";

export default Editor;
