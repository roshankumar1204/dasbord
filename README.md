Data Visualization Dashboard
This project is a data visualization dashboard built with the MERN stack (MongoDB, Express, React, Node.js). It uses Chart.js to display insights from the dataset in graphical formats.

Features
Intensity by Sector Bar Chart: Visualizes the cumulative intensity for each sector.
Backend: Express.js API connected to MongoDB.
Frontend: React.js with Chart.js for interactive data visualization.
Project Structure
plaintext
Copy code
project-root/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection setup
│   ├── models/
│   │   └── Insight.js            # Mongoose schema for the insights data
│   ├── routes/
│   │   └── insightRoutes.js      # API route for insights data
│   └── server.js                 # Express server setup
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Chart.js          # Chart component for data visualization
│   │   ├── pages/
│   │   │   └── Dashboard.js      # Dashboard page to display charts
│   │   ├── services/
│   │   │   └── api.js            # Axios setup for API requests
│   │   ├── styles/
│   │   │   └── App.css           # Main CSS file
│   │   ├── App.js                # Main app component
│   │   └── index.js              # Entry point
│   └── setupProxy.js             # Proxy configuration for API requests
└── README.md                     # Project readme file
Prerequisites
Node.js (v14 or higher)
MongoDB (local or cloud instance)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install backend dependencies:

bash
Copy code
cd backend
npm install
Install frontend dependencies:

bash
Copy code
cd ../frontend
npm install
Setup
MongoDB Setup:

Ensure MongoDB is running locally or use a cloud MongoDB connection string.
Add a .env file in the backend folder with the following content:
plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=3000
Backend Configuration:

backend/config/db.js connects to MongoDB using the URI from .env.
Frontend Proxy Setup:

In the frontend/src/setupProxy.js, configure the proxy to forward requests to the backend running on port 3000.
Running the Application
Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend server:

bash
Copy code
cd frontend
npm start
The React app should automatically open at http://localhost:3000.

Usage
Navigate to the dashboard to view the Intensity by Sector bar chart.
The chart uses the intensity and sector fields from the dataset to visualize data interactively.
API Endpoints
GET /api/insights: Fetches all insights data from MongoDB.
Customization
Modify the chart data and options in frontend/src/components/Chart.js to add new charts or update chart configurations.
Troubleshooting
API Proxy Issues:

Ensure that setupProxy.js is set up in frontend/src for proper API request forwarding.
MongoDB Connection:

If MongoDB fails to connect, check the URI in .env and ensure MongoDB is running.
Dependencies
Frontend:
React
Chart.js
Axios
Backend:
Express
Mongoose
dotenv


This README.md provides a comprehensive guide for setting up and running your project. Let me know if you need further adjustments or additional sections!







