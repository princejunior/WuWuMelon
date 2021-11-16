import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            </Head>
            <Navbar/>
            {children}
            <Footer/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
        </>
    )
}

export default Layout;