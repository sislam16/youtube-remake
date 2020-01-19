import React, {Component} from 'react'

class Thumbnail extends  Component{
constructor(props){
    super()
}

render() {
return(
<div className ='card' onClick={this.props.handlePostClick} id ={this.props.id}>
    <img src ={this.props.imgSrc} id ={this.props.id} alt={this.props.alt}/>
    <h4 id ={this.props.id}>{this.props.title}</h4>

</div>
)
}
}

export default Thumbnail