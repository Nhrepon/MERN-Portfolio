import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillTextEditor = () => {
    const [value, setValue] = useState('');
    console.log(value);

  return <ReactQuill theme="snow" value={value} onChange={setValue} className='border my-5 p-2'/>;
};

export default QuillTextEditor;