import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import './askQuestion.css';
import {askQuestion} from '../../actions/question'

const AskQuestion = ({ sharedData }) => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  // console.log(User.result.name);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ questionTitle, questionBody, questionTags });
    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User.result._id,
        },
        navigate
      )
    );
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
              />
            </label>

            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                cols="30"
                rows="10"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyPress={handleEnter}
              ></textarea>
            </label>

            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                placeholder="e.g (xml typescript wordpress)"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Review your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
