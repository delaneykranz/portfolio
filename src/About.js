import React from "react"
import { Box, Card } from 'rebass'
 
function About(props) {
  return (
    <Box>
      <Card
        sx={{
          p: 1,
          borderRadius: 20,
          boxShadow: '0 0 16px rgba(0, 0, 0, .55)',
        }}
        >
        <Box px={4}>
          <div>
            <h1>About Me</h1>
            <p>My name is Delaney Kranz. I'm a computer scientist and creative writer.</p>
            <p>I previously worked at Paypal and GoDaddy as a software engineering intern.</p>
            <p>Currently, I'm working on a master's in computer science at Arizona State University. My area of study is Big Data Systems. I especially like cloud computing and feature extraction in multimedia.</p>
            <p>In my spare time, I like to write short stories in LaTeX and make silly videos.</p>
            <p>If you have any questions, feel free to check out my LinkedIn or email me at azdelaney@gmail.com.</p>
          </div>
        </Box>
      </Card>
    </Box>
  )
}
 
export default About;