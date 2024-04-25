function ResumeSection(){
    return (
        <div className="resume-section">
            {/* <h3>Resume</h3>
            <p>Download my resume:</p>
            <h2><a href="/src/assets/resume_Alan_Skrzecz_new.pdf" target="_blank">Click here</a></h2> */}
            {/* <p>Preview:</p> */}
            <div style={{ display: "flex" }}>
                <h2 style={{marginTop:"25vh", marginRight:"3vw"}}><a href="/src/assets/resume_Alan_Skrzecz_new.pdf" target="_blank">Click here to view</a></h2>
                <iframe src="/src/assets/resume_Alan_Skrzecz_new.pdf" alt="Resume" height={"450px"}/>
            </div>
        </div>
    )
}

export default ResumeSection;