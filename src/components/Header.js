import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
  background-color: purple;
`;

// would also style the header, since that's all that this page returns
// const StyledWrapper = styled.section`
//   background-color: orange;
// `;

function Header() {
  return (
    <React.Fragment>
        <HelpQueueHeader>
          <h1>Help Queue</h1>
        </HelpQueueHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;