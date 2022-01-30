import React from 'react';

const LogForm = () => {
  return (
    <main>
      <div className="log-container form-container">
      <h2 className="log-title">Log Your Exercises</h2>
        <form>
          <label>Exercise Description:</label>
          <input placeholder="exercise"></input>
          <label>Duration(minutes): </label>
          <input placeholder="30"></input>
          <label>Date:</label>
          <input placeholder="01/01/22"></input>
          <button className='btn third' type="submit">Log Exercise</button>
        </form>
      </div>
    </main>
  );
};

export default LogForm;
