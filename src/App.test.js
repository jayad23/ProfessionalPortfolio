// import { render, screen } from '@testing-library/react';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Portfolio/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App';

test('App snapShot test', ()=>{
  const component = renderer.create(<App/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot()
})

// it('renders without crashing', ()=>{
//   const div = document.createElement('div');
//   ReactDom.render(<App/>, div)
// })