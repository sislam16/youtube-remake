import React, {Component} from 'react'

class Thumbnail extends  Component{
constructor(props){
    super()
}

render() {
return(
<div className ='card'>
    <img src ={this.props.imgSrc} />
    <h4>{this.props.title}</h4>

</div>
)
}
}

export default Thumbnail