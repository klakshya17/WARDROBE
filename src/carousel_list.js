import React from 'react'
import CarouselCard from './carousel.js'
import Carousel from 'react-bootstrap/Carousel';

const Cardlist=({carList})=>
{
	const carousel_array =carList.map((user,i)=>
    {return(<CarouselCard title={carList[i].title} description={carList[i].description} source={carList[i].source} />);}
    )
	return(
    <div>
        
        <Carousel.Item>
       {carousel_array};
       </Carousel.Item>
       
    </div>
    );
}
export default Cardlist;