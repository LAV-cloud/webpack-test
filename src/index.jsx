import Post from '@models/Post';
import React from 'react';
import { render } from 'react-dom';
import './babel';
import './styles/styles.scss';
import db from './assets/db.json';
// import WebpackLogo from './assets/.png'

const post = new Post('Webpack title');
console.log('Post to string:', post.toString());

console.log('users:', db.users);

const App = () => (
  <div className="wrapper">
    <h1 className="text">Hello, user!</h1>
  </div>
);

render(<App />, document.getElementById('app'));
