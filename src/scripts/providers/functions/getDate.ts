const getMonthYear = {
  monthYear: () => {
    const today = new Date();
    const monthYear = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
    return monthYear;
  },
  year: () => {
    const today = new Date();
    const monthYear = today.toLocaleDateString("en-US", {
      year: "numeric",
    });
    return monthYear;
  },
};

export default getMonthYear;
