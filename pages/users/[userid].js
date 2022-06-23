import {useRouter} from 'next/router'
import axios from "axios";

function UserDetails({userdetail={}}) {
    const router = useRouter()
    console.log(router)
    const whichUser = router.query.userid

    return ( 
        <div>
            <h1>User Details for {whichUser}</h1>
            <h2>Name: {userdetail.name}</h2>
            <h3>Username: {userdetail.username}</h3>
            <h3>Latitude: {userdetail.address.geo.lat}</h3>
            <h3>Logitude: {userdetail.address.geo.lng}</h3>
        </div>
     );
}

export default UserDetails

export async function getStaticPaths(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("-----------------in get static path start---------------------------")
    console.log(response.data)
    console.log("-----------------in get static path end---------------------------")
    const responseData = response.data.map(user =>{
        // { params: {userid: "1"}}
        return {
            params: {
                userid:user.id
            }
        }
    })
    console.log("Array of params...... start")
   console.log(responseData)
   console.log("Array of params...... end")
   return {
    paths: responseData,
    fallback: false
}
    
    // return {
    //     paths:[
    //         { params: {userid: "1"}},
    //         {params: {userid: "2"}},
    //         {params: {userid: "3"}},
    //         { params: {userid: "4"}},
    //         {params: {userid: "5"}},
    //         {params: {userid: "6"}},
    //         { params: {userid: "7"}},
    //         {params: {userid: "8"}},
    //         {params: {userid: "9"}},
    //         { params: {userid: "10"}}
          
    //     ],
    //     fallback: false
    // }

}

export async function getStaticProps(context){
    console.log("-----------------in get static props start context---------------------------")
    console.log(context)
    const {params} = context
    console.log("-----------------in get static props end context ---------------------------")
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
    console.log("Received the user with id: " + params.userid + " from the api..." )
    console.log(response.data)

    return {
        props:{
            userdetail: response.data
        }
    }

}

