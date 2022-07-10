import React, { useEffect, useState } from "react";
import { useFilterPost } from "../../features/filterPost";
import { Posts } from "../../components/Posts";
import { IOnePost } from "../../features/getOnePost/onePostSlice";


export const SortingPage = () => {

    const [posts, setPosts] = useState<IOnePost[]>([])
    const {filterPostInfo, errorFilter, filter} = useFilterPost()
    
    useEffect(() => {    
        setPosts(filterPostInfo)  
    },[filter, filterPostInfo])

    return (
        <>
            <Posts
                posts={posts}
                buttonMore={false}
                error={errorFilter}
                option={filter}
            />
        </>
    )
}