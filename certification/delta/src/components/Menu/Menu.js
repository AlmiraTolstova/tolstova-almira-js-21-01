import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Button, Menu} from 'antd';
import {UsergroupAddOutlined, PictureOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import logo from './logo.svg'
import {Switch, Route, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './Menu.css'
import {getPostsByUserId, getUsersFullInfoByID, getUsersList} from "../../api/dumMyApi";
import {loginOut} from "../../actions/actions";
import {GET_USER_FULL_INFO, SET_NEED_USER_ID} from "../../constants/actions/actions_const";
import {ThemeContextConsumer} from "../../context/ThemeContext";

const {SubMenu} = Menu;

const NewMenu = () => {
    const handleClick = (e) => {
        setCurrent(e.key)
    };
    const [current, setCurrent] = useState('posts');
    const state = useSelector(state => state.loginReducer);
    const statePAR = useSelector((state => state.personalAreaReducer));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersList(0, 9,));

    }, [])

    const onExitButtonClick = () => {
        dispatch(loginOut());
    }

    const onSetNeedUserInfoId = () => {
        console.log("запрос фул инфо по пользователю")
        dispatch(getUsersFullInfoByID(state.userId));
        dispatch(getPostsByUserId(state.userId, 0, 5));
    }

    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <Menu className={`navigator ${context.darkTheme && 'navigator_dark'}`} onClick={handleClick}
                          selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="logo" disabled>
                            <img src={logo} alt={"logo"}/>
                            Delta World
                        </Menu.Item>

                        <Menu.Item key="users" icon={<UsergroupAddOutlined/>}>
                            <Link to="/users">
                                Пользователи
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="posts" icon={<PictureOutlined/>}>
                            <Link to="/">
                                Посты
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="login">
                            <Link to="/login">
                                Вход
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="registration">
                            <Link to="/registration">
                                Регистрация
                            </Link>
                        </Menu.Item>

                        <Menu.Item className="user-info">
                            <Link to="/personalarea">
                                <img className="user-info__photo" src={state.userPhotoURL}/>
                                <Button type={"link"} onClick={onSetNeedUserInfoId}>
                                    {state.userFirstName}
                                </Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/">
                                <Button type={"link"} onClick={onExitButtonClick}>
                                    Выйти
                                </Button>
                            </Link>
                        </Menu.Item>
                    </Menu>
                )
            }
        </ThemeContextConsumer>
    );
};

export default NewMenu;

