import React, { useState } from 'react';

const Form = () => {
    const[form,setForm]=useState({
        'Title':'',
        'Author':'',
    })
    const handleOnChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div>
     <input type="text" name='Title' onChange={handleOnChange} value={form.Title}/>
     <input type="text" name='Author' onChange={handleOnChange} value={form.Author}/>
     
      
    </div>
  );
}

export default Form;
