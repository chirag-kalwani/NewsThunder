import React, {Component} from 'react';

class NewsItem extends Component {
    render() {
        let {title, description, imgUrl, newUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={imgUrl} className="card-img-top" alt="Not Found"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More --></a>
                    </div>
                </div>
            </div>
        );
    }
}


export default NewsItem;