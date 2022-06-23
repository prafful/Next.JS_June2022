import axios from "axios";
import Link from "next/link";


function UserList({ users = [] }) {
    return (
        <div>
            <h1>List of users!</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (

                                <tr key={user.id}>
                                     <td>
                                       
                                            {user.id} 
                                        
                                    </td>
                                    <td>
                                        <Link href={`/users/${user.id}`} >
                                            {user.name} 
                                        </Link>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;


export async function getStaticProps() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("-------------------- in index of UserList start------------------------")
    console.log(response.data)
    console.log("-------------------- in index of UserList end------------------------")
    return {
        props: {
            users: response.data
        }
    }
}