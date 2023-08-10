export const getStepNumber = (s) => {
  const match = s.match(/STEP (\d+)/);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return null;
};

// Test
