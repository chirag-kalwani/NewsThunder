import React, {Component} from 'react';

class NewsItem extends Component {
    render() {
        let {title, description, imgUrl, newUrl, author, date, source} = this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <div className='d-flex position-absolute' style={{right: 0}}>
                        <span className="badge rounded-pill bg-danger"> {source}</span>
                    </div>
                    <img src={imgUrl} className="card-img-top" alt="Not Found"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small
                            className="text-muted">By {author === null ? 'Unknown' : author} on {new Date(date).toDateString()}</small>
                        </p>
                        <a href={newUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More --></a>
                    </div>
                </div>
            </div>
        );
    }
}


export default NewsItem;