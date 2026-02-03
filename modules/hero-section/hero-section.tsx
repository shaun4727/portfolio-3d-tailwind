export const HeroSection = () => {
    return (
        <div>
            <section
                id="hero-section "
                className="gutter-size flex justify-between"
            >
                <div className="left-content flex flex-col bg-amber-700 w-1/2">
                    <h5>HI THERE</h5>
                    <div className="left-group-1">
                        <h1>
                            <span className="intro">I&#39;m</span> SHAUN HOSSAIN
                        </h1>
                        <h6>FULL STACK DEVELOPER</h6>
                        <h4>
                            BRINGING{' '}
                            <span className="word-highlight">IMAGINATION</span>{' '}
                            TO
                            <span className="word-highlight"> LIFE </span>
                        </h4>
                        <button type="button" className="resume-btn">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="right-content w-1/2 bg-amber-400 flex justify-end">
                    <img src="./images/hero-thumbnail.png" className="w-1/2" />
                </div>
            </section>
        </div>
    );
};
