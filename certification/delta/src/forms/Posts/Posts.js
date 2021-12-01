import React, {useEffect, useState} from 'react';
import Post from "../../components/Post/Post";
import {EMPTY_STRING} from '../../constants/api/common';
import {getCommentsByPostID, getPostsList} from "../../api/dumMyApi";
import "./Posts.css"
import {Pagination, Row} from "antd";
import OpenPost from "../OpenPost/OpenPost";
import {useDispatch, useSelector} from "react-redux";
import openPostReducer from "../../reducers/openPostReducer";
import {SHOW_POST_WITH_COMMENTS} from "../../constants/actions/actions_const";
import {setIn} from "immutable";
import {ThemeContextConsumer} from "../../context/ThemeContext";

const Posts = () => {
    const [posts, setPosts] = useState(EMPTY_STRING);
    const [openPostActive, setOpenPost] = useState(false);

    const [index, setIndex] = useState(0);
    const [openedPost, setOpenedPost] = useState();
    const [postText, setPostText] = useState(EMPTY_STRING);
    const [postTitle, setPostTitle] = useState(EMPTY_STRING);
    const [firstName, setFirstName] = useState(EMPTY_STRING);
    const [lastName, setLastName] = useState(EMPTY_STRING);
    const [dataPost, setDataPost] = useState(EMPTY_STRING);
    const [imgUrl, setImgUrl] = useState(EMPTY_STRING);

    const loadPosts = (page, limit) => {
        getPostsList(
            page,
            limit,
            (resp) => {
                setPosts(resp);
            },
            () => {
            },
        );
    };

    const dispatch = useDispatch();

    const onHandleClickByPost = (postId, index) => {
        setIndex(index);
        dispatch(getCommentsByPostID(postId, 0, 6));
        dispatch({type: SHOW_POST_WITH_COMMENTS, payload: true})
        console.log("вывод открытия поста ", postId)
        setPostText(posts[index].text);
        setPostTitle(posts[index].owner.title);
        setFirstName(posts[index].owner.firstName);
        setLastName(posts[index].owner.lastName);
        setDataPost(posts[index].publishDate)
        setImgUrl(posts[index].image);
    }

    const [newCurrentPage, setNewCurrentPage] = useState(1);

    useEffect(() => {
        loadPosts(newCurrentPage - 1, 8);

    }, [newCurrentPage])

    const onChangePainator = (currentPage, sizeBatch) => {
        //console.log(`current: ${currentPage},size:${sizeBatch}`)
        setNewCurrentPage(currentPage);
    }

    return (
        <ThemeContextConsumer>{
            (context) => (
                <div className={`posts-form ${context.darkTheme && 'posts-form_dark'}`}>
                    <div className='posts-forms__container'>
                        {posts.length != 0
                            ? posts.map((elem, index) => (
                                <div onClick={() => {
                                    onHandleClickByPost(elem.id, index)
                                }}>
                                    <Post
                                        key={index}
                                        name={elem.owner.firstName}
                                        lastName={elem.owner.lastName}
                                        text={elem.text}
                                        imgUrl={elem.image}
                                        datePost={elem.publishDate}
                                        avatarUrl={elem.owner.picture}
                                        title={elem.owner.title}
                                        postId={elem.id}
                                        userId={elem.owner.id}
                                    />
                                </div>
                            )) : "Идет загрузка"}
                        <OpenPost
                            title={postTitle}
                            firstName={firstName}
                            lastName={lastName}
                            dataPost={dataPost}
                            imgUrl={imgUrl}
                            textPost={postText}
                        />
                    </div>
                    <Pagination className="posts-pagination"
                                total={50}
                                pageSize={5}
                                current={newCurrentPage}
                                onChange={onChangePainator}
                    />
                </div>)}
        </ThemeContextConsumer>
    )
}

export default Posts;