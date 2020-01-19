import React, { Component } from 'react'
import YouTube from 'react-youtube'

class Video extends Component {
    constructor() {
        super()
       this.state = {
        submitted: false,
        comment: {}
        }
    }

onReady = (event) =>{
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
                <YouTube 
                id={this.props.id}
                onReady ={this.onReady}
                opt={opts}
                />
                <hr></hr>
                <div className="submit-comment">
                    <form className='comment-form'>
                        <label for="name">Name</label>
                        <br />
                        <input type='text' placeholder='Name..' />
                        <br />
                        <label for="comment">Comment</label>
                        <br />
                        <input type='text' placeholder='...' />
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
                <hr></hr>

                <div className="comments">
                </div>

            </div>

        )
    }

}

export default Video