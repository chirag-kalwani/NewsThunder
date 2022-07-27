import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async fetchData(page) {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=537546ef4b964485a77197786029fec9&pageSize=${this.props.pageSize}&page=${page}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.totalResults);
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults
        });
    }

    async componentDidMount() { // run after render
        await this.fetchData(1);
    }

    prevPage = async () => {
        let pageNo = this.state.page - 1;
        this.setState({page: pageNo});
        await this.fetchData(pageNo);
        window.scrollTo(0, 0);
    };
    nextPage = async () => {
        let pageNo = this.state.page + 1;
        this.setState({page: pageNo});
        await this.fetchData(pageNo);
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <>
                <div className='container'>
                    <h2 className='my-3'>News Thunder - Top News headlines</h2>
                    {this.state.loading && <Spinner/>}
                    {/* This is loop insie jsx to create as many Newsitems as we want */}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((ele) => {
                            return (<div className="col-md-4 my-3" key={ele.url !== null ? ele.url : ' '}>
                                <NewsItem title={ele.title !== null ? ele.title : ' '}
                                          description={ele.description !== null ? ele.description : ' '}
                                          imgUrl={ele.urlToImage !== null ? ele.urlToImage : ' '}
                                          newUrl={ele.url !== null ? ele.url : ' '}/>
                            </div>)
                        })}
                    </div>
                    {/* Buttons to navigate next and prev page */}
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" onClick={this.prevPage}
                                className="btn btn-dark">&larr; Prev
                        </button>
                        <button
                            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                            type="button"
                            onClick={this.nextPage}
                            className="btn btn-dark">Next &rarr;</button>
                    </div>
                </div>
            </>
        );
    }
}

export default News;