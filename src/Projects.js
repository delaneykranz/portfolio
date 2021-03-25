import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link=""
        image=""
        title="2016 Homecoming Writing Award"
        category="based on what?"
      />
    </div>
  )
}
 
export default Projects;