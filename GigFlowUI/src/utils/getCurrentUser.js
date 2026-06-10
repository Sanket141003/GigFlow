const getCurrentUser = () => {
  try {
    const user = localStorage.getItem("currentUser");
    return user && user !== "null" ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export default getCurrentUser