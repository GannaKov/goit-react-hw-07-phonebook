import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putFilter } from 'redux/filterSlice';
import { FiltrLabel, FiltrInput } from './Filter.styled';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
    dispatch(putFilter(e.currentTarget.value));
  };

  return (
    <FiltrLabel>
      Find contacts by name
      <FiltrInput type="text" value={filter} onChange={changeFilter} />
    </FiltrLabel>
  );
};
