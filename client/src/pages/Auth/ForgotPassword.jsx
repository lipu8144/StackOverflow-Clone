import React from "react";

import "./auth.css";

const ForgotPassword = () => {
  return (
    <div>
      <section className="auth-section">
        <div className="auth-container-2">
          <form>
            <label htmlFor="email">
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <button type="submit" className="auth-btn">
              send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
