import React, { useState } from 'react';
import { ADD_EXERCISE } from '../../utils/mutations';
import { QUERY_EXERCISE } from '../../utils/queries';
import { useMutation } from '@apollo/client';

const LogForm = () => {
  const [formState, setFormState] = useState({
    exercise: '',
    duration: '',
    date: '',
  });

  const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
    update(cache, { data: { addExercise } }) {
      try {
        // update exercse array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { exercise } = cache.readQuery({ query: QUERY_EXERCISE });
        cache.writeQuery({
          query: QUERY_EXERCISE,
          data: { export: [addExercise, ...exercise] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value) {
      setFormState(event.target.value);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addExercise({
        variables: { formState },
      });

      // clear form value
      setFormState('');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="logForm">
      <h2 className="log-title">Log Your Exercises</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Exercise Description:</label>
        <input placeholder="exercise" onChange={handleChange}></input>
        <label>Duration(minutes): </label>
        <input placeholder="30" onChange={handleChange}></input>
        <br />
        <label>Date:</label>
        <input placeholder="01/01/22" onChange={handleChange}></input>
        <button className="btn third" type="submit">
          Log Exercise
        </button>
      </form>
    </div>
  );
};

export default LogForm;
