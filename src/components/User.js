import { Link } from "react-router-dom"
import Loading from "./Loading"
import { Card } from "./Card"
import { useEffect, useState } from "react"

export default function User(){
    
        const [loading, setLoading] = useState(true)
        const [user, setUser] = useState([  
            {
                "id": 1,
                "email": "john@mail.com",
                "password": "changeme",
                "name": "Jhon",
                "role": "customer",
                "avatar": "https://picsum.photos/640/640?r=4035",
                "creationAt": "2023-05-18T06:15:37.000Z",
                "updatedAt": "2023-05-18T06:15:37.000Z"
              },])
        const getUser = () => {
            fetch("https://api.escuelajs.co/api/v1/users")
            .then(resp => resp.json())
            .then(resp => {
                setUser(resp)
                setLoading(false) 
                // loading is set to false when data response 
            })
        }
        // when page load
        useEffect(() => {
            console.log(" in use effect")
            getUser()
        }, [])
        return(
            <div className="container mt-5">
                <h1 className="mb-3">User</h1>
                <div className="row g-3">
                    {
                        loading ? <Loading /> : user.map(use => (
                            <div className='col-12 col-sm-6 col-md-3'>
                                <Link to={`/user/${use.id}`} className="text-decoration-none">
                                    <Card title={use.name} thumbnail={use.avatar} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
        
      
