# InfluenceIQ

InfluenceIQ is a platform designed to bring transparency and fairness to influencer ratings. Built for the **AuraFlix Hackathon**, it combats fake reviews, prevents manipulative ratings, and ensures both rising talents and industry veterans receive fair recognition. The platform dynamically adapts to trends while maintaining credibility, ethics, and privacy.

## 🚀 Features

- **Fake Fame Prevention** – Detects and filters out spam reviews and manipulative ratings.
- **Fair Comparison** – Ensures a balance between new influencers and experienced professionals.
- **Real-Time Ratings** – Adapts dynamically to trends without compromising credibility.

## 🛠 Tech Stack

### **Backend**
- **Node.js** & **Express.js** – For handling API requests efficiently.
- **MongoDB** – As a NoSQL database for scalable data management.
- **Clerk** – For secure authentication and user management.

### **Frontend**
- **HTML, CSS, JavaScript** – For a simple, responsive, and interactive user interface.

##  Project Structure
```
backend/
│── controllers/      # Handles business logic
│── models/           # Database schemas
│── Routes/           # API endpoints
│── middleware/       # Authentication, validation, logging, etc.
│── utils/            # Helper functions
│── server.js         # Main backend entry point

frontend/          # Static assets (images, icons, etc.)
│── css/             # Stylesheets
│── js/              # JavaScript files
│── index.html       # Main HTML file
```

## 🚀 Getting Started

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** 
- **MongoDB** (Local or Cloud)
- **Clerk Account** (for authentication setup)

### **Installation**
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/InfluenceIQ.git
   cd InfluenceIQ
   ```

2. **Backend Setup**
   ```sh
   cd backend
   npm install
   npm start
   ```

3. **Frontend Setup**
   Simply open `index.html` in a browser or use a local server for better development experience.

4. **Environment Variables**
   Create a `.env` file in the backend directory and configure:
   ```env
   MONGO_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

##  Contributing
There are some errors as time duration was short and still deployement has to do.
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## Acknowledgements

 - [AuraFlix](https://devfolio.co/auraflix/dashboard)
 - [Clerk](https://clerk.com/)
 - [Chatgpt](https://chatgpt.com/)
   


