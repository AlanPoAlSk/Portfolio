function ResumeSection(){
    return (
        <div className="resume-section">
            <div className="resume">
                <div className="embed-container">
                    <iframe
                        src="/src/assets/resume_Alan_Skrzecz_new.pdf#view=FitH"
                        type="application/pdf"
                        width="100%"
                        height="500px"
                        title="Resume Preview"
                    />
                </div>
                <h2 style={{marginTop:"2vh", marginRight:"1vw", color:"green"}}><a href="/src/assets/resume_Alan_Skrzecz_new.pdf" target="_blank">Click here to view</a>  . . . or hover the pdf</h2>      
            </div>
        </div>
    )
}

export default ResumeSection;