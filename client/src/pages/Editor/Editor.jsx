import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import * as api from "../../api/index";
function Editor() {
  const initialCode = {
    java: `// JAVA

  public class Main{
    public static void main(string args[]){
      System.out.println('Hello CodRella');
    }
  }`,
    c: `// C

  #include <stdio.h>
  int main() {
     // printf() displays the string inside quotation
     printf("Hello CodRella");
     return 0;
  }`,
    python: `// PYTHON

  print('Hello CodeRella')`,
  };
  const [code, setCode] = useState(initialCode);
  const [lang, Setlang] = useState(['C','JAVA','Python'])
  const updateCode = (code) => {
    setCode(code);
  };
  const sendCode = () => {
    console.log("code:", code);
    api.codeCompile(code);
  };
  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value=''
            autoWidth
            label="Age"
          >
          </Select>
        </FormControl>
      </div>
      <CodeMirror
        value={code}
        height="200px"
        onChange={updateCode}
        extensions={[java(), cpp()]}
      />
      <button onClick={sendCode}> RUN CODE</button>
    </>
  );
}
export default Editor;
