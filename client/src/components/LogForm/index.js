import React, { useState } from 'react';
import { ADD_EXERCISE } from '../../utils/mutations';
import { QUERY_EXERCISE, QUERY_EXERCISES, QUERY_ME } from '../../utils/queries';
import { useMutation } from '@apollo/client';

const LogForm = () => {
  const [formState, setFormState] = useState({
    exercise: '',
    duration: '',
    date: '',
  });

  // const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
  //   update(cache, { data: { addExercise } }) {
  //     try {
  //       // update exercise array's cache
  //       // could potentially not exist yet, so wrap in a try/catch
  //       const { exercise } = cache.readQuery({ query: QUERY_EXERCISE });
  //       cache.writeQuery({
  //         query: QUERY_EXERCISE,
  //         data: { export: [addExercise, ...exercise] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  const [addExercise, { error, loading, data }] = useMutation(ADD_EXERCISE);

  // update state based on form input changes
  const handleChange = (event, input) => {
    if (input === 'exercise') {
      setFormState({ ...formState, exercise: event.target.value });
    } else if (input === 'duration') {
      setFormState({ ...formState, duration: event.target.value });
    }
    console.log(formState);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addExercise({
        variables: {
          description: formState.exercise,
          duration: formState.duration,
        },
      }).then((exercise) => {
        console.log(exercise);
      });

      // clear form value
      setFormState({
        exercise: '',
        duration: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="log-container">
      <h2 className="log-title">Log Your Exercises</h2>
      <form className="form-inline" onSubmit={handleFormSubmit}>
        <label className="log-form-label">Exercise Description:</label>
        <input
          className="log-form-input"
          placeholder="exercise"
          onChange={(event) => handleChange(event, 'exercise')}
        ></input>
        <label className="log-form-label">Duration(minutes): </label>
        <input
          className="log-form-input"
          placeholder="30"
          onChange={(event) => handleChange(event, 'duration')}
        ></input>
        <button
          className="btn-log third"
          type="submit"
          onClick={(event) => (window.location.href = '/')}
        >
          Log Exercise
        </button>
      </form>
    </div>
  );
};
export default LogForm;

//   const [exerciseText, setText] = useState('');

//   const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
//     update(cache, { data: { addExercise } }) {
//       try {
//         // update thought array's cache
//         // could potentially not exist yet, so wrap in a try/catch
//         const { exercises } = cache.readQuery({ query: QUERY_EXERCISES });
//         cache.writeQuery({
//           query: QUERY_EXERCISES,
//           data: { exercises: [addExercise, ...exercises] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update me object's cache
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, exercises: [...me.exercises, addExercise] } },
//       });
//     },
//   });

//   // update state based on form input changes
//   const handleChange = (event) => {
//     if (event.target.value) {
//       setText(event.target.value);
//     }
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await addExercise({
//         variables: { exerciseText },
//       });

//       // clear form value
//       setText('');
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="logForm">
//       <h2 className="log-title">Log Your Exercises</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>Exercise Description:</label>
//         <input placeholder="exercise" onChange={handleChange}></input>
//         <br></br>
//         <label>Duration(minutes): </label>
//         <input placeholder="30" onChange={handleChange}></input>
//         <br />
//         <label>Date:</label>
//         <input placeholder="01/01/22" onChange={handleChange}></input>
//         <button className="btn third" type="submit">
//           Log Exercise
//         </button>
//       </form>
//     </div>
//   );
// };
