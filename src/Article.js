import React from "react"
import { Box, Card } from 'rebass'
import './Article.css';
 
function Article(props) {
  return (
    <Box className="Article-Box">
      <Card
       className="Article-Card"
        sx={{
          p: 1,
          borderRadius: 20,
          boxShadow: '0 0 80px rgba(0, 0, 0, .55)',
        }}
        >
        <Box px={4}>
          <div>
            <h1 className="Article-h1">{props.title}</h1>
            <h3 className="Article-h3"><i>{props.subheading}</i></h3>
            <p>{props.article}</p>
          </div>
        </Box>
      </Card>
    </Box>
  )
}
 
export default Article;