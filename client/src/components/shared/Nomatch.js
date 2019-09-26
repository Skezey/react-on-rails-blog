import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <Header>Error 404 - page not found</Header>
    <Link to='/'>
      Home
    </Link>
  </>
)

export default Nomatch;
