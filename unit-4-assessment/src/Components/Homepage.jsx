import React, { Component } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import API_KEY from '../secrets'
import Thumbnail from './Thumbnail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            landingPage: true,
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
                feed: payload,
                landingPage: false
            })

            console.log(this.state)
        } catch (error) {
            console.log(error)
        }

    }

    // handlePostClick = async (event) => {
    //     console.log('rerouting to video pg')
        
    //     const rerouteToVideo = `https://www.googleapis.com/youtube/v3/video/`
    //     try {
    //         const { data } = await axios.get(rerouteToVideo)
    //         <Router>
    //             <Switch>
    //                 <Redirect to=`/video/${}` />
    //             </Switch>
    //         </Router>
    //     } catch (error) {
                console.log(error)
    //     }
    // }

    render() {
        const { feed, landingPage } = this.state
        if (landingPage) {
            return (
                <div className='homePg'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' onChange={this.handleInput} placeholder='Search...' />
                        <button>Search</button>
                    </form>
                    <div className='noSearch'>
                        <p>No Search Results Yet! Please submit a search above!</p>
                    </div>

                </div>
            )
        } else if (feed) {
            return (
                <div className='homePg'>
                    <form onSubmit={this.handleSubmit} className='Search'>
                        <input type='text' onChange={this.handleInput} placeholder='Search...' />
                        <button id='searchBtn'>Search</button>
                    </form>
                    <div className="container">

                        {
                            feed.map(el => (
                                <Thumbnail
                                    imgSrc={el.snippet.thumbnails.medium.url}
                                    title={el.snippet.title}
                                    id={el.snippet.channelId}
                                    key={el.snippet.channelId}
                                    handlePostClick = {this.handlePostClick}
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

}

export default Homepage