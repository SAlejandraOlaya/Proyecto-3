


export const getMinDate = () => {
    const today = new Date();
    const fifteenDaysAgo = new Date(today);
    fifteenDaysAgo.setDate(today.getDate() - 15);
    return fifteenDaysAgo.toISOString().split('T')[0];
  };
  
  export const getMaxDate = () => {
    const maxDate = new Date('2024-12-31');
    return maxDate.toISOString().split('T')[0];
  };
  