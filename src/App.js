import React from 'react';
import logo from './logo_doc.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import { Box, Card } from 'rebass'
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
    <Box px={10} width={1/2}>
      <BrowserRouter>
        <div className="App">

        <Card className="navigation-bar"
          sx={{
            p: 1,
            px: 2,
            borderRadius: 20,
            boxShadow: '0 0 16px rgba(0, 0, 0, .55)',
           }}
        >
            <div className="navigation-sub">
              <img src={logo} className="logo" alt="Logo Image" />
              <Link to="/" className="item">Delaney Kranz</Link>                             
                {/*<Link to="/articles" className="item">Articles</Link>
                <Link to="/projects" className="item">Projects</Link>*/}
            </div>
          </Card>
    
          <Box className="content">
            <Route exact path="/" component={About} />
            {/*<Route path="/articles" component={Articles} />
            <Route path="/about" component={Projects} />*/}
          </Box>
          
          

        </div>
      </BrowserRouter>
    </Box>
  );
}
 
export default App;