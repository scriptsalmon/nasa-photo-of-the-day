import React from 'react'

export default function SearchBar(props) {
    const {date, changeDate} = props;

    function dateSearch (e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <div className="SearchBar">
            <label htmlFor="date">Photo by Date </label>
            <input
            id="date"
            type="date"
            value={date}
            onChange={dateSearch}
            />
        </div>
    )
}
