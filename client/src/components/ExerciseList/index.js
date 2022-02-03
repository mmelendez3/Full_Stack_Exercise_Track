import React from 'react';
import { REMOVE_EXERCISE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { removeExerciseId } from '../../utils/localStorage';

const ExerciseList = ({ exercises, description }) => {
  const [removeExercise] = useMutation(REMOVE_EXERCISE);

  if (!exercises.length) {
    return <h3>No exercises logged</h3>;
  }

  // const handleRemoveExercise = async (exerciseId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   console.log(exerciseId);
  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     // Apollo will cache the response and automatically refetch and update
  //     await removeExercise({
  //       variables: { exerciseId: exerciseId },
  //     });

  //     // upon success, remove book's id from localStorage
  //     removeExerciseId(exerciseId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      <h3>{description}</h3>
      {exercises &&
        exercises.map((exercise) => (
          <div key={exercise._id} id="exerciseDiv">
            <p>
              {exercise.username} did {exercise.description + ' '}
              for {exercise.duration} minutes, logged on {exercise.date}
            </p>
            <button>Edit</button>
            <button
              onClick={() => {
                removeExercise({ variables: { id: exercise.id } });
                window.location.reload();
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;

//onClick={() => handleRemoveExercise(exercise.exerciseId)}
