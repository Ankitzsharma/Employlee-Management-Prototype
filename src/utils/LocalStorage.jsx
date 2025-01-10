const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage layout.",
        taskCategory: "Design",
        taskDate: "2024-10-01"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the login authentication issue.",
        taskCategory: "Development",
        taskDate: "2024-10-15"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Document the recent API changes.",
        taskCategory: "Documentation",
        taskDate: "2024-10-20"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add unit tests for the new module.",
        taskCategory: "Testing",
        taskDate: "2024-10-18"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design and develop a landing page.",
        taskCategory: "Development",
        taskDate: "2024-09-30"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rajesh",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize SQL queries for faster loading.",
        taskCategory: "Maintenance",
        taskDate: "2024-10-05"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "UI Testing",
        taskDescription: "Perform UI testing for cross-browser support.",
        taskCategory: "Testing",
        taskDate: "2024-10-17"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Logo",
        taskDescription: "Create a new logo for the product.",
        taskCategory: "Design",
        taskDate: "2024-09-25"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fix: Cart Issue",
        taskDescription: "Resolve the issue with the cart not updating.",
        taskCategory: "Development",
        taskDate: "2024-10-19"
      }
    ]
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update README",
        taskDescription: "Revise the README with new setup instructions.",
        taskCategory: "Documentation",
        taskDate: "2024-09-28"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Endpoint Testing",
        taskDescription: "Test the new API endpoints for functionality.",
        taskCategory: "Testing",
        taskDate: "2024-10-15"
      }
    ]
  },
  {
    id: 6,
    firstName: "Vikas",
    email: "employee6@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Perform scheduled server maintenance.",
        taskCategory: "Maintenance",
        taskDate: "2024-10-10"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update UI Theme",
        taskDescription: "Update the UI to the latest design theme.",
        taskCategory: "Design",
        taskDate: "2024-10-20"
      }
    ]
  }
];

  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
// //   console.log(employees);
// //   console.log(admin);
  

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
 }
export const getLocalStorage=()=>{
   const employees=JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
   
  //  console.log(employees,admin)
  return{employees,admin}
}
  
  