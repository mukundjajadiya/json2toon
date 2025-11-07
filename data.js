import { encode } from "@toon-format/toon";

const nestedJSONData = {
    "id": 101,
    "name": "Mukund",
    "role": "MERN Stack Developer",
    "contact": {
        "email": "mukund@example.com",
        "phone": "+91-9876543210",
        "address": {
            "street": "123 Tech Avenue",
            "city": "Bengaluru",
            "state": "Karnataka",
            "country": "India"
        }
    },
    "skills": [
        {
            "category": "Frontend",
            "technologies": ["React.js", "Redux", "HTML", "CSS", "JavaScript"]
        },
        {
            "category": "Backend",
            "technologies": ["Node.js", "Express.js"]
        },
        {
            "category": "Database",
            "technologies": ["MongoDB"]
        }
    ],
    "projects": [
        {
            "projectId": 1,
            "title": "E-commerce Website",
            "description": "Full-stack MERN application",
            "status": "Completed",
            "features": [
                "User Authentication",
                "Product Listing",
                "Shopping Cart",
                "Payment Integration"
            ]
        },
        {
            "projectId": 2,
            "title": "Task Manager App",
            "status": "In Progress",
            "features": [
                "Task CRUD Operations",
                "JWT Authentication",
                "Responsive UI"
            ]
        }
    ],
    "preferences": {
        "theme": "dark",
        "notifications": {
            "email": true,
            "sms": false
        }
    }
}

const flatJSONData = {
    "id": 101,
    "name": "Mukund",
    "role": "MERN Stack Developer",
    "contact.email": "mukund@example.com",
    "contact.phone": "+91-9876543210",
    "contact.address.street": "123 Tech Avenue",
    "contact.address.city": "Bengaluru",
    "contact.address.state": "Karnataka",
    "contact.address.country": "India",
    "skills[0].category": "Frontend",
    "skills[0].technologies[0]": "React.js",
    "skills[0].technologies[1]": "Redux",
    "skills[0].technologies[2]": "HTML",
    "skills[0].technologies[3]": "CSS",
    "skills[0].technologies[4]": "JavaScript",
    "skills[1].category": "Backend",
    "skills[1].technologies[0]": "Node.js",
    "skills[1].technologies[1]": "Express.js",
    "skills[2].category": "Database",
    "skills[2].technologies[0]": "MongoDB",
    "projects[0].projectId": 1,
    "projects[0].title": "E-commerce Website",
    "projects[0].description": "Full-stack MERN application",
    "projects[0].status": "Completed",
    "projects[0].features[0]": "User Authentication",
    "projects[0].features[1]": "Product Listing",
    "projects[0].features[2]": "Shopping Cart",
    "projects[0].features[3]": "Payment Integration",
    "projects[1].projectId": 2,
    "projects[1].title": "Task Manager App",
    "projects[1].status": "In Progress",
    "projects[1].features[0]": "Task CRUD Operations",
    "projects[1].features[1]": "JWT Authentication",
    "projects[1].features[2]": "Responsive UI",
    "preferences.theme": "dark",
    "preferences.notifications.email": true,
    "preferences.notifications.sms": false
}

export const data = {
    nestedJSONData: JSON.stringify(nestedJSONData),
    nestedToonData: encode(nestedJSONData),
    flatJSONData: JSON.stringify(flatJSONData),
    flatToonData: encode(flatJSONData)
};