import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentForm = (props) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const id = props.id;
    const navigate = useNavigate();

    const formHandler = e => {
        e.preventDefault();
        if(props.len == 0){
            axios.post(`http://localhost:8000/api/comments/${id}`, {
                rid: id,
                comment: [{
                    name: name,
                    content: content
                }]
            })
            .then(() => navigate(`/${id}`))
            .catch(err => console.log(err))
        } else {
            axios.post(`http://localhost:8000/api/comments/push/${id}`, {
                name: name,
                content: content
            })
            .then(() => navigate(`/${id}`))
            .catch(err => console.log(err))
        }
        setName('');
        setContent('');
    }

    return(
        <form className="mb-4" onSubmit={formHandler}>
            <input placeholder="Your name" className="form-control mb-3" onChange={e => setName(e.target.value)} value={name} required/>
            <textarea rows='4' placeholder='Leave your comment' className="form-control mb-3" onChange={e => setContent(e.target.value)} value={content} required/>
            <button className="btn btn-sm btn-outline-secondary" type='submit'>Submit</button>
            <input type='hidden' name="rid" value={id}/>
        </form>
    )
}

export default CommentForm;