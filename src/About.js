import React from "react"
import { Box, Card } from 'rebass'
import resume from './content/resume_2020.pdf'
import transcript from './content/SSR_TSRPT.pdf'
import './About.css';
 
function About(props) {
  return (
    <Box>
      <Card
       className="About-Card"
        sx={{
          p: 1,
          borderRadius: 20,
          boxShadow: '0 0 80px rgba(0, 0, 0, .55)',
        }}
        >
        <Box px={4}>
          <div>
            <h1>About Me</h1>
            <p>My name is Delaney Kranz. I'm a computer scientist and creative writer.</p>
            <p>I have previously worked as a software engineering intern at two major tech companies. </p>
            <p>Here is <a className="About-link" href={resume}>my resume</a> as well as <a className="About-link" href={transcript}>my academic transcript</a>. (I like to brag about how many credits I've taken.)</p>
            <p>In summer of 2019, I worked at PayPal in San Jose, where I implemented a newsfeed and notification system using Apache Kafka, ElasticSearch and MySQL. In summer of 2020, I worked remotely for GoDaddy as a frontend ReactJS developer. I'll be returning to GoDaddy this summer as well!</p>
            <p>Currently, I'm working on a master's in computer science at Arizona State University. My area of study is Big Data Systems. I especially like cloud computing and feature extraction in multimedia.</p>
            <p>In my spare time, I like to write short stories in LaTeX and <a className="About-link" href="https://www.youtube.com/watch?v=_O0HBfzkszk">make silly videos</a>.</p>
            <p>If you have any questions, feel free to check out <a className="About-link" href="https://www.linkedin.com/in/delaney-kranz/">my Linkedin</a> or email me at <a className="About-link" href="mailto:azdelaney@gmail.com">azdelaney@gmail.com</a>.</p>
          </div>
        </Box>
      </Card>
    </Box>
  )
}
 
export default About;