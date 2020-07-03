import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyAzZhb8KS2ltVqpR_0En_KZ8TygROjDYe4'

class App extends React.Component {

    state = { videos: [], selectedVideo:null };

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
                params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        })
        this.setState({videos:response.data.items});
    };
    
    onVideoSelect = (video) => {
        
        this.setState({selectedVideo:video});
    };
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>    
            </div>
        );
    }
}
export default App;