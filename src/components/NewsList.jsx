import React from 'react'
import NewsListComponent from './NewsListComponent';



const NewsList =(props)=>{
    
    const items= props.news.map((item) => {
        return(
         <NewsListComponent key={item.id } item={item}/>
        )
    });
  
    return(
    <div>   
        {props.children}
        {items} 
     </div>
 
    )
}
    
    

export default NewsList