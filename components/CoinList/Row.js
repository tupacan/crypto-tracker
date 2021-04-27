import styles from "../CoinList/CoinList.module.scss";
import Image from "next/image";

function Row({ coin }) {
    const id = coin.id,
        rank = coin.market_cap_rank,
        image = coin.image,
        name = coin.name,
        symbol = coin.symbol,
        price = coin.current_price,
        priceChangePercentage1h = coin.price_change_percentage_1h_in_currency,
        priceChangePercentage24h = coin.price_change_percentage_24h_in_currency,
        priceChangePercentage7d = coin.price_change_percentage_7d_in_currency,
        marketCap = coin.market_cap,
        volume = coin.total_volume;

    return (
        <tr key={id}>
            <td>
                <span key={id}>{rank}</span>
            </td>
            <td>
                <span className={styles.coinNameWrap} key={id}>
                    <Image
                        src={image}
                        alt={`${name} Logo`}
                        className={styles.coinLogo}
                        width={25}
                        height={25}
                        key={id}
                    />
                    <span className={styles.coinInfo}>
                        <span className={styles.coinName}>{`${name}`}</span>
                        <span className={styles.coinMeta}>
                            <span className={styles.coinRankMobile}>#{rank}</span>
                            <span className={styles.coinSymbol}>{`${symbol}`}</span>
                        </span>
                    </span>
                </span>
            </td>
            <td>
                <span key={id}>&euro;{price.toLocaleString()}</span>
            </td>
            <td>
                <span
                    className={priceChangePercentage1h < 0 ? `${styles.red}` : `${styles.green}`}
                    key={id}
                >
                    {priceChangePercentage1h.toFixed(1)} %
                </span>
            </td>
            <td>
                <span
                    className={priceChangePercentage24h < 0 ? `${styles.red}` : `${styles.green}`}
                    key={id}
                >
                    {priceChangePercentage24h.toFixed(1)} %
                </span>
            </td>
            <td>
                <span
                    className={priceChangePercentage7d < 0 ? `${styles.red}` : `${styles.green}`}
                    key={id}
                >
                    {priceChangePercentage7d.toFixed(1)} %
                </span>
            </td>
            <td>
                <span key={id}>&euro;{volume.toLocaleString()}</span>
            </td>
        </tr>
    );
}

export default Row;
