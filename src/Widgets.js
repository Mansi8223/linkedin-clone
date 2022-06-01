import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon/>

            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>
        {newsArticle("React is back", "Top news - 9099 readers")}
        {newsArticle("Coronavirus: India updates", "Top news - 886 readers")}
        {newsArticle("Tesla hits new highs", "Cars and auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
        {newsArticle("Is React too good", "Code - 123 readers")}
        {newsArticle("Course launch!", "Top news - 6503 readers")}
    </div>
  )
}

export default Widgets