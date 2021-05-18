import styled from "styled-components";
import { useEffect, useState, useRef  } from 'react';


const InfiniteListContainer: any = styled.div`
     display: flex;
     flex:1;
     align-items: center;
     flex-direction: column;
     background-color: grey;
`;

const CellStyleContainer: any = styled.div`
     width:100%;
     height:300px;
     color:pink;
`;

 
 export const InfiniteList = (props: any) => {
    const [postList, setPostList] = useState({
        list: [1,2,3,4,5,6,7,8,9]
    }); 

    // tracking on which page we currently are
    const [page, setPage] = useState(1);
    // add loader refrence 
    const loader = useRef<HTMLDivElement>(null);

    useEffect(() => {
        var options = {
           root: null,
           rootMargin: "20px",
           threshold: 1.0
        };
       // initialize IntersectionObserver
       // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
           observer.observe(loader.current)
        }

   }, []);

   useEffect(() => {
    // here we simulate adding new posts to List
    const newList = postList.list.concat([Math.random(),Math.random(),Math.random(),Math.random()]);
    setPostList({
        list: newList
    })
}, [page])

const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {   
        setPage((page) => page + 1)
    }
}


return (
            <InfiniteListContainer>     
                    {
                        postList.list.map((post, index) => {
                            return (<CellStyleContainer key={index} className="post" >
                                <h2> {post } </h2>
                            </CellStyleContainer>)
                        })
                    }
                    <div className="loading" ref={loader}>
                            <h2>Load More</h2>
                   </div>
            </InfiniteListContainer>
            )

}
