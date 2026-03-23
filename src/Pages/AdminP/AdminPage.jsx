import React from 'react'
import Hero from '../../components/Hero'
import AdmiinSideBar from '../../components/AdminC/AdminSideBar'

function AdminPage() {
  return (
    <>


<div className="container-fluid my-3">
  <div className="row g-4">   {/* g-0 important */}
    
    {/* Sidebar */}
    <div className="col-12 col-md-3 sidebar">
      <AdmiinSideBar />
    </div>

    {/* Main Content */}
    <div className="col-12 col-md-9 main-content">
      <h5 className="text-light p-3" style={{ background: "#ae1c9a" }}>
        Admin-Profile
      </h5>
      <table className='table table-striped table-bordered'>
        <tbody>
            <tr >
                <th>Name</th>
                <td>Sanjana Tiwari</td>
            </tr>
            <tr>
                <th>User-Name</th>
                <td>Sanjana</td>
            </tr>
            <tr>
                <th>E-mail</th>
                <td>sanjanat0609@gmail.com</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>9548554933</td>
            </tr>
            <tr>
                <th>Role</th>
                <td>Super-Admin</td>
            </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>
<div style={{height:100}}></div>
</>
  )
}

export default AdminPage
