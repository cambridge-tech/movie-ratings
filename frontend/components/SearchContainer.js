import React from "react";
import Timeline from "./Timeline";
import styles from '../styles/SearchContainer.module.css'

const Search = (props) => {
    const {
        query,
        onChange,
        doSearch
    } = props;

    return (
        <form onSubmit={doSearch}>
            <input
                type="text"
                value={query}
                onChange={onChange}
            />
            <button onClick={doSearch}
                    type="submit">Search</button>
        </form>
    )
}

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            error: null,
            isLoaded: false,
            isLoading: false,
            result: null
        }

        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onChange(e) {
        this.setState({query: e.target.value,
                       isLoading: true});
    }

    onSearch(e) {
        e.preventDefault();

        const query = this.state.query;

        fetch(`http://localhost:8080/${query}`)
            .then(res => res.json())
            .then((result) => this.setState({
                result: result
            }))
   }

   render() {
        const { query, error, isLoaded, result } = this.state;

        let results;

        if (result) {
            results = <Timeline title={result.title}
                                timeline={result.timeline}/>
        }

       return (
            <div className={styles.container}>
                <Search
                    query={query}
                    onChange={this.onChange}
                    doSearch={this.onSearch}
                />
                {results}
            </div>
        )
    }
}
