import styled from "styled-components";

export const FormWrapper=styled.div`
    position: relative;
    margin-top: 20px;
`;
export const InputArea=styled.input`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 100px;
    padding: 10px 100px 10px 20px; 
    line-height: 1;
    box-sizing: border-box;
    outline: none;
`;

export const SelectionPart=styled.div`
    position: absolute;
    right: 3px; 
    top: 3px;
    bottom: 3px;
    border: 0;
    color: #fff;
    outline: none;
    margin: 0;
    padding: 0 10px;
    border-radius: 100px;
    z-index: 2;
`;