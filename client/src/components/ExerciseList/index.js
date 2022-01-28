import React from 'react';

const ExerciseList = ({ exercise, description }) => {
  if (!exercise.length) {
    return <h3>No exercises logged</h3>;
  }

  return (
    <div>
      <h3>{description}</h3>
      {exercise &&
        exercise.map((exercise) => (
          <div key={exercise._id}>
            <p>
              {exercise.username}
              for {exercise.duration} minutes, logged on {exercise.date}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
