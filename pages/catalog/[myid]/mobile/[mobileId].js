import { useRouter } from "next/router";

function MobileDetail() {

    const router = useRouter()
    console.log(router)

    return ( 
        <div>
            <h1>Category id: {router.query.myid}</h1>
            <h1>Mobile id: {router.query.mobileId}</h1>
        </div>
     );
}

export default MobileDetail;