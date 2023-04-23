import React, { useState } from "react";
import { Input, Button, Card, Space } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { createPost } from "../Redux/features/action";
import LoadingCard from "./LoadingCard";
import { Link } from "react-router-dom";


const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" });
  const [showPost, setShowPost] = useState(false);
  const dispatch =useDispatch();
const {loading,fees} = useSelector((state) =>({...state.app}))

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({values}))
    setValues({ title: "", body: "" });
    setShowPost(true);
  };

  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <div className="site-card-border-less-wrapper">
            <Card type="inner" id={fees[0].id}>
              <p>User Id: {fees[0].id}</p>
              <span>{fees[0].body}</span>
            </Card>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "20px" }}>
          <h1>Create Post</h1>
          <Input
            placeholder="Enter title"
            type="text"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <Input.TextArea
            placeholder="Enter Body"
            type="text"
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            value={values.body}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Space style={{ margin: 10 }}>
          <Link to='/userpost' >
          <Button >Go Back</Button>
          </Link>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </div>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </>
  );
};

export default CreatePost;