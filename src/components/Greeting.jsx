import React from 'react'

function Greeting({ isLoggedIn }) {

    // if (isLoggedIn) {
    //     return <h1>Welcome Back!</h1>
    // } else {
    //     return <h1>Please Log In</h1>
    // }
//   return (
//     <div>
//         {/* <h1>{isLoggedIn ? 'Welcome back' : 'Please Log In'}</h1> */}
//     </div>
//   )

    return (
        // <div>
        //     {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
        // </div>
        <div>
            <h1>Hello User</h1>
            {isLoggedIn && <p>Welcome back! We missed you.</p>}
        </div>
    )
}

export default Greeting