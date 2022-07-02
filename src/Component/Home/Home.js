import React from 'react';
import MyTodolist from '../MytodoLists/MyTodolist';
import MyTodoLists from '../MytodoLists/MyTodoLists';
import TodoList from '../TodoList/TodoList';

const Home = () => {
    return (
        <div className='h-screen'>
        <MyTodoLists></MyTodoLists>
        </div>
    );
};

export default Home;