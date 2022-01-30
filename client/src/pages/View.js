import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISE } from '../utils/queries';
import ExerciseList from '../components/ExerciseList';

const ViewLog = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_EXERCISE);
  const exercise = data?.exercise || [];
  console.log(exercise);
  return (
    <main>
      <div className="view-container form-container">
        <div className="view-log">
          {' '}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ExerciseList exercise={exercise} />
          )}
        </div>
      </div>
    </main>
  );
};

export default ViewLog;
