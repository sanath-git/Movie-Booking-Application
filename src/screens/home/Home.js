import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import SingleLineImageList from "./SingleLineImageList";
import moviesData from "../../common/moviesData";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { moviesData: moviesData };
  }
  render() {
    return (
      <div>
        <Header />
        <span className="headingUpComingMovies">Upcoming Movies</span>
        <SingleLineImageList moviesData={this.state.moviesData} />

        <div className="flex-container">
          <div className="left">
            <ImageList cols={4} rowHeight={350}>
              {this.state.moviesData.map((item) => (
                <ImageListItem key={item.id} className="featuredImageContainer">
                  <img
                    src={item.poster_url}
                    srcSet={item.poster_url}
                    alt={item.title}
                    loading="lazy"
                    className="featuredImage"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={`Release Date : ${new Date(
                      item.release_date
                    ).toDateString()}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}

export default Home;
