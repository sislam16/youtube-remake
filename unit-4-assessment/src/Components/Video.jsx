import React, { Component } from 'react'
import YouTube from 'react-youtube'

class Video extends Component {
    constructor() {
        super()
        state = {
        submitted: false,
        comment: {}
        }
    }

submitComment = () =>{


}

displayComment = () =>{
    
}
    render() {
        return (
            <div className="video-container">
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