import React from 'react'

const Lazyprof = ({details,handleout}) => {
  return (
    <div>
        {details ? (
                <>
                <div style={{display:'flex', justifyContent:'center'}} >
                  <img src={details.photoURL} width={'40%'} style={{borderRadius:'5px'}}/>
                </div>
                    <h2>Welcome {details.displayName}</h2>
                    <div>
                        <p>Email: {details.email}</p>
                       {/*} <p>First Name: {details.firstName}</p>
                        <p>Last Name: {details.lastName}</p>*/}
                    </div>
                    <button  onClick={handleout} className='btn btn-primary' style={{width:'60%', textAlign:'center', marginTop:'10px'}}>Log Out</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
    </div>
  )
}

export default Lazyprof
