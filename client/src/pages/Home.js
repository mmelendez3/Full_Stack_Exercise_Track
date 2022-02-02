import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISES } from '../utils/queries';
import ExerciseList from '../components/ExerciseList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_EXERCISES);
  const exercises = data?.exercises || [];
  console.log(exercises);
  return (
    <main>
      <div className="view-container form-container">
        <div className="view-log">
          {' '}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ExerciseList exercises={exercises} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
