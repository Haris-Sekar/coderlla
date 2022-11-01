import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import * as api from "../../api/index";
import { useRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import './Editor.css';
function Editor() {
  const code = useRef();
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
  printf("Hello CodRella");
  return 0;
}`,
    cpp: `// C++

#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}`,
    python: `// PYTHON

print('Hello CodeRella')`,
  };
  const [lang, Setlang] = useState("");

  const sendCode = () => {
    console.log("code:", code);
    // api.codeCompile(code);
  };

  const handleLangSelect = (e) => {
    Setlang(e.target.value);
  };
  return (
    <>
      <Grid container spacing={2} style={{height: "100vh"}}>
        <Grid xs={4} style={{padding:'2%'}}>
        <div className="question">Question</div>
        1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?1. Two Sum
        Easy
        
        39462
        
        1272
        
        Add to List
        
        Share
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.
        
         
        
        Example 1:
        
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
        
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:
        
        Input: nums = [3,3], target = 6 
         
        
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?</Grid>
        <Grid xs={8} style={{ border: "2px solid black",height:"100%" }}>
          <div className="editorComponent">
            <div className="language">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={lang}
                  onChange={handleLangSelect}
                  label="Language"
                  defaultValue={{ label: "C", value: "c" }}
                >
                  <MenuItem value="c">C</MenuItem>
                  <MenuItem value="python">Python</MenuItem>
                  <MenuItem value="java">Java</MenuItem>
                  <MenuItem value="cpp">C++</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="cMirror">
              <CodeMirror
                className="codeMirror"
                ref={code}
                value={initialCode[lang]}   
                extensions={[java()]}
                // height=""
                // maxHeight="700px"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Editor;
