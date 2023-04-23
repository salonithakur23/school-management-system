import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const getPost = createAsyncThunk("post/getPost", async ({ id }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
    );
});



export const deletePost = createAsyncThunk(
    "post/deletePost", async ({ id }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    }).then((res) => res.json()
    );
});



export const createPost = createAsyncThunk(
    "post/createPost", async ({ values }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/ `, {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-type": "application"
        },
        body: JSON.stringify({
            title:values.title,
            body:values.body
        })
    }).then((res) => res.json()
    );
});




export const updatePost = createAsyncThunk(
    "post/updatePost", 
    async ({ id, body, title  }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers:{
            Accept: "application/json",
            "Content-type": "application"
        },
        body: JSON.stringify({
        
            title,
            body,
        })
    }).then((res) => res.json()
    );
});





