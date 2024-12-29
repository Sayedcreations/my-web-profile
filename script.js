// Data
const education = [
    {
        degree: "Bachelor of Computer Application (BCA)",
        institution: "RR Institution of Management Studies, Bangalore University, Karnataka",
        batch: "2021–2024",
        cgpa: "6.73"
    }
];

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "PHP", "ASP.NET", "C#", "MySQL"
];

const projects = [
    {
        name: "Movie Rating System (Critics')",
        duration: "5 months",
        teamSize: 2,
        description: "Designed and developed a system for managing movie ratings from critics..."
    }
];

const strengths = [
    "Skilled in problem-solving through research",
    "Capable of navigating challenges with innovative solutions",
    "Adept at working independently and managing tasks efficiently",
    "Strong interpersonal and communication abilities"
];

const interests = [
    "Software Development",
    "Full-Stack Web Applications",
    "Quality Control and R&D",
    "Creative Problem-Solving"
];

// Populate Data
document.addEventListener("DOMContentLoaded", () => {
    const educationList = document.getElementById("education-list");
    const skillsList = document.getElementById("skills-list");
    const projectsList = document.getElementById("projects-list");
    const strengthsList = document.getElementById("strengths-list");
    const interestsList = document.getElementById("interests-list");

    // Education
    education.forEach(edu => {
        educationList.innerHTML += `<li>${edu.degree} from ${edu.institution} (${edu.batch}) - CGPA: ${edu.cgpa}</li>`;
    });

    // Skills
    skills.forEach(skill => {
        skillsList.innerHTML += `<li>${skill}</li>`;
    });

    // Projects
    projects.forEach(project => {
        projectsList.innerHTML += `<li><strong>${project.name}</strong> - ${project.duration}, Team: ${project.teamSize}<br>${project.description}</li>`;
    });

    // Strengths
    strengths.forEach(strength => {
        strengthsList.innerHTML += `<li>${strength}</li>`;
    });

    // Interests
    interests.forEach(interest => {
        interestsList.innerHTML += `<li>${interest}</li>`;
    });
});
