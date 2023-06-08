import { QueryResult } from 'pg';
import ToDo from '../../src/models/todo.ts';
import pool from '../modules/pool.ts';

export const getItems = async (): Promise<void | ToDo[]> => {
  const query = 'SELECT * FROM todos';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCompletedItems = async (): Promise<void | ToDo[]> => {
  const query = 'SELECT * FROM todos WHERE "isCompleted"=\'true\'';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUncompletedItems = async (): Promise<void | ToDo[]> => {
  const query = 'SELECT * FROM todos WHERE "isCompleted"=\'false\'';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createItem = async (
  newItem: ToDo
): Promise<void | QueryResult<any>> => {
  const query = `INSERT INTO todos 
  (name, image, "dateCreated", "dateDue", description, "isCompleted", priority, category)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;

  const queryParams = [
    newItem.name,
    newItem.image,
    newItem.dateCreated,
    newItem.dateDue,
    newItem.description,
    newItem.isCompleted,
    newItem.priority,
    newItem.category,
  ];

  try {
    return await pool.query(query, queryParams);
  } catch (error: any) {
    console.error(error);
  }
};

export const updateItem = async (
  id: string,
  updatedItem: ToDo
): Promise<void | QueryResult<any>> => {
  const query = `
  UPDATE todos SET
  name=$1, image=$2, "dateCreated"=$3, "dateDue"=$4, description=$5,
  "isCompleted"=$6, priority=$7, category=$8
  WHERE id=$9;
  `;

  const queryParams = [
    updatedItem.name,
    updatedItem.image,
    updatedItem.dateCreated,
    updatedItem.dateDue,
    updatedItem.description,
    updatedItem.isCompleted,
    updatedItem.priority,
    updatedItem.category,
    id,
  ];

  try {
    return await pool.query(query, queryParams);
  } catch (error: any) {
    console.error(error);
  }
};

export const deleteItem = async (
  id: string
): Promise<void | QueryResult<any>> => {
  const query = `DELETE FROM todos WHERE id=$1`;
  const queryParams = [id];

  try {
    return await pool.query(query, queryParams);
  } catch (error) {
    console.error(error);
  }
};
