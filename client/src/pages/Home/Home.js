import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./Home.css";
const Home = () => {
    const video = ["video2.mp4", "video3.mp4", "video4.mp4"];


    return (
        
        <div>
            <NavBar type="login" />
            <section className="home">
                <video
                    src={require("../../resources/videos/video1.mp4")}
                    muted
                    autoPlay
                    loop
                    className="video-slider active"
                ></video>
                {video.map((src) => (
                    <video
                        key={src}
                        src={require("../../resources/videos/" + src)}
                        muted
                        autoPlay
                        loop
                        className="video-slider"
                    ></video>
                ))}

                <div className="content active">
                    <h1>Instruction 1</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="content">
                    <h1>Instruction 2</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="content">
                    <h1>Instruction 3</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="content">
                    <h1>Instruction 4</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="media-icons">
                    <a href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>

                <div className="slider-navigation">
                    <div className="nav-btn active"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
