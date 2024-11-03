import React from 'react';
import '../index.css';

function MyProjects({ projects }) {
    return (
        <div className="timeline">
            <h1 id="ProjectTitle">My Projects</h1>
            <div className="timeline-block">
                {projects.map((project, index) => (
                    <div key={project.id} className="timeline-item">
                        <div className="timeline-content">
                            <h3>{project.title}</h3>
                            <span className="date">{project.date}</span>
                            <p>{project.description}</p>
                        </div>
                        {index < projects.length - 1 && <div className="timeline-divider"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;
