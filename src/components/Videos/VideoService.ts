import axios from 'axios'
import { Video } from './Video'

const API = 'https://api-videosts.herokuapp.com'

const getVideos = async () => {
    return await axios.get<Video[]>(`${API}/videos`)
}

const createVideo = async (video: Video) => {
    return await axios.post(`${API}/videos`, video)
}

const getVideo = async (id: string) => {
    return await axios.get<Video>(`${API}/videos/${id}`)
}

const updateVideo = async (id: string, video: Video) => {
    return await axios.put<Video>(`${API}/videos/${id}`, video)
}

const deleteVideo = async (id: string) => {
    return await axios.delete<Video>(`${API}/videos/${id}`)
}

export { getVideos, createVideo, getVideo, updateVideo, deleteVideo }