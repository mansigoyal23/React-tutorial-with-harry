import React, {useState} from 'react'
// useState hook ko import kiya h.. curly bracket k threw

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase", "success");
        // setText("You have clicked on handleUpClicked");
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase", "success");
        // setText("You have clicked on handleLowClicked");
    }

    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value); 
         // agr yeh line nhi likhenge toh textarea ki value change nhi kr payge. By default textarea ki value {text} rhegi. And button pe click hone k baad {setText} aa jaygi. but kuch bhi add and delete nhi hoga. Yeh line ko likhne se textarea ki value jo chnage kr paynge.
    }

    const [text, setText] = useState('Enter text here');
    // this above text is syntax of useState hook

    // text = "newtext"; // This is the wrong way to define value to variable in react.
    // We must use useState renderHook. the correct way is below here.
    // setText("newText");  // correct way
  return (
    <>
        <div>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                {/* Yeh textarea pe style m props.mode ko call kiya h, Isliye TextForm ka jo component call h, App.js m usme mode ko pass krenge. otherwise yeh kaam nhi krega. Ex:- <TextForm heading="Enter the text in textarea" mode={mode} /> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'light' ? 'white' : '#324b7a', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
                {/* textarea ki value m text ko rkha h. And text ko useState k threw setText m convert kiya h. So, convert to Uppercase button pe jaise hi click hoga, handleUpClick function call hoga. And iss function k threw, setText ki value change ho jaygi, and textArea ki value change ho jaygi. */}
            </div>
            <button className='btn-primary btn' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn-primary btn mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text here</h1>
            <p>3432 words, 4356 characters</p> 
            {/*  // this is example. If we calculate the words and characters which we enter in textarea. Make it dynamically calculate by react. */}
            <p>{text.split(" ").length} words, {text.length} characters</p> 
            {/* // iske threw jo value textarea m enter h..  usko split kr denge. space k threw and uski length calculate kr lenge. So, word count aa jayga. */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>  
            {/* according to google 1 word ko padhne m 0.008 minutes lgte h. So, jo length hogi.. utne words ko padhne m lga time calculate kr ry h above */}
        </div>
    </>
  )
}
