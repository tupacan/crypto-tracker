import styles from "../CoinList/CoinList.module.scss";
import Row from "./Row";

export default function CoinList({ filteredCoins }) {
    return (
        <table className={styles.tableWrap}>
            <thead className={styles.tableHead}>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>1h %</td>
                    <td>24h %</td>
                    <td>7d %</td>
                    <td>Market Cap</td>
                    {/* <td>Total Volume</td> */}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin) => {
                    return <Row coin={coin} />;
                })}
            </tbody>
        </table>
    );
}
