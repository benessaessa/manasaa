import React, { useState, useEffect } from "react"

const Paginator = ({ initialPage, items, service,shouldGetData, setShouldGetData,pageOptions, setData, setPageOptions, filtersParams = {} }) => {
    const [pager, setPager] = useState(null)
    const [paramsData, setParamsData] = useState(null)

 
    useEffect(() => {
       if(shouldGetData){   
        setPage(pager?.currentPage)
       }
    }, [shouldGetData])

    useEffect(() => {
         setParamsData(filtersParams)
    }, [filtersParams])
    
    useEffect(() => {
        if (!paramsData) {
             return
        } else {
             setPage(1)
        }
    }, [paramsData])

    const setPage = async (page) => {
         let pagerData = pager;
         if (page < 1 ) {
            return;
        }
     
        // get new pager object for specified page
        pagerData = getPager(items.length, page);


        // get new page of items from items array
        // var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        const params = {
            page: page,
            ...paramsData
        }
        setData([]);
        const { data: itemList } = await service.getList(params);         
        //  if(itemList.data.length===0 && pager?.currentPage===pager?.totalPages&&shouldGetData){
        //      setPage(pager?.totalPages-1)
        //     return 
        // }
        setShouldGetData(false)
        setPageOptions({ ...pageOptions, totalSize: itemList.meta.total });
        pagerData = getPager(itemList.meta.total, page);
        setData([...itemList.data]);
         // update state
        setPager(pagerData);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        // call change page function in parent component
    }

    const getPager = (totalItems, currentPage, pageSize) => {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
         return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    if (!pager ?.pages || pager.pages ?.length <= 1) {
        // don't display pager if there is only 1 page
        return null;
    }


    return (
        <ul className="pagination ">
            <li style={{ marginRight: "5px" }} className='page-item  rounded'>
                <a className='page-link border-0   rounded text-dark '
                    style={{ fontSize: "24px", opacity: pager ?.currentPage === 1 ? .3 : 1 }}
                    onClick={() => {
                        if (pager ?.currentPage === 1) {
                            return
                        } else {
                            setPage(pager ?.currentPage - 1)
                            return
                        }
                    }}>&lt;</a>
            </li>
            {pager ?.pages.map((page, index) =>
                <li key={index}
                    className={pager ?.currentPage === page ?
                        ' page-link border-0 rounded  text-light  ' :
                        'page-link border-0  rounded text-dark  '}
                >
                    <a className={pager ?.currentPage === page ?
                        ' page-link border-0 rounded  text-light  ' :
                        'page-link border-0  rounded text-dark  '}
                        style={{ userSelect: "none", background: pager ?.currentPage === page ? "#25375c" : "#ffffff", fontSize: "12px", }}
                        onClick={() => {
                            if (page == pager ?.currentPage) {
                                return
                            } else {
                                setPage(page)
                            }
                        }}>{page}</a>
                </li>
            )}
            <li style={{ marginRight: "5px" }} className='page-item  rounded'  >
                <a className='page-link border-0   rounded text-dark '
                    style={{ fontSize: "24px", opacity: pager ?.currentPage === pager ?.totalPages ? .3 : 1 }}
                    onClick={() => {
                        if (pager ?.currentPage === pager ?.totalPages) {
                            return
                        } else {
                            setPage(pager ?.currentPage + 1)
                        }
                    }}>&gt;</a>
            </li>
        </ul>
    );
}



Paginator.defaultProps = {
    initialPage: 1,
    pageSize: 10,
    items: []
};
export default Paginator;