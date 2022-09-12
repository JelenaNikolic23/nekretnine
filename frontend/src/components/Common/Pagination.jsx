export default function Pagination(props) {
    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <nav className="pagination-a">
                    <ul className="pagination justify-content-end">

                        {props.pagination.currentPage > 1 && 
                        <>
                        <li className="page-item">
                            <button className="page-link" onClick={() => props.changePage(props.pagination.currentPage - 1)} tabIndex="-1">
                                <span className="bi bi-chevron-left"></span>
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => props.changePage(1)}>1</button>
                        </li>
                        </>
                        }

                        {props.pagination.currentPage - 3 > 1 && 
                        <li className="page-item disabled">
                            <button className="page-link">
                                <span className="bi bi-three-dots"></span>
                            </button>
                        </li>
                        }

                        {props.pagination.currentPage - 2 > 1 && 
                        <li className="page-item ">
                            <button className="page-link" onClick={() => props.changePage(props.pagination.currentPage - 2)}>{props.pagination.currentPage - 2}</button>
                        </li>
                        }

                        {props.pagination.currentPage - 1 > 1 && 
                        <li className="page-item ">
                            <button className="page-link" onClick={() => props.changePage(props.pagination.currentPage - 1)}>{props.pagination.currentPage - 1}</button>
                        </li>
                        }

                        <li className="page-item active">
                            <button className="page-link">{props.pagination.currentPage}</button>
                        </li>

                        {props.pagination.currentPage + 1 < props.pagination.total && 
                        <li className="page-item ">
                            <button className="page-link" onClick={() => props.changePage(props.pagination.currentPage + 1)}>{props.pagination.currentPage + 1}</button>
                        </li>
                        }

                        {props.pagination.currentPage + 2 < props.pagination.total && 
                        <li className="page-item">
                            <button className="page-link" onClick={() => props.changePage(props.pagination.currentPage + 2)}>{props.pagination.currentPage + 2}</button>
                        </li>
                        }

                        {props.pagination.currentPage + 3 < props.pagination.total && 
                        <>
                        <li className="page-item disabled">
                            <button className="page-link">
                                <span className="bi bi-three-dots"></span>
                            </button>
                        </li>
                        </>
                        }

                        {props.pagination.total > props.pagination.currentPage &&
                        <>
                        <li className={"page-item"}>
                            <button className="page-link" onClick={() => props.changePage(props.pagination.total)}>{props.pagination.total}</button>
                        </li>
                        <li className="page-item next">
                            <button className="page-link" onClick={() => props.changePage(props.pagination.currentPage + 1)}>
                                <span className="bi bi-chevron-right"></span>
                            </button>
                        </li>
                        </>
                        }


                    </ul>
                </nav>
            </div>
        </div>
        </div>
    )
}