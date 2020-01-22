import React, { Component } from 'react'
import YouTube from 'react-youtube'
import Comment from './Comment'

class Video extends Component {
    constructor() {
        super()
        this.state = {
            videoId: this.props.match.params.videoId,
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
                    id={this.props.id}
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