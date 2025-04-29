
<!-- GETTING STARTED -->
## <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" width="32" height="32"> Getting Started

To get a local copy up and running follow these simple steps.
### Prerequisites
In order to get a copy of the project you will require you to have Node.js (v14+) and the NPM package manager installed. If you don't have it, you can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/) which also installs the NPM package manager by default.
### Installation
Open the terminal in the folder in which you wish to clone the repository and enter the following command:
``` 
git clone https://github.com/prasoonsoni/node-express-starter.git
cd node-express-starter
```
Install all the NPM packages:
```
npm i
```
In order to run the server:
```
npm i -D nodemon (One time installation)
npx nodemon
```

> **Note that you will have to add your own `.env` file at the root directory and add your own environment variables for the project to build.**

Following are the environment variables used for backend:
- `MONGO_URI` - MongoDB URI for your database

<!-- CONTRIBUTING -->
## <img src="https://hpe-developer-portal.s3.amazonaws.com/uploads/media/2020/3/git-icon-1788c-1590702885345.png" width=32 height=32> Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourAmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some YourAmazingFeature'`)
4. Push to the Branch (`git push origin feature/YourAmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## 👾 Contributors
### Prasoon Soni
[`E-Mail`](mailto:prasoonsoni.work@gmail.com)
[`LinkedIn`](https://www.linkedin.com/in/prasoonsoni/)

Test Prompt
You are an expert Agile Product Owner and Business Analyst.  
You will be provided with Epic details in the form of:  
- Epic Name  
- Description  
- Acceptance Criteria  
- Notes  

Your task is to break down the Epic into multiple actionable Features.  
Each Feature must include:  
1. "title" — a clear, concise summary (JIRA-style title, max 12 words)  
2. "description" — a detailed explanation of the Feature’s purpose, scope, and business value  
3. "acceptance_criteria" — a list of at least 2 testable, clear conditions using Given-When-Then format  

**Input Epic:**  
- **Epic Name**: {EPIC_NAME}  
- **Description**: {EPIC_DESCRIPTION}  
- **Acceptance Criteria**: {EPIC_ACCEPTANCE_CRITERIA}  
- **Notes**: {EPIC_NOTES}  

**Instructions:**  
- Use all inputs to infer detailed and valuable Features  
- Ensure all Features are distinct, non-overlapping, and clearly scoped  
- Acceptance criteria should be concise, testable, and follow the Given-When-Then pattern  
- Output should be strict JSON with no extra commentary  

**Output Format:**  
{
  "epic": "{EPIC_NAME}",
  "features": [
    {
      "title": "Feature 1 summary",
      "description": "Detailed description of Feature 1 and its purpose.",
      "acceptance_criteria": [
        "Given ..., When ..., Then ...",
        "Given ..., When ..., Then ..."
      ]
    },
    {
      "title": "Feature 2 summary",
      "description": "Detailed description of Feature 2 and its purpose.",
      "acceptance_criteria": [
        "Given ..., When ..., Then ...",
        "Given ..., When ..., Then ..."
      ]
    }
    // More features...
  ]
}

