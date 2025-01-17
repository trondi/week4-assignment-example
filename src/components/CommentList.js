/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import styled from "styled-components";
import getComments from "../utils/api";

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getComments();
      setComments(data);
      console.log("data", data);
    })();
  }, []);
  console.log("comments ", comments);

  return comments.map((comment) => (
    <Comment key={comment.id}>
      <img src={comment.profile_url} alt="" />
      {comment.author}
      <CreatedAt>{comment.createdAt}</CreatedAt>
      <Content>{comment.content}</Content>
      <Button>
        <a>수정</a>
        <a>삭제</a>
        <a>댓글</a>
      </Button>

      <hr />
    </Comment>
  ));
}

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
