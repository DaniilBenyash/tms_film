import React, { useEffect, useState } from "react";
import './SearchPage.scss';
import { Posts } from "../../components/Posts";
import { useSearchPosts } from "../../features/searchPost";
import { type RequestForPosts } from "../../features/searchPost/searchPostSlice";

export const SearchPage = () => {

    const { searchPosts, infoSearchPosts, numberOfSearchPost, requestForSearchPosts, fetchSearch, errorFetchSearchPost } = useSearchPosts()

    const [limitPage, setLimitPage] = useState(false)

    const getMorePosts = () => {  
        if(searchPosts && requestForSearchPosts){
            const page = (searchPosts?.length / 10) + 1   
            const request: RequestForPosts = {
                numberPage:page,
                search: requestForSearchPosts?.search
            }
            fetchSearch(request)
        }
    }

    useEffect(() => {
        if(searchPosts){
            const maxPage = Math.ceil((Number(numberOfSearchPost) / 10) + 1)
            const page = Math.ceil((searchPosts?.length / 10) + 1)
            
            if(maxPage === page){
                setLimitPage(true)
            }
            
        }
    }, [searchPosts, numberOfSearchPost])

    return (
        <>
            <Posts
                posts={infoSearchPosts}
                error={errorFetchSearchPost}
                onClickMore={getMorePosts}
                limit={limitPage}
                buttonMore={true}
            />
        </>
    )
}