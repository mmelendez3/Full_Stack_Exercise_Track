import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseList = ({ exercises, description }) => {
  if (!exercises.length) {
    return <h3>No exercises logged</h3>;
  }

  return (
    <div>
      <h3>{description}</h3>
      {exercises &&
        exercises.map((exercise) => (
          <div key={exercise._id}>
            <p>
              {exercise.username} did {exercise.description + ' '}
              for {exercise.duration} minutes, logged on {exercise.date}
            </p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
