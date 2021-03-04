import Head from "next/head";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Products } from "../components/Products";

export default function HomePage(){
    return(
        <>
            <Head> 
                <title>Starbucks Coffee Company</title>
            </Head>
            <Menu />
            <Banner />
            <Products />
            
        </>
    );
}