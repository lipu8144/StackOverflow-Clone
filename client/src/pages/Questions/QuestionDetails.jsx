import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment'
import copy from 'copy-to-clipboard'

import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Avatar from '../../components/Avatar/Avatar'
import './questions.css';
import DisplayAnswers from "./DisplayAnswers";
import {
  postAnswer,
  deleteQuestion,
  voteQuestion,
} from "../../actions/question";


const QuestionDetails = () => {
  
  const {id} = useParams();
  
  const questionList = useSelector((state) => state.questionsReducer);
    
    const[answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = "https://stackoverflowbackend-za9o.onrender.com";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User.result._id
          })
        );
      }
    }
  };

  const handleShare = () => {
    copy(url+location.pathname)
    alert('Copied url : '+url+location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', User.result._id))
  }

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };

  return (
    <div className="question-details-page">
      {questionList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <BiSolidUpArrow className="votes-icon" onClick={handleUpVote} />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <BiSolidDownArrow className="votes-icon" onClick={handleDownVote} />
                    </div>
                    <div style={{ width: "100%" }} >
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {
                            User?.result?._id === question?.userId && 
                            (
                              <button type="button" onClick={handleDelete}>Delete</button>
                            )
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/user/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor={"orange"}
                              px={"8px"}
                              py={"5px"}
                            >
                              {question.userPosted
                                .charAt(0)
                                .toLocaleUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswers key={question._id} question={question} handleShare={handleShare} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3 className="">Your Answer</h3>
                  <form onSubmit={ (e) => {handlePostAns(e, question.answer.length)}}>
                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type="submit"
                      value="Post Your Answer"
                      className="post-ans-btn"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to={"/Tags"} key={"tag"} className="ans-tags">
                        
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to={"/askQuestion"}
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      ask your own question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
