import React from "react";

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './tags.css'

const Tags = ({ sharedData }) => {
  const tagsList = [
    {
      id: 1,
      tagName: "javascript",
      tagDesc:
        "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that",
    },
    {
      id: 2,
      tagName: "python",
      tagDesc:
        "Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a",
    },
    {
      id: 3,
      tagName: "java",
      tagDesc:
        "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This",
    },
    {
      id: 4,
      tagName: "c#",
      tagDesc:
        'C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets',
    },
    {
      id: 5,
      tagName: "php",
      tagDesc:
        "PHP is an open-source, multi-paradigm, dynamically-typed, and interpreted scripting language designed initially for server-side web",
    },
    {
      id: 6,
      tagName: "android",
      tagDesc:
        "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles,",
    },
    {
      id: 7,
      tagName: "html",
      tagDesc:
        "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions",
    },
    {
      id: 8,
      tagName: "jquery",
      tagDesc:
        "jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling,",
    },
    {
      id: 9,
      tagName: "c++",
      tagDesc:
        "C++ is a general-purpose programming language. Use this tag for questions about/utilizing C++. Do not also tag questions with [c] unless",
    },
    {
      id: 10,
      tagName: "css",
      tagDesc:
        "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup",
    },
  ];
  return (
    <div className="home-container-1">
      <LeftSidebar sharedData={sharedData} />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for other to find and answer your
          question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
