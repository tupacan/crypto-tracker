import styles from "./Search.module.scss";

function SearchBar({ handleSearch }) {
    return (
        <input
            className={styles.searchInput}
            onChange={handleSearch}
            type="text"
            placeholder="Search"
        />
    );
}

export default SearchBar;
