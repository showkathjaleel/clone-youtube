


import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import SearchCard from "../Components/SearchCard";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Spinner from "../Components/Spinner";
import Card from "../Components/Card";
// import { clearVideos } from "../Store";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
// import { HomePageVideos } from "../Types";
import { useNavigate } from "react-router-dom";
import { getHomePageVideos } from "../Store/reducer/getHomePageVideos";
import { log } from "console";
import { HomePageVideos } from "../Types";
// import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
//   const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(getHomePageVideos(false))
    console.log(videos,'videos');
    
    // dispatch(clearVideos());
    // if (searchTerm === "") navigate("/");
    // else {
    //   dispatch(getSearchPageVideos(false));
    // }
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          // <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll
               dataLength={videos.length}
               next={() => dispatch(
                getHomePageVideos
               // getSearchPageVideos
                (true))}
               hasMore={videos.length < 500}
               loader={<Spinner />}
               height={600}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5">
                    <Card data={item} key={item.videoId} />
                  </div>
                );
              })}
            </InfiniteScroll>
          // </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}