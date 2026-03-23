import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Profile() {

  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {

    const getUser = async () => {

      const id = localStorage.getItem("id")
      console.log("UserID:", id)

      if (!id) {
        navigate("/login")
        return
      }

      try {

        const response = await fetch(`http://localhost:8000/user/${id}`)
        console.log("Response:", response)

        const result = await response.json()
        console.log("User Data:", result)

        setData(result)

      } catch (error) {
        console.log("Error:", error)
      }

    }

    getUser()

  }, [])

  return (
    <div className="seller-application-section">
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{data?.name}</td>
          </tr>

          <tr>
            <th>User Name</th>
            <td>{data?.username}</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>{data?.email}</td>
          </tr>

          <tr>
            <th>Phone</th>
            <td>{data?.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}