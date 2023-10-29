import React from 'react'

const Newsitem=(props)=> {
        let {title, description, imageurl,newsUrl,author,date,source} = props;
        return (
            <div>
                <div className="card my-3" >
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                <span className="badge rounded-pill text-bg-danger" style={{left:'95%',zIndex:'1'}}>{source}</span>
                </div>
                    <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body" >
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default Newsitem