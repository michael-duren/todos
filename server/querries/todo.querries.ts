import pool from '../modules/pool.ts';

export const getItems = async () => {
  const query = 'SELECT * FROM todos';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err: any) {
    throw new Error(err);
  }
};
