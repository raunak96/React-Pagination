import React from 'react';

const Pagination = ({postsPerPage,totalPosts,handleClick,currentPage}) => {
    const Pages=[];
    for(var i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
        Pages.push(i);
    return (
        <nav>
            <ul class="pagination justify-content-center">
                {
                    Pages.map(page=>(
                        <li key={page} className={`${page === currentPage?'active':''} page-item`}>
                            <a href="!#" className="page-link" onClick={(e)=>{e.preventDefault();handleClick(page)}}>{page}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;