import React from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar() {
    return (
        <>

            <div className="list-group ">
                <Link to='/Admin' className="list-group-item text-light" aria-current='true'><i className='bi bi-house'><span className='float-end mt-2'>Home</span></i></Link>
                <Link to='/Admin/MainCatagory' className="list-group-item text-light" aria-current='true'><i className='bi bi-card-checklist'><span className='float-end mt-2'>Main-Catagory</span></i></Link>
                <Link to='/Admin/SubCatagory' className="list-group-item text-light" aria-current='true'><i className='bi bi-card-list'><span className='float-end mt-2'>Sub-Catagory</span></i></Link>
                <Link to='/Admin/Brand' className="list-group-item text-light" aria-current='true'><i className='bi bi-list-stars'><span className='float-end mt-2'>Brand</span></i></Link>
                <Link to='/Admin/Product' className="list-group-item text-light" aria-current='true'><i className='bi bi-list-ol'><span className='float-end mt-2'>Product</span></i></Link>
                <Link to='/Admin/FAQ' className="list-group-item text-light" aria-current='true'><i className='bi bi-question-circle'><span className='float-end mt-2'>FAQ</span></i></Link>
                <Link to='/Admin/Feature' className="list-group-item text-light" aria-current='true'><i className='bi bi-list-check'><span className='float-end mt-2'>Features</span></i></Link>
                <Link to='/Admin/Setting' className="list-group-item text-light" aria-current='true'><i className='bi bi-gear'><span className='float-end mt-2'>settings</span></i></Link>
                <Link to='/Admin' className="list-group-item text-light" aria-current='true'><i className='bi bi-phone'><span className='float-end mt-2'>Contact-Us</span></i></Link>
                <Link to='/Admin' className="list-group-item text-light" aria-current='true'><i className='bi bi-cart-check'><span className='float-end mt-2'>Check-Out</span></i></Link>
                <Link to='/Admin/User' className="list-group-item text-light" aria-current='true'><i className='bi bi-person-plus'><span className='float-end mt-2'>User</span></i></Link>
            </div>

        </>
    )
}

export default AdminSideBar