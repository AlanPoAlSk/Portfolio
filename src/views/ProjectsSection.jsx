import { useEffect, useMemo, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectsSection(){

        
    const projects = useMemo(() => [
        {
            title: 'Chat-Chit',
            description: 'A real-time chat application designed to facilitate communication, allowing users to engage in live conversations with one another.',
            technologies: ['React', 'Node.js', 'Socket.io'],
            githubLink: 'https://github.com/AlanPoAlSk/Real_Time_Chat.git',
            liveLink: 'http://18.218.163.199/',
            images: ['src/assets/chat_chit/chat-chit1.png','src/assets/chat_chit/chat-chit2.png','src/assets/chat_chit/chat-chit3.png','src/assets/chat_chit/chat-chit4.png','src/assets/chat_chit/chat-chit5.png','src/assets/chat_chit/chat-chit6.png']
        },
        {
            title: 'Good Neighborhood',
            description: 'Driven by a desire to enhance neighborhoods, developed an application where a user has the possibility to ask for help of any kind to other neighbors to forge connections and strengthen communities.',
            technologies: ['Java', 'Spring', 'Spring Security'],
            githubLink: 'https://github.com/AlanPoAlSk/Good_NeighborhooDC.git',
            // liveLink: 'https://your-live-version-link.com',
            images: ['src/assets/good_neighborhood.png']
        },
    ], []);

    const [currentImageIndices, setCurrentImageIndices] = useState(projects.map(() => 0));

    useEffect(() => {
        const intervals = projects.map((project, index) => {
            return setInterval(() => {
                setCurrentImageIndices(prevIndices => {
                    const newIndices = [...prevIndices];
                    newIndices[index] = (newIndices[index] + 1) % project.images.length; // Toggle between images
                    return newIndices;
                });
            }, 2500);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, [projects]); 


    return (
        <div className="projects-section">
            <Container>
                <h2>Projects</h2>
                <div className="scrollable">
                    <Row>
                        {projects.map((project, index) => (
                            <Col md={6} lg={4} key={index}>
                                <article>
                                    <Card className="project-card">
                                        <Card.Title>{project.title}</Card.Title>
                                        {/* <Slider {...sliderSettings}> */}
                                        <div>
                                        <img className="project-image" src={project.images[currentImageIndices[index]]} alt={`Project ${index+1}`} />
                                        </div>
                                        {/* </Slider> */}
                                        <Card.Body>
                                            <p><strong>Technologies/Languages Used:</strong> {project.technologies.join(', ')}</p>
                                            <Card.Text>{project.description}</Card.Text>
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                <FaGithub /> GitHub
                                            </a>
                                            <div></div>
                                            {project.liveLink && (
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                    Live Version
                                                </a>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </article>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ProjectsSection;