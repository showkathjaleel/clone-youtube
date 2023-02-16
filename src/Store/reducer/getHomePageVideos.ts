
// npm i dotenv
import {createAsyncThunk} from "@reduxjs/toolkit"
import { RootState } from ".."

import axios from "axios"
import { YOUTUBE_DATA_API_URL } from "../../Utils/constants"
import { parseData } from "../../Utils"
import { HomePageVideos } from "../../Types"

 const YOUTUBE_DATA_API_KEY='AIzaSyCItEo5kIW6ZR10FnUS1DACsd62y2CX-jk'

export const getHomePageVideos=createAsyncThunk("youtubeApp/homePageVideos",
async (isNext:boolean,{getState})=>{
    const {
        youtubeApp:{    nextPageToken: nextPageTokenFromState, videos},
          }= getState() as RootState;
          const {data:{items,nextPageToken}}=await axios.get(
            `${YOUTUBE_DATA_API_URL}/search?maxResults=20&q="reactjs projects"&key=${YOUTUBE_DATA_API_KEY}&part=snippet&type=video&${
              isNext ? `pageToken=${nextPageTokenFromState}` : ""
            }`
          )

         // (`${YOUTUBE_DATA_API_URL}/search?maxResults=20&q="reactjs projects"&key=${YOUTUBE_DATA_API_KEY}&part=snippet&type=video${isNext ?`pageToken=${nextPageTokenFromState}:`})
          console.log(items,'items'); 
          const parsedData:HomePageVideos[]=await parseData(items)
          return {parsedData:[...videos,...parsedData],nextPageToken}
})