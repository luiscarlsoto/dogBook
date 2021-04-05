import React, { useState, useEffect } from 'react'
import './Post.css'
import { FaRegComment, FaRegHeart, FaLink, FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Post = (props) => {
    const { likes } = props;
    const [likesCount, setLikesCount] = useState(0)
    const [liked, setLiked] = useState(false)
    
    const handleLikeButton = () =>{
        setLiked(!liked)
        liked ? setLikesCount(likesCount-1) : setLikesCount(likesCount+1) 
    }
    useEffect(() => {
        setLikesCount(likes)
      }, [likes]);

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-button" onClick={() => props.showProfile(props.owner.id)}>
                    <div className="post-header-img">
                        <img alt={props.owner.id} src={props.owner.picture}/>
                    </div>
                    <div className="post-header-name">
                        {`${props.owner.firstName} ${props.owner.lastName}`}
                    </div>
                </div>
            </div>
            <div className="post-body">
                <div className="post-img">
                    <img alt={props.id} src={props.image}/>
                    <div className="post-buttons">
                        <div onClick={() => handleLikeButton()}>{liked ? <FaHeart className="liked"/> : <FaRegHeart/>}</div>
                        <div><FaRegComment/></div>
                    </div>
                </div>
                
                <div className="post-info">
                    <div className="post-img-likes">{likesCount} likes</div>
                    <div className="post-text">
                        {props.text}<br/>
                        {!props.link === "" ? <a href={props.link}><FaLink className="linkIcon"/>{props.link}</a> : null}
                    </div>
                    <div className="post-tags">
                        {props.tags.map(tag =>(
                            <Link onClick={() => props.searchTag(tag)} to={`/tag/${tag}`} key={tag} className="tag">#{tag}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
