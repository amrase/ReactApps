import React from 'react';
import faker from 'faker'
import ApprovalCard from './ApprovalCard';

const CommentDetails = (props) =>{
    return (
        <div className="card">
            <div className="content">
                <a href="/" className="avatar">
                    <img className="right floated large ui image"alt="avatar" src={props.avatar}/>
                </a>
            
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metdata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                    <ApprovalCard/>
                </div>
            </div>   
        </div>
    )
}

export default CommentDetails