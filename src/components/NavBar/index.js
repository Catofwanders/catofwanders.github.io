import React from 'react';
import styled from 'styled-components';
import { func, number } from 'prop-types';
import { SIZES_LIST } from '../../helpers/lists';

const NavWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-right: 10px;
  }
`;

const NavBar = ({ size, setSize }) => {
  return (
    <NavWrap>
      <p>Choice pairs size: </p>
      <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
        {Object.keys(SIZES_LIST).map((item) => (
          <option key={`NavBar-${item}`} value={item}>
            {item} pairs
          </option>
        ))}
      </select>
    </NavWrap>
  );
};

NavBar.propTypes = {
  size: number.isRequired,
  setSize: func.isRequired,
};

export default NavBar;
