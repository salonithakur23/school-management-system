import React, { useState, useEffect } from "react";
import LoadingCard from "./LoadingCard";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Input, Space } from "antd";
import { getPost, deletePost, updatePost } from "../Redux/features/action";
import { setEdit } from "../Redux/features/postSlice";
import { Link } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const UserPost = ({ history }) => {
  const [id, setId] = useState();
  const [bodyText, setBodyText] = useState("");
  const dispatch = useDispatch();
  const { loading, post, edit, body } = useSelector((state) => ({ ...state.app }))





  const onChangeInput = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    setBodyText(body);
  }, [body]);


  const fetchUserPost = () => {
    if (!id) {
      window.alert("Please enter id");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };

  return (
    <>
    <MainLayout />
    <div className="container">
      <h3 style={{ textAlign: "center",marginTop:"50px",fontFamily:"-moz-initial" }}>Get Single User Detail</h3>
      <Input
        placeholder="Enter User Id"
        type="number"
        onChange={onChangeInput}
        value={id}
        style={{ width: "300px" }}
      />
      <br />
      <br />
      <Space size="middle" style={{ margin: 10 }}>
        <Button type="primary" onClick={fetchUserPost}>
          Fetch user Details
        </Button>
     <Link to='/post'>
     <Button type="primary" >
          Create user Details
        </Button>

     </Link>
      </Space>
      <br />
      <br />



      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {post?.length > 0 && (
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={post[0].title}>
                <p>User Id: {post[0].id}</p>
                {edit ? (
                  <>
                    <Input.TextArea
                      rows={4}
                      value={bodyText}
                      onChange={(e) => setBodyText(e.target.value)}
                    />
                    <Space
                      size="middle"
                      style={{
                        marginTop: 5,
                        marginLeft: 5,
                      }}
                    >
                 
                        <Button
                        type="primary"
                        onClick={() =>{
                          dispatch(
                            updatePost({
                              id:post[0].id,
                              body: bodyText,
                              title: post[0].title
                            })
                          );
                          dispatch(
                            setEdit({ edit: false, body:post[0].body})
                          )
                        }}
                        
                        >Save</Button>


                      <Button
                        onClick={() =>
                          dispatch(setEdit({ edit: false, body: post[0].body }))}

                      >Cancel</Button>
                    </Space>
                  </>
                ) : (
                  <span>{post[0].body}</span>
                )}
              </Card>
              <Space
                size="middle"
                style={{
                  marginTop: 35,
                  marginLeft: 5,
                  float: "right",
                }}
              >
                <Button
                  style={{ cursor: "pointer" }}
                  type="primary"
                  disabled={edit}
                  danger
                  onClick={() => dispatch(deletePost({ id: post[0].id }))}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => dispatch(setEdit({ edit: true, body: post[0].body }))}
                  type="primary">Edit{""} </Button>
              </Space>
            </div>
          )}
        </>
      )}
    </div>
    </>
  );
};

export default UserPost;