import React, {useState} from 'react';
import Comment from './Comment';

// Using functional components
const TweeterContainer = (props) => {
    const [comment, setComment] = useState("");
    const [commentList, setcommentList] = useState([]);
    
    const handleTextChange = (e) => {
        setComment(e.target.value);
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault(); // stop the browser from refreshing
        const input = {comment};
        if(comment) {
            setcommentList((lst) => [...lst, input]);
            setComment(""); // clear the input's text
        }
    }

    return ( 
        <>
            {/* TweeterContainer's status */}
            <div className='div-class'>
                <h3>{props.status}</h3>
                <form onSubmit={handleFormSubmit} className="form-class">
                    <label className='label-class'>
                        Comment: <input type="text" value={comment} onChange={handleTextChange} className="input-class" />
                    </label>
                    <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Post</button>
                </form>
                {/* mapping out the comment */}
                {commentList.map((comLst) =>
                    <div className='form-class'>
                        <p><Comment comment={comLst.comment} /></p>
                    </div>
                )}
            </div>
        </>
    );
}

export default TweeterContainer;
