import React, { Component } from 'react'
import YouTube from 'react-youtube'
import Comment from './Comment'
import axios from 'axios'
import API_KEY from '../secrets'

class Video extends Component {
    constructor() {
        super()
        this.state = {
            videoId: this.props.match.params.videoId,
            video:null,
            submitted: false,
            nameInput: '',
            commentInput: '',
            comments: []
        }
    }

    onReady = (event) => {
        event.target.pauseVideo()
    }

    // submitComment = () =>{


    // }

    // displayComment = () =>{

    // }

    async componentDidMount() {
        const videoId = this.props.match.params.videoId
        const rerouteToVideo = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
        try {
            const { data } = await axios.get(rerouteToVideo)
            console.log(data)
            this.setState({
                video: data.items[0]
            })
        } catch (error) {
            console.log(error)
        }

    }

    handlePostClick = async (event) => {
        console.log('rerouting to video pg')
       
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div className="video-container">
                <h1>Video</h1>
            
                <YouTube
                    id={this.videoId}
                    onReady={this.onReady}
                    opt={opts}
                />

                <hr></hr>
                <div className="submit-comment">
                    <form className='comment-form'>
                        <label for="name">Name</label>
                        <br />
                        <input type='text' placeholder='Name..' name ='name' />
                        <br />
                        <label for="comment">Comment</label>
                        <br />
                        <input type='text' placeholder='...' name='comment'/>
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
                <hr></hr>

                <div className="comments">
                    {
                        this.comments.push(
                            <Comment
                                name={this.comment.name}
                                comment={this.comment.comment}
                            />)
                    }
                </div>

            </div>

        )
    }

}

export default Video