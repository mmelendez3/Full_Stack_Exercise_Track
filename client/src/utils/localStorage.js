export const removeExerciseId = (exerciseId) => {
  const savedExerciseIds = localStorage.getItem('exercises')
    ? JSON.parse(localStorage.getItem('exercises'))
    : null;

  if (!savedExerciseIds) {
    return false;
  }

  const updatedSavedExerciseIds = savedExerciseIds?.filter(
    (savedExerciseId) => savedExerciseId !== exerciseId
  );
  localStorage.setItem(
    'saved_exercises',
    JSON.stringify(updatedSavedExerciseIds)
  );

  return true;
};
