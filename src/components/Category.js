import { useState } from "react"
import { Card } from "./Card"
import Loading from "./Loading"
export function Category(){
    const [categories, setCategories] = useState([{}])
    const [loading, setLoading] = useState([{}])
    const fetchCategories
    return(
        <div className="container mt-5">
            <h1 className="mb-3">TOP PRODUCT</h1>
            <div className="row g-3">
                {
                    loading ? <Loading /> : products.map(product => (
                        <div className='col-12 col-sm-6 col-md-3'>
                            <Link to={`/products/${product.id}`} className="text-decoration-none">
                                <Card title={product.title} thumbnail={product.images[0]} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
    )
}