import React from "react"
import { Box, Card } from 'rebass'
import Article from './Article.js'; 
import './Articles.css';
import articles from './content/articles_consts';

let articlesList = [];

articles.forEach((item) => {
  articlesList.push( <Article title={item.title} subheading={item.subheading} content={item.content}></Article>)
})


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
      {articlesList}
    </Box>    
  )
}
 
export default Articles;