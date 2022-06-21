import { useRouter } from "next/router";

function DocChildPages() {

    const router = useRouter()
    console.log(router)
    const {params = []} = router.query
    const path = router.asPath
    console.log(params)
    console.log(params.length)

    if (params.length === 1) {
        return (
           <div>
                <h1>Doc page at level: {params.length}</h1>
                <h2>Route 0: {params[0]}</h2>
                <h2>Path: {path}</h2>
           </div> 
        )
    }

    if (params.length === 2) {
        return (
           <div>
                <h1>Doc page at level: {params.length}</h1>
                <h2>Route 0: {params[0]}</h2>
                <h2>Route 1 {params[1]}</h2>
                <h2>Path: {path}</h2>
           </div> 
        )
    }

    if (params.length === 3) {
        return (
           <div>
                <h1>Doc page at level: {params.length}</h1>
                <h2>Route 0: {params[0]}</h2>
                <h2>Route 1 {params[1]}</h2>
                <h2>Route 2 {params[2]}</h2>
                <h2>Path: {path}</h2>
           </div> 
        )
    }


    return ( 
        <div>
            <h1>Doc Child Pages!</h1>
            <p>Length of route: {params.length}</p>
        </div>
     );
}

export default DocChildPages;