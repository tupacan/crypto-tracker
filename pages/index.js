import { useState } from "react";
import Head from "next/head";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";

export default function Home({ allCoins }) {
    const [search, setSearch] = useState("");

    const filteredCoins = allCoins.filter((coin) => {
        return (
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        );
    });

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    };

    return (
        <div>
            <Head>
                <title>Crypto Tracker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <SearchBar handleSearch={handleSearch} />
                <CoinList filteredCoins={filteredCoins} />
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
    );

    const allCoins = await res.json();

    return {
        props: {
            allCoins,
        },
    };
};
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export async function getStaticProps() {
//     // `getStaticProps` is invoked on the server-side,
//     // so this `fetcher` function will be executed on the server-side.
//     const allCoins = await fetcher(
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
//     );
//     return { props: { allCoins } };
// }
