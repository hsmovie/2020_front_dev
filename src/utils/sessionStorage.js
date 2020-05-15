export const getSessionItem = (key) => {
  const value = sessionStorage.getItem(key);

  if (key === 'recentKeywords') return value === null ? [] : JSON.parse(value);
  else return value === null ? null : JSON.parse(value);
};

export const setSessionItem = (key, value) => {
  if (!value) return;
  sessionStorage.setItem(key, JSON.stringify(value));
};
