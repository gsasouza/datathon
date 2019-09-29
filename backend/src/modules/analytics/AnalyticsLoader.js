import axios from 'axios';

export const getExpensesInYear = async () => {
  const result = await axios.get('http://localhost:5000/api/database/expenses');
  console.log(result)
  return 0;
}
