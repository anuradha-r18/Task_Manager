
const employees = [
  {
    "id": 1,
    "email": "john.doe@example.com",
    "password": "123",
    "firstName": "John",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Investigate and resolve issue causing failed login attempts.",
        "date": "2025-09-15",
        "category": "Bug Report",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Commit feature branch",
        "description": "Push changes for the new payment integration feature.",
        "date": "2025-09-17",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Set up CI/CD pipeline",
        "description": "Configure GitHub Actions to automate build and deployment.",
        "date": "2025-09-20",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "jane.smith@example.com",
    "password": "123",
    "firstName": "Jane",
    "taskCount": { "active": 2, "newTask": 2, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "title": "UI redesign for dashboard",
        "description": "Update layout and colors for better user experience.",
        "date": "2025-09-14",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix CSS bug",
        "description": "Resolve header alignment issue on mobile devices.",
        "date": "2025-09-18",
        "category": "Bug Report",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Code cleanup",
        "description": "Refactor components for better readability and performance.",
        "date": "2025-09-21",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Implement dark mode",
        "description": "Add toggle feature for dark and light themes.",
        "date": "2025-09-22",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "michael.lee@example.com",
    "password": "123",
    "firstName": "Michael",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "title": "Database optimization",
        "description": "Optimize SQL queries for faster response times.",
        "date": "2025-09-12",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Code review",
        "description": "Review pull requests from frontend team for bugs and best practices.",
        "date": "2025-09-16",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy staging build",
        "description": "Set up staging environment for QA testing.",
        "date": "2025-09-19",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "emily.jones@example.com",
    "password": "123",
    "firstName": "Emily",
    "taskCount": { "active": 2, "newTask": 2, "completed": 2, "failed": 1 },
    "tasks": [
      {
        "title": "API documentation",
        "description": "Update docs with new endpoints for authentication service.",
        "date": "2025-09-13",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix API response bug",
        "description": "Resolve incorrect error messages returned from user API.",
        "date": "2025-09-15",
        "category": "Bug Report",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Setup test automation",
        "description": "Write Jest test cases for core components.",
        "date": "2025-09-18",
        "category": "QA",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Optimize images",
        "description": "Compress images for faster page load.",
        "date": "2025-09-20",
        "category": "Performance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Migrate repo to monorepo",
        "description": "Consolidate all services into a single monorepo structure.",
        "date": "2025-09-22",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "david.khan@example.com",
    "password": "123",
    "firstName": "David",
    "taskCount": { "active": 2, "newTask": 2, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "title": "Backend API testing",
        "description": "Run Postman tests for all authentication endpoints.",
        "date": "2025-09-14",
        "category": "QA",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix auth middleware bug",
        "description": "Resolve issue causing expired tokens to pass validation.",
        "date": "2025-09-16",
        "category": "Bug Report",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update CI/CD script",
        "description": "Add test coverage report generation in pipeline.",
        "date": "2025-09-17",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Sprint planning",
        "description": "Define backlog items for the next sprint cycle.",
        "date": "2025-09-19",
        "category": "Scrum",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]

  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]

  

export const setLocalStorage=()=>{
    localStorage.setItem('employees' ,JSON.stringify(employees))
    localStorage.setItem('admin' ,JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}