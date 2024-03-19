import React from "react";
import './rightSidebar.css';
import { FaCommentAlt, FaPen, FaStackOverflow } from "react-icons/fa";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <FaPen className="right-side-icon" />
          <p>
            How the co-creator of Kubernetes is helping developers build safer
            software
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <FaPen className="right-side-icon" />
          <p>Trust as a service for validating OSS dependencies</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <FaCommentAlt className="right-side-icon" />
          <p>Update: New Colors Launched</p>
        </div>
        <div className="right-sidebar-div-2">
          <FaCommentAlt className="right-side-icon" />
          <p>Incident update and uptime reporting</p>
        </div>

        <div className="right-sidebar-div-2">
          <FaStackOverflow className="right-side-icon" />
          <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        </div>
        <div className="right-sidebar-div-2">
          <FaStackOverflow className="right-side-icon" />
          <p>
            Beta test for short survey in banner ad slots starting on the week
            of...
          </p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
