import React, { useEffect, useState } from "react";
import { fetchAll, fetchYears } from "../fake.api/episodes.api";
import Episode from "./episode";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";

const EpisodesList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [episodes, setEpisodes] = useState([]);
    const [years, setYears] = useState([]);
    const [filter, setFilter] = useState();

    const getEpisodes = (year) => {
        fetchAll(year).then(response => setEpisodes(response));
        setCurrentPage(1);
    };
    useEffect(() => {
        getEpisodes(filter);
    }, [filter]);
    useEffect(() => {
        fetchYears().then(response => setYears(response));
    }, []);

    const handlePageChange = pageIndex => setCurrentPage(pageIndex);
    const handleFilterChange = filter => setFilter(filter);
    const handleReset = () => setFilter();

    const count = episodes.length;
    const pageSize = 6;

    const pageEpisodes = paginate(episodes, currentPage, pageSize);
    return (
        <div className="container pt-2">
            <div className="row">
                <div className="col-4">
                    { !!years.length && (
                        <>
                            <GroupList
                                items={ years }
                                filter={ filter }
                                onFilterChange={ handleFilterChange }
                            />
                            <hr />
                            <div className="d-grid">
                                <button
                                    className="btn btn-m btn-primary"
                                    onClick={ handleReset }
                                >
                                    Очитстить
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <div className="col-8">
                    <div className="row">
                        { pageEpisodes.map((episode) => (
                            <Episode key={episode.id} {...episode} />
                        )) }
                    </div>
                    <div className="row">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodesList;
