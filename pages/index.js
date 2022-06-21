import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Hello Next. This is default!!!!</h1>


            <Link href='/help'>
                <a><span>Help</span></a>
            </Link> &nbsp;
            <Link href='/catalog'>
                <a><span>Catalog</span> </a>
            </Link>&nbsp;
            <Link href='/users'>
                <a><span>Users</span> </a>
            </Link>
&nbsp;


        </div>
    );
}

export default Home;