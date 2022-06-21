import {useRouter} from 'next/router'

function UserDetails() {
    const router = useRouter()
    console.log(router)
    const whichUser = router.query.userid

    return ( 
        <div>
            <h1>User Details for {whichUser}</h1>
        </div>
     );
}

export default UserDetails


