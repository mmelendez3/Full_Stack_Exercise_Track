import React from 'react';
import LogForm from '../components/LogForm';

const Log = () => {
  return (
    <main>
      <div className="log-container form-container">
        <LogForm></LogForm>
        <div className="viewLog">
          <h2>Your Exercise Log</h2>
        </div>
      </div>
    </main>
  );
};

export default Log;
