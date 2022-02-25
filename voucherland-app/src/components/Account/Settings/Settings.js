import React from "react";

export default function Settings() {
  return (
    <article className="settings">
      <h3>Account settings</h3>

      <div className="email">
        <label htmlFor="email"> email </label>
        <input type="email" id="email" placeholder="email" />
      </div>

      <div className="password">
        <label htmlFor="password"> password </label>
        <input type="password" id="password" placeholder="password"/>
      </div>

      <div className="password">
        <label htmlFor="password"> password </label>
        <input type="password" id="password" placeholder="confirm password" />
      </div>

      <button className="settings_save_btn">Save changes</button>
    </article>
  );
}
