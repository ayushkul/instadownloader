import styled from "styled-components";
import React, {useState} from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const HeaderText = styled.span`
  text-align: center;
  padding: 15px 5px;
  font-size: 24px;
  font-weight: bolder;
  background-color: greenyellow;
`;
const HeadingText = styled.span`
  text-align: center;
  margin: 15px 5px 5px;
  font-size: 20px;
  font-weight: bolder;
`;
const SubHeadingText = styled.span`
  text-align: center;
  margin: 5px;
  font-size: 16px;
`;
const URLInput = styled.input`
  outline: none;
  font-family: sans-serif;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  width: 100%;
  padding: 10px 15px;
  margin: 10px;
  font-size: 16px;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 6%);
`;
const DownloadButton = styled.span`
  outline: none;
  font-family: sans-serif;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

const URLContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const VideoDataComponent = (props) => {
    console.log('Class: , Function: VideoDataComponent ==', props);
    return (
        <div>
            {props.url}
        </div>
    );
}

function App() {
    const [url, setURL] = useState("");
    const [videoData, setVideoData] = useState("");
    const onDownloadClicked = () => {
        fetch("http://192.169.0.18:3003/insta")
            .then(async (data) => {
                let urls = await data.text()
                urls = await JSON.parse(urls);
                console.log('Class: App, Function: u ==', urls);
                setVideoData(urls)
            });
    };
    return (
        <Container>
            <HeaderText>Insta Downloader</HeaderText>
            <HeadingText>Instagram Reels Video Downloader</HeadingText>
            <SubHeadingText>
                This is a free tool to download Instagram reels videos to your Mobile or
                Pc as Mp4.
            </SubHeadingText>
            <URLContainer>
                <URLInput
                    onChange={(e) => setURL(e.target.value)}
                    value={url}
                    placeholder="Paste your instagram reels link here..."
                />
                <DownloadButton onClick={onDownloadClicked}>Download</DownloadButton>
            </URLContainer>
            <VideoDataComponent {...videoData} />
        </Container>
    );
}

export default App;
