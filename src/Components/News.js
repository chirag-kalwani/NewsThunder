import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
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
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=537546ef4b964485a77197786029fec9&language=en&pageSize=${this.props.pageSize}&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults
        });
    }

    async componentDidMount() { // run after render
        await this.fetchData(1);
    }

    fetchMoreData = async () => {
        await this.fetchData(this.state.page + 1);
        this.setState({
            page: this.state.page + 1
        });
    };

    render() {
        return (
            <>
                <h2 className='my-3 text-center'>News Thunder - Top News headlines</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                    style={{padding: "10px"}}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((ele, ind) => {
                                return (<div className="col-md-4 my-3" key={ind}>
                                    <NewsItem title={ele.title !== null ? ele.title : ' '}
                                              description={ele.description !== null ? ele.description : ' '}
                                              imgUrl={ele.urlToImage !== null ? ele.urlToImage : ' '}
                                              newUrl={ele.url !== null ? ele.url : ' '}
                                              author={ele.author}
                                              date={ele.publishedAt}
                                              source={ele.source['name']}/>
                                </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;