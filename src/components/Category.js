import { useEffect, useState } from "react"
import { Card } from "./Card"
import Loading from "./Loading"
import { Link } from "react-router-dom"
export function Category(){
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([  {
        "id": 1,
        "name": "nuevo",
        "image": "https://picsum.photos/640/640?r=6532",
        "creationAt": "2023-05-18T06:15:37.000Z",
        "updatedAt": "2023-05-18T07:44:48.000Z"
      },
      {
        "id": 2,
        "name": "Electronics",
        "image": "https://picsum.photos/640/640?r=3865",
        "creationAt": "2023-05-18T06:15:37.000Z",
        "updatedAt": "2023-05-18T06:15:37.000Z"
      },])
    const getCategories = () => {
        fetch("https://api.escuelajs.co/api/v1/categories")
        .then(resp => resp.json())
        .then(resp => {
            setCategories(resp)
            setLoading(false) 
            // loading is set to false when data response 
        })
    }
    // when page load
    useEffect(() => {
        console.log(" in use effect")
        getCategories()
    }, [])
    return(
        <div className="container mt-5">
            <h1 className="mb-3">categories</h1>
            <div className="row g-3">
                {
                    loading ? <Loading /> : categories.map(cat => (
                        <div className='col-12 col-sm-6 col-md-3'>
                            <Link to={`/categories/${cat.id}`} className="text-decoration-none">
                                <Card title={cat.name} thumbnail={cat.image} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
    
