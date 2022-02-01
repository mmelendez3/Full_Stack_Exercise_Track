import React from 'react';

const LogForm = () => {
  return (
    <main>
      <div className="log-container">
      <h2 className="log-title">Log Your Exercises</h2>
        <form className='form-inline'>
          <label className='log-form-label'>Exercise Description:</label>
          <input className='log-form-input' placeholder="exercise"></input>
          <label className='log-form-label'>Duration(minutes): </label>
          <input className='log-form-input' placeholder="30"></input>
          <label className='log-form-label'>Date:</label>
          <input className='log-form-input' placeholder="01/01/22"></input>
          <button className='btn-log third' type="submit">Log Exercise</button>
        </form>
      </div>
    </main>
  );
};

export default LogForm;
