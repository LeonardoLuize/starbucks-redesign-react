import Head from "next/head";
import { Menu } from "../components/Menu";

export default function menu(){
    return(
        <>
            <Head><title>Starbucks | Menu</title></Head>
            <Menu></Menu>
        </>
    )
}