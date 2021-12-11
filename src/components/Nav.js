import React from 'react'
import SearchBar from './SearchBar';

export default function Nav(props) {
    const {data} = props;

    return (
        <div className="Nav">
            <SearchBar data={data} component={SearchBar}/>
        </div>
    )
}
