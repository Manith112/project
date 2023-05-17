import  {useState, userState} from 'react';

import { Card } from './Card';
import Product from './Products';




// state in hook - useState
function Home(){
    // define state
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState(
        [
        {
            id: 1,
            title: "Iphone",
            thumbnail: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg",
        },
        {
            id: 2, 
            title: "Iphone",
        thumbnail: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg",
        }
    ])
    return(
        <>
        <Product />
        </>
    )
}
export default Home; 