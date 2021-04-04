import React from 'react'
import './Post.css'
import { FaRegComment, FaRegHeart, FaLink } from 'react-icons/fa';
const Post = (props) => {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-button" onClick={() => props.showProfile(props.owner.id)}>
                    <div className="post-header-img">
                        <img alt={props.id} src={props.owner.picture}/>
                    </div>
                    <div className="post-header-name">
                        {`${props.owner.firstName} ${props.owner.lastName}`}
                    </div>
                </div>
            </div>
            <div className="post-body">
                <div className="post-img">
                    <img src={props.image}/>
                    <div className="post-buttons">
                        <div><FaRegHeart/></div>
                        <div><FaRegComment/></div>
                    </div>
                </div>
                
                <div className="post-info">
                    <div className="post-img-likes">{props.likes} likes</div>
                    <div className="post-text">
                        {props.text}<br/>
                        {!props.link == "" ? <a href={props.link}><FaLink className="linkIcon"/>{props.link}</a> : null}
                    </div>
                    <div className="post-tags">
                        {props.tags.map(tag =>(
                            <div onClick={() => props.searchTag(tag)} className="tag">#{tag}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
