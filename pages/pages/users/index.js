import axios from "axios";
import Link from "next/link";


function UserList({ users = [] }) {
    return (
        <div>
            <h1>List of users!</h1>
            <ol>
                {
                    users.map(user => {
                        return (
                            <Link href={`/users/${user.id}`} key={user.id}>
                                <li >
                                    {user.name} with id: {user.id}
                                </li>
                            </Link>
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default UserList;


export async function getStaticProps() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("--------------------------------------------")
    console.log(response.data)

    return {
        props: {
            users: response.data
        }
    }
}