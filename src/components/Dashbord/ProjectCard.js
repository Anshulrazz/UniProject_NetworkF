import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
    return (
        <Card style={{ width: "22rem", margin: "10px" }} className="ice">
            {project.image && (
                <Card.Img variant="top" src={project.image.url} alt={project.name} style={{ height: "150px", objectFit: "cover" }} />
            )}
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Category: {project.category || "N/A"}
                </Card.Subtitle>

                {project.documentation && (
                    <Card.Text>
                        <strong>Documentation:</strong> {project.documentation}
                    </Card.Text>
                )}

                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <Button variant="outline-primary">
                            <FontAwesomeIcon icon={faThumbsUp} /> {project.likes.length} Likes
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-secondary">
                            <FontAwesomeIcon icon={faComment} /> {project.comments.length} Comments
                        </Button>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                    <small className="text-muted">
                        {project.premium ? "Premium Project" : "Free Project"}
                    </small>

                    {project.premium ? <Button variant="primary" href={project.file?.url} target="_blank">Unlock</Button> :
                        <Button variant="primary" href={project.file?.url} target="_blank">View</Button>
                    }
                </div>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted">Created on {new Date(project.createdAt).toDateString()}</small>
            </Card.Footer>
        </Card>
    );
};

export default ProjectCard;
