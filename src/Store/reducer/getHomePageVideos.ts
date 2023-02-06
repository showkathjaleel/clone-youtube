
// npm i dotenv
import {createAsyncThunk} from "@reduxjs/toolkit"
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.YOUTUBE_DATA_API_KEY)

// const API_KEY=process.env.YOUTUBE_DATA_API_KEY
// export const getHomePageVideos=createAsyncThunk("youtubeApp/homePageVideos")