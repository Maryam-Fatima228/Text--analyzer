
import React,{useState} from 'react'

export default function TextForm(props) {
    const[Text,SetText]=useState('enter the text');
    const HandleUpClick = ()=>{
       
        let newText=Text.toUpperCase();
        SetText(newText);
        props.showAlert("Converted to Uppercase!","success");

    }
    const HandleLoClick = ()=>{
       
        let newText=Text.toLowerCase();
        SetText(newText);
props.showAlert("Converted to Lowercase!","success");
    }
    const HandleClearClick = ()=>{
       
        let newText=' ';
        SetText(newText);
         props.showAlert("Text cleared!","success");

    }
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = Text;
  window.speechSynthesis.speak(msg);
   props.showAlert("Text into speech enabled!","success");
}
    const HandleOnChange = (event)=>{
       
        SetText(event.target.value);
        
    }
  return (
    <>
    <div className="container"style={{color :props.mode === 'dark' ? 'white' : '#042743'}}>

        <h1>{props.heading}</h1>
      <div className="mb-3">

  <textarea className="form-control" value={Text} onChange={HandleOnChange} style={{backgroundColor :props.mode === 'dark' ? 'grey' : 'white',color:props.mode==='dark'?'white':'#042743'}} id="MYBOX"  rows ="8"></textarea>
</div>
<button className="btn btn-primary mx-2"  onClick={HandleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-2 " onClick={HandleLoClick}>Convert to Lower Case</button>
<button className="btn btn-primary" onClick={HandleClearClick}>Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
    </div>
    <div className="container my-2  "style={{color :props.mode === 'dark' ? 'white' : '#042743'}}>
<h1>Your text summary</h1>
<p> {Text.split(" ").length-1} words {Text.length} characters</p>
<p> {0.008 *Text.split(" ").length} Minutes to Read </p>
    </div>
     </>
  )
 
}
