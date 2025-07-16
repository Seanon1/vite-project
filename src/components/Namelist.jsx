// import React from 'react'
// const names = ['John', 'Jane', 'Bob'];

// function Namelist() {
//   return (
//     <div>
//         <ul>
//             {names.map((name, index) => (
//                 <li key={index}>{name}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Namelist

import React from 'react'

const users = [
    {id: 1001, name: "John"},
    {id: 1002, name: "Jane"},
    {id: 1003, name: "Alice"},
    {id: 1004, name: "Bob"},

]

function Namelist() {
  return (
    <div>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Namelist