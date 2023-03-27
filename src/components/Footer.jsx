import flower from "../assets/img/flower.png";

import React from "react";
import { useState } from "react";

const Footer = () => {
  const [chooseService, setChooseService] = useState("Букет");

  return (
    <footer className="footer container">
      <img className="footer__flower" src={flower} alt="Photo: flower" />
      <div className="footer__title">
        <h2>Флористика - это тоже искусство</h2>
        <p>
          Она имеет свои стили и эстетику. Именно поэтому мы используем в
          основном экзотические цветы, тщательно подбирая каждый бутон,
          подчеркивая его гармоничной упаковкой.
        </p>
        <button>ХОЧУ БУКЕТ</button>
      </div>
      <div className="footer__call-me">
        <label htmlFor="">Позвоните мне</label>
        <input type="tel" />
        <p>
          Букет
          <svg
            onClick={() => setChooseService("Букет")}
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={chooseService === "Букет" ? "#0a5f62" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.48496 12.4219C-0.148149 9.35522 2.73248 6.38148 4.37693 5.27794C4.88726 4.75521 6.38426 3.46582 8.28955 2.49006C10.6712 1.27036 16.4551 1.96733 18.4965 8.76279C20.5379 15.5583 15.9448 16.9522 12.3723 17.8234C8.7999 18.6946 3.52635 16.2552 1.48496 12.4219Z"
              stroke={chooseService === "Букет" ? "none" : "#E5AC5F"}
              strokeWidth="2"
            />
          </svg>
        </p>
        <p>
          Другой вопрос
          <svg
            onClick={() => setChooseService("Другой вопрос")}
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={chooseService === "Другой вопрос" ? "#0a5f62" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.48496 12.4219C-0.148149 9.35522 2.73248 6.38148 4.37693 5.27794C4.88726 4.75521 6.38426 3.46582 8.28955 2.49006C10.6712 1.27036 16.4551 1.96733 18.4965 8.76279C20.5379 15.5583 15.9448 16.9522 12.3723 17.8234C8.7999 18.6946 3.52635 16.2552 1.48496 12.4219Z"
              stroke={chooseService === "Другой вопрос" ? "none" : "#E5AC5F"}
              strokeWidth="2"
            />
          </svg>
        </p>
        <p>
          Свадебная флористика
          <svg
            onClick={() => setChooseService("Свадебная флористика")}
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={chooseService === "Свадебная флористика" ? "#0a5f62" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.48496 12.4219C-0.148149 9.35522 2.73248 6.38148 4.37693 5.27794C4.88726 4.75521 6.38426 3.46582 8.28955 2.49006C10.6712 1.27036 16.4551 1.96733 18.4965 8.76279C20.5379 15.5583 15.9448 16.9522 12.3723 17.8234C8.7999 18.6946 3.52635 16.2552 1.48496 12.4219Z"
              stroke={
                chooseService === "Свадебная флористика" ? "none" : "#E5AC5F"
              }
              strokeWidth="2"
            />
          </svg>
        </p>
        <button>Заказать звонок</button>
      </div>
    </footer>
  );
};

export default Footer;
