//function who return "Good Morning", "Good Afternoon" or "Good Evening" depending on the time of the day
export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};
