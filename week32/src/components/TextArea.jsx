import React, {useState} from 'react';
function TextArea() {
    const [comment, setComment] = useState('');
    const [comments, setComments] =  useState([]);
    const handleChange =(event)=> {
      setComment(event.target.value);
    }
    
    const handleSend = () => {
      let str = comment.replace(/viagra/gi, '***').replace(/XXX/gi, '***');
      comments.push(str);
      setComments(comments);
      setComment('');
    }
    
    return (
      <>
        <div className="TextArea">
          {comments.map(c =>
            <div className="color">{c}</div>
          ).reverse()}
        </div>
        <textarea value={comment} name="textarea" className="add-comment" placeholder="Комментарий" type="text"  onChange={handleChange}></textarea>
        <button className="button" onClick={handleSend}>Send</button>
      </>
    );
  }
  
  export default TextArea;