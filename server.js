const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Coordonnees = require('./models/coordonneesModel');
const File = require('./models/fileModel');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware setup
function setupMiddleware() {
    app.use(cors());
    app.use(express.json());
    app.use(express.static('uploads')); // Serve uploaded files
}

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

// Route handlers
function setupRoutes() {
    app.get('/coordonnees', getCoordonnees);
    app.delete('/coordonnees/:id', deleteCoordonnees);
    app.post('/upload', upload.single('file'), handleFileUpload);
}

// Route handler functions
async function getCoordonnees(req, res) {
    // Code to retrieve coordinates
}

async function deleteCoordonnees(req, res) {
    // Code to delete coordinates
}

function handleFileUpload(req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully: ' + req.file.filename);
}

// Initialize the server
function initializeServer() {
    setupMiddleware();
    setupRoutes();
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// Start the server
initializeServer();