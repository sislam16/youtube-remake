import React, { Component } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import API_KEY from '../secrets'
import Thumbnail from './Thumbnail'





class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            feed: []
        }
    }

    handleInput = (event) => {
        console.log(event.target.value)
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('form submitted')

        const { input, feed } = this.state
        const getVideos = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${input}&key=${API_KEY}`
        try {
            const { data } = await axios.get(getVideos)
            let payload = data.items
            console.log(data.items)

            this.setState({
                feed: payload
            })

            // feed.map(el =>(
            //     <Thumbnail
            //     imgSrc = {el.snippet.thumbnails.default.url}
            //     title = {el.snippet.title}
            //     > 
            //     {el}
            //     </Thumbnail>
            // ))
            console.log(this.state)
        } catch (error) {
            console.log(error)
        }

    }


    render() {
        const{feed, input} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleInput} placeholder='Search...' />
                    <button>Search</button>
                </form>
                <div className="container">
                    {
                        feed.map(el =>(
                                <Thumbnail
                                imgSrc = {el.snippet.thumbnails.default.url}
                                title = {el.snippet.title}
                                > 
                                {el}
                                </Thumbnail>
                            ))
                    }
                    

                </div>
            </div>
        )
    }

}

export default Homepage