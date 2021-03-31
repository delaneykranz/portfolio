import React from "react"
import { Box, Card } from 'rebass'
import Article from './Article.js'; 
import './Articles.css';
 
function Articles(props) {
  return (
    <Box>
      <Card
       className="Articles-Card"
        sx={{
          p: 1,
          borderRadius: 20,
          boxShadow: '0 0 80px rgba(0, 0, 0, .55)',
        }}
        >
        <Box px={4}>
          <div>
            <h1>Yeah, I guess I write</h1>
            <p>If you've met me in-person, I've probably found a way to tell you that I have a degree in English literature in addition to my CS degree. Here, I'll post some of my less-embarrassing writing.</p>
          </div>
        </Box>
      </Card>
      <Article 
        title="YOUR STICKY PLASTIC SEAT" 
        subheading="Recipient of the 2016 ASU Homecoming Writing Award: Creative Writing" 
        article=""
        ></Article>
    </Box>    
  )
}
 
export default Articles;