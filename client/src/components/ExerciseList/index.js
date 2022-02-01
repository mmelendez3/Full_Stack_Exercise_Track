import React from 'react';

const ExerciseList = ({ exercise, description }) => {
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
              {exercise.username} did {exercise.description}
              for {exercise.duration} minutes, logged on {exercise.date}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
