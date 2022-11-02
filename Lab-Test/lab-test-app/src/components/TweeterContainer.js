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


// First try: using class components but failed
// class TweeterContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {comment: ""};

//         this.handleTextChange = this.handleTextChange.bind(this);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     }

//     state = {
//         comment: ""
//     }

//     handleTextChange = (e) => {
//         console.log("Event: ", e.target.value);
//         this.setState({[e.target.name]: e.target.value});
//     }
    
//     handleFormSubmit = (e) => {
//         e.preventDefault(); // stop the browser from refreshing
//         const comment = this.state.comment;
//         console.log("Comment on submit: ", comment);
//         // clear the input's text
//         this.setState({
//             comment: ""
//         })
//     }

//     render () {
//         const {comment} = this.state;
//         const commentArr = [];
//         if (comment) {
//             commentArr.push(comment);
//         }

//         return (
//             <>
//                 {/* TweeterContainer's status */}
//                 <p>{this.props.status}</p>

//                 <form onSubmit={this.handleFormSubmit}>
//                     <label>
//                         Comment: <input type="text" value={this.state.comment} name="comment" onChange={this.handleTextChange}  />
//                     </label>
//                     {this.state.comment}
//                     <button type="submit" onClick={this.handleFormSubmit}>Post</button>
//                 </form>
//                 <Comment />
//             </>
//         );
//     }
// }
 
// export default TweeterContainer;
