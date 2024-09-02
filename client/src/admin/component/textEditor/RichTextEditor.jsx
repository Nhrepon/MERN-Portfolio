import React, { useEffect, useState } from "react";
import {  EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      const [convertedContent, setConvertedContent] = useState(null);
    
      useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
      }, [editorState]);
    
      console.log(convertedContent);




  return (
    <>
      {/* <Editor editorState={editorState} onEditorStateChange={setEditorState}/> */}
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class my-5 border p-3"
        editorClassName="editor-class border h-300 p-2"
        toolbarClassName="toolbar-class border"
      />
    </>
      
  );
};

export default RichTextEditor;
