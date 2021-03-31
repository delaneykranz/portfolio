import React from 'react';
import logo from './logo_doc.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import { Box, Card, Flex } from 'rebass'
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
    <div className="App">
      <Flex className="flexbox" alignContent='center'>
      <Box className="wrapper" px={10} width={3/4} Reflex>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          

          <Card className="navigation-bar"
            sx={{
              p: 1,
              px: 2,
              borderRadius: 20,
              boxShadow: '0 0 80px rgba(0, 0, 0, .55)',
            }}
          >
            <Box>
              <div className="navigation-sub">
                <img src={logo} className="logo" alt="Logo Image" />
                <Link to="/" className="item">Delaney Kranz</Link>                             
                  <Link to="/articles" className="item">Writing</Link>
                  {/*<Link to="/projects" className="item">Projects</Link>*/}
              </div>
              </Box>
            </Card>
      
            <Box className="content">
              <Route exact path="/" component={About} />
              <Route path="/articles" component={Articles} />
              {/*<Route path="/about" component={Projects} />*/}
            </Box>
        </BrowserRouter>
      </Box>
      </Flex>
    </div>
  );
}
 
export default App;