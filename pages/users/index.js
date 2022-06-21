import axios from "axios";


function UserList({users =[]}) {
    return ( 
        <div>
            <h1>List of users!</h1>
            <ol>
            {
                users.map(user=>{
                    return(
                        <li key={user.id}>
                            {user.name} with id: {user.id}
                        </li>
                    )
                })
            }
            </ol>
        </div>
     );
}

export default UserList;


export async function getStaticProps(){

    const response =  await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("--------------------------------------------")   
    console.log(response.data)

   return {
    props:{
        users: response.data
    }
   }
}