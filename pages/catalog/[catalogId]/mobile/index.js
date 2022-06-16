import { useRouter } from "next/router";


function MobileDetail() {

    const router = useRouter()
    console.log(router)

    return ( 
        <div>
            <h1> Mobile detail....for one of the mobile under id: {router.query.catalogId}</h1>
        </div>
     );
}

export default MobileDetail;