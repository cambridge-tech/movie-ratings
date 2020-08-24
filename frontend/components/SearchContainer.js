import React from "react";
import url from "url";
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

        const urlToFetch = url.resolve(this.props.apiAddress,
                                       this.state.query);

        fetch(urlToFetch)
            .then(res => res.json())
            .then((result) => this.setState({
                result: result
            }))
   }

   render() {
        const { query, error, isLoading, result } = this.state;

        let results;

        if (result) {
            const datasets = [{
                   label: 'Rotten Tomatoes Critic Rating',
                   data: result.timeline.map(e => ({t: e.date,
                                                   y: e.criticRating}))
                   }, {
                    label: 'Rotten Tomatoes Audience Rating',
                    data: result.timeline.map(e => ({t: e.date,
                                                     y: e.audienceRating}))
                   }];

            results = <div className={styles.results}><Timeline datasets={datasets}/></div>
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
