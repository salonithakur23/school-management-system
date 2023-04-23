import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getPost ,deletePost,createPost,updatePost} from "./action";


const postSlice = createSlice ({
    name:"feeses",
    initialState: {
        post: [],
        loading: false,
        error: null,
        edit: false,
        body:"",
    },
    reducers: {
      setEdit: (state,action)  =>{
         state.edit = action.payload.edit;
         state.body = action.payload.body;
      }
    },
    extraReducers:{
         [getPost.pending]: (state,action) => {
            state.loading = true;
         },
         [getPost.fulfilled]: (state,action) =>{
            state.loading = false;      
            state.post = [action.payload];
         },
         [getPost.rejected]: (state,action) =>{
            state.loading = false;
            state.error = [action.payload];
         },


         
         [deletePost.pending]: (state,action) => {
            state.loading = true;
         },
         [deletePost.fulfilled]: (state,action) =>{
            state.loading = false;      
            state.post = action.payload;

         },
         [deletePost.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
         },


            
         [createPost.pending]: (state,action) => {
            state.loading = true;
         },
         [createPost.fulfilled]: (state,action) =>{
            state.loading = false;      
            state.post = [action.payload] ;

         },
         [createPost.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
         },



              
         [updatePost.pending]: (state,action) => {
            state.loading = true;
         },
         [updatePost.fulfilled]: (state,action) =>{
            state.loading = false;      
            state.post = [action.payload] ;

         },
         [updatePost.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
         },


         


         
    }
});

export const {setEdit} = postSlice.actions

export default postSlice.reducer