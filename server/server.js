const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {testConnection} = require('./models/Conn');
// const {createTables} = require('./models/setUp');
const userRoutes = require('./routes/UserRoutes');
const loginRoutes = require('./routes/LoginRoutes');
const resumeroutes = require('./routes/ResumeRoutes');

const app = express();
const port = 8000;

testConnection();

app.use(cors());
app.use(express.json());

// createTables();


app.use("/users", userRoutes);
app.use("/loginuser", loginRoutes);
app.use("/resume",resumeroutes);


app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
  })

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    // connect()
  });