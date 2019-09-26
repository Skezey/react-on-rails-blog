import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

// takes all the attributes a Post has as props
const Post = ({ id, title, body }) =>(
  <Segment>
    <Header>{ title }</Header>
    <p>{ body }</p>
  </Segment>
)

export default Post;
