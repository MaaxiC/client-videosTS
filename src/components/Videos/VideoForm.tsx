import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { Video } from "./Video";
import * as videoService from './VideoService';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

type Params = string

const VideoForm = () => {

  const params = useParams<Params>()

  const initialState = {
    title: "", 
    description: "", 
    url: "",
  }

  const [video, setvideo] = useState<Video>(initialState)

  const handleInputChange = (e: InputChange) => {
    setvideo({...video, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!params.id) {
      await videoService.createVideo(video)
      toast.success('New video added')
      setvideo(initialState)
    } else {
      await videoService.updateVideo(params.id, video)
    }
  }

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id)
    const { title, description, url } = res.data
    setvideo({title, description, url})
  }

  useEffect(() =>{
    if (params.id) getVideo(params.id)
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New video</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Write a title"
                    autoFocus
                    value={video.title}
                    onChange= {handleInputChange}
                />
              </div>
              <div className="mt-4">
                <input
                    type="text"
                    name="url"
                    className="form-control"
                    placeholder="https://anysite.com"
                    value={video.url}
                    onChange= {handleInputChange}
                />
              </div>
              <div className="mt-4">
                <textarea
                    name="description"
                    className="form-control" 
                    rows={3}
                    placeholder="Write a description"
                    value={video.description}
                    onChange= {handleInputChange}
                ></textarea>
              </div>
              {
                params.id ?
                <button className="btn btn-info mt-4">Update video</button>
                :
                <button className="btn btn-primary mt-4">Create</button>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
