/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetFeature } from '../Redux/ActionCreators/FeatureActionCreators'
import { Icons } from 'react-toastify'

function Features() {

    let FeatureStateData = useSelector(state=>state.FeatureStateData)
    let dispatch = useDispatch()

    useEffect(()=>{
        (()=>dispatch(GetFeature()))()
    },[])
  return (
    <>
    {/* <h3 className='text-center'>Features</h3> */}
    <section className="about-service product ">
        <div className="container">
            <div className="about-service-section">
                <div className="row">
                {
                    FeatureStateData.filter(x=>x.status)?.map(item=>{
                    return <div key={item.id} className='col-lg-3'>
                         <div className="about-wrapper">
                    <div className="wrapper-img My-Color px-5 px-4 text-white p-2" style={{borderRadius:"50%"}}>
                        <span dangerouslySetInnerHTML={{__html:item.icon}} style={{fontSize:50}}/>
                    </div>
                    <div className="wrapper-info">
                        <h5 className="wrapper-details about-details">{item.name}</h5>
                        <p>{item.ShortDescription}</p>
                    </div>
                </div>
                    </div>
                    })
                }
                
               
                
                
                
               
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Features