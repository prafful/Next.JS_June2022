import { useRouter } from "next/router";

function CatalogDetail() {

    const router = useRouter()
    console.log(router)

    return ( 
        <div>
            <h1>Catalog id: {router.query.catalogId}</h1>
        </div>
     );
}

export default CatalogDetail;