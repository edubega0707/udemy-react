import React from 'react'
import classes from '../css/styles.css'

const NewsListComponent=({item})=>{
  

    return(
         <div className={classes.news_item}> 
             <h3>{item.title}</h3>
             <div>
                 {item.feed }
             </div>
         </div>
    )
}
export default   NewsListComponent 