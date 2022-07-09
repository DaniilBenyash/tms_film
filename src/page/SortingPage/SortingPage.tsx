import React, { useEffect, useState } from "react";
import { useFilterPost } from "../../features/filterPost";
import { Posts } from "../../components/Posts";
import { IOnePost } from "../../features/getOnePost/onePostSlice";
import { FilterOption } from "./components/FilterOption";

export const SortingPage = () => {

    const [posts, setPosts] = useState<IOnePost[]>([])
    const {filterPostInfo, errorFilter, filter, filterPost} = useFilterPost()
    
    useEffect(() => {    
        setPosts(filterPostInfo)
       
    },[filter])


    return (
        <div className="sorting-page">  
            <FilterOption option={filter}/>
            <Posts
                posts={posts}
                buttonMore={false}
                error={errorFilter}
            />
        </div>
    )
}