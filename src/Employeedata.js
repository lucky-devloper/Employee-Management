const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123do",
        name: "Pritam",
        Role: "UI Designer",
        taskCount: {
            active: 2,
            newTask: 1,
            complete: 0,
            failed: 0,
        },
        task: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Update UI",
                taskDescription: "Remove the button design",
                taskDate: "2024-10-12",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Client Meeting",
                taskDescription: "Discuss about the website",
                taskDate: "2024-10-12",
                category: "Meeting"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Blog Features",
                taskDescription: "Add a Blog Features",
                taskDate: "2024-10-12",
                category: "Functionality"
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "pass456",
        name: "Aarav",
        Role: "Backend Developer",
        taskCount: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 0,
        },
        task: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Build Dashboard",
                taskDescription: "Create a user dashboard",
                taskDate: "2024-10-15",
                category: "Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "API Integration",
                taskDescription: "Integrate external APIs",
                taskDate: "2024-10-20",
                category: "Functionality"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review pull requests",
                taskDate: "2024-10-18",
                category: "Development"
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "secure789",
        name: "Meera",
        Role: "Marketing Department",
        taskCount: {
            active: 2,
            newTask: 1,
            complete: 1,
            failed: 0,
        },
        task: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Refactor Code",
                taskDescription: "Refactor for better performance",
                taskDate: "2024-10-22",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Write Unit Tests",
                taskDescription: "Add test cases for components",
                taskDate: "2024-10-20",
                category: "Testing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Update Documentation",
                taskDescription: "Revise project documentation",
                taskDate: "2024-10-21",
                category: "Documentation"
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "test123",
        name: "Sohan",
        Role: "Team Leader",
        taskCount: {
            active: 1,
            newTask: 0,
            complete: 2,
            failed: 0,
        },
        task: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Implement Dark Mode",
                taskDescription: "Add dark mode toggle",
                taskDate: "2024-10-11",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Bug Fixes",
                taskDescription: "Resolve critical issues",
                taskDate: "2024-10-13",
                category: "Maintenance"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Feature Planning",
                taskDescription: "Plan new features",
                taskDate: "2024-10-18",
                category: "Development"
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "admin@2024",
        name: "Riya",
        Role: "Fronted Developer",
        taskCount: {
            active: 2,
            newTask: 1,
            complete: 0,
            failed: 1,
        },
        task: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Database Migration",
                taskDescription: "Migrate data to the cloud",
                taskDate: "2024-10-19",
                category: "Database"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Update UI",
                taskDescription: "Enhance navigation experience",
                taskDate: "2024-10-17",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Fix Login Issue",
                taskDescription: "Resolve OAuth login problem",
                taskDate: "2024-10-16",
                category: "Bug Fix"
            }
        ]
    }
];



const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "admin123"
    }
]


export default [employees, admin]