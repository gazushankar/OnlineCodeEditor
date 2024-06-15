import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

export const CodeEditor = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  

  return (
    <>
      <CodeMirror
        value={value}
        height="800px"
        extensions={[loadLanguage("html")]}
        onChange={onChange}
      />
      ;
    </>
  );
};
