// Default categories (same as client-side)
const defaultCategories = {
    "Animali": ["Cane", "Gatto", "Leone", "Elefante", "Tigre", "Cavallo", "Canguro", "Panda", "Pinguino", "Delfino", "Aquila", "Gufo", "Pipistrello", "Squalo", "Tartaruga", "Volpe", "Ippopotamo", "Rinoceronte", "Scoiattolo", "Giraffa"],
    "Film": ["Titanic", "Avatar", "Shrek", "Il Padrino", "Joker", "Inception", "Frozen", "La La Land", "Spirited Away", "Parasite", "Interstellar", "Casablanca", "Rocky", "Il Gladiatore", "Toy Story", "Cattivissimo Me", "300", "Cars", "Ratatouille", "Mad Max"],
    "Anime": ["Naruto", "Goku", "Luffy", "Eren Jaeger", "Light Yagami", "Sailor Moon", "Nezuko", "Shinji Ikari", "Gon Freecss", "Edward Elric", "Kenshin", "Gintoki", "Levi Ackerman", "Killua", "Bulma", "Nico Robin", "Yugi", "Koro-sensei", "Inuyasha", "Makunouchi Ippo"],
    "Videogiochi": ["Minecraft", "Fortnite", "Among Us", "Pac-Man", "Tetris", "GTA V", "The Legend of Zelda", "League of Legends", "Call of Duty", "Valorant", "Skyrim", "Overwatch", "Super Smash Bros", "Sonic", "Hollow Knight", "Cuphead", "Stardew Valley", "Terraria", "Splatoon", "PokÃ©mon Red"],
    "Serie TV": ["Breaking Bad", "Stranger Things", "The Office", "Squid Game", "Friends", "The Witcher", "Game of Thrones", "Dark", "Vikings", "Black Mirror", "Better Call Saul", "Sherlock", "Peaky Blinders", "Lost", "Dexter", "Prison Break", "Narcos", "How I Met Your Mother", "Westworld", "House of Cards"],
    "Persone Famose": ["Cristiano Ronaldo", "Messi", "Leonardo da Vinci", "Lady Gaga", "Elon Musk", "Barack Obama", "Michael Jackson", "Ariana Grande", "Brad Pitt", "Rihanna", "Albert Einstein", "Oprah Winfrey", "Taylor Swift", "Usain Bolt", "Kim Kardashian", "Napoleone", "Freddie Mercury", "Shakira", "BeyoncÃ©", "Bill Gates"],
    "Personaggi Fittizi": ["Sherlock Holmes", "Harry Potter", "Darth Vader", "Spider-Man", "Batman", "Superman", "Iron Man", "Homer Simpson", "Bart Simpson", "Paperino", "Topolino", "Pikachu", "Ash Ketchum", "Mario", "Luigi", "Yoda", "Frodo", "Gandalf", "Hulk", "Capitan America"],
    "Marche": ["Nike", "Adidas", "Puma", "Reebok", "Apple", "Samsung", "Sony", "Coca-Cola", "Pepsi", "Google", "Microsoft", "Toyota", "Ferrari", "Lamborghini", "Gucci", "Prada", "Louis Vuitton", "Rolex", "Zara", "Ikea"],
    "Musica": ["Chitarra", "Pianoforte", "Batteria", "Violino", "Sassofono", "Tromba", "Arpa", "DJ", "Microfono", "Flauto", "Tamburo", "Bassista", "Cantante", "Orchestra", "Coro", "Rap", "Opera", "Jazz", "Rock", "Pop"],
    "Trasporti": ["Automobile", "Autobus", "Treno", "Aereo", "Bicicletta", "Monopattino", "Nave", "Traghetto", "Sottomarino", "Camion", "Trattore", "Moto", "Scooter", "Funivia", "Metro", "Segway", "Skateboard", "Cavallo", "Carrozza", "Navetta spaziale"],
    "Materiali": ["Legno", "Ferro", "Acciaio", "Oro", "Argento", "Bronzo", "Rame", "Plastica", "Vetro", "Carta", "Pietra", "Marmo", "Ceramica", "Gesso", "Alluminio", "Titanio", "Pelle", "Gomma", "Seta", "Lana"],
    "Tecnologia": ["Smartphone", "Computer", "Tablet", "Console", "Televisione", "Stampante", "Router", "Auricolari", "Drone", "Telecamera", "Mouse", "Tastiera", "Robot", "Frigorifero", "Smartwatch", "Calcolatrice", "Videoproiettore", "Chiavetta USB", "Server", "AI"],
    "Cibi": ["Pizza", "Pasta", "Risotto", "Lasagna", "Gelato", "Kebab", "TiramisÃ¹", "Insalata", "Zuppa", "Couscous", "Paella", "Burrito", "Tacos", "Sushi", "Ramen", "Pollo arrosto", "Bistecca", "Pesce fritto", "Panino", "Croissant"],
    "CittÃ ": ["Roma", "Milano", "Napoli", "Parigi", "Londra", "New York", "Tokyo", "Berlino", "Madrid", "Barcellona", "Amsterdam", "Vienna", "Praga", "Budapest", "Atene", "Istanbul", "Mosca", "Pechino", "Sydney", "Los Angeles"],
    "Sport": ["Calcio", "Tennis", "Basket", "Pallavolo", "Nuoto", "Atletica", "Ciclismo", "Boxing", "MMA", "Rugby", "Baseball", "Golf", "Sci", "Snowboard", "Pattinaggio", "Ginnastica", "Scherma", "Karate", "Judo", "Wrestling"],
    "Colori": ["Rosso", "Blu", "Verde", "Giallo", "Arancione", "Viola", "Rosa", "Marrone", "Nero", "Bianco", "Grigio", "Oro", "Argento", "Bronzo", "Turchese", "Magenta", "Lime", "Indaco", "Beige", "Cremisi"],
    "Paesi": ["Italia", "Francia", "Germania", "Spagna", "Regno Unito", "USA", "Canada", "Australia", "Giappone", "Cina", "India", "Brasile", "Argentina", "Messico", "Russia", "Turchia", "Grecia", "Olanda", "Belgio", "Svizzera"],
    "Professioni": ["Medico", "Insegnante", "Ingegnere", "Avvocato", "Poliziotto", "Pompiere", "Cuoco", "Cameriere", "Meccanico", "Elettricista", "Idraulico", "Parrucchiere", "Dentista", "Veterinario", "Pilota", "Giornalista", "Fotografo", "Artista", "Musicista", "Attore"],
    "Luoghi": ["Hotel", "Biblioteca", "Ospedale", "Scuola", "Supermercato", "Ristorante", "Cinema", "Teatro", "Museo", "Parco", "Spiaggia", "Montagna", "Aeroporto", "Stazione", "Centro commerciale", "Farmacia", "Banca", "Ufficio postale", "Palestra", "Chiesa"]
};

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Store game rooms
const gameRooms = new Map();

// Clean up old rooms (older than 2 hours)
setInterval(() => {
    const now = Date.now();
    const twoHours = 2 * 60 * 60 * 1000;
    
    for (const [roomCode, room] of gameRooms.entries()) {
        if (now - room.createdAt > twoHours) {
            console.log(`Cleaning up old room: ${roomCode}`);
            gameRooms.delete(roomCode);
        }
    }
}, 30 * 60 * 1000); // Run cleanup every 30 minutes

io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);
    
    // Store user data in socket
    socket.currentRoom = null;
    socket.playerName = null;
    
    // Create a new room
    socket.on('createRoom', (data) => {
        const { roomCode, playerName } = data;
        
        console.log(`Creating room ${roomCode} for player ${playerName}`);
        
        if (!roomCode || !playerName) {
            socket.emit('error', 'Codice stanza e nome sono richiesti');
            return;
        }
        
        if (gameRooms.has(roomCode)) {
            socket.emit('error', 'Questa stanza esiste giÃ ');
            return;
        }
        
        // Create new room with default categories
        const room = {
            roomCode,
            host: socket.id,
            players: [{
                socketId: socket.id,
                name: playerName,
                isHost: true
            }],
            gameStarted: false,
            gameData: null,
            categories: JSON.parse(JSON.stringify(defaultCategories)), // Deep copy
            selectedCategories: Object.keys(defaultCategories), // All selected by default
            createdAt: Date.now()
        };
        
        gameRooms.set(roomCode, room);
        
        // Join socket room
        socket.join(roomCode);
        socket.currentRoom = roomCode;
        socket.playerName = playerName;
        
        socket.emit('roomCreated', { roomCode, isHost: true });
        io.to(roomCode).emit('playersUpdate', room.players);
        
        console.log(`Room ${roomCode} created with host ${playerName}`);
    });
    
    // Join existing room
    socket.on('joinRoom', (data) => {
        const { roomCode, playerName } = data;
        
        console.log(`Player ${playerName} joining room ${roomCode}`);
        
        if (!roomCode || !playerName) {
            socket.emit('error', 'Codice stanza e nome sono richiesti');
            return;
        }
        
        const room = gameRooms.get(roomCode);
        
        if (!room) {
            socket.emit('error', 'Stanza non trovata');
            return;
        }
        
        if (room.gameStarted) {
            socket.emit('error', 'La partita Ã¨ giÃ  iniziata');
            return;
        }
        
        // Check if name is already taken
        if (room.players.some(p => p.name === playerName)) {
            socket.emit('error', 'Nome giÃ  in uso in questa stanza');
            return;
        }
        
        // Add player to room
        room.players.push({
            socketId: socket.id,
            name: playerName,
            isHost: false
        });
        
        // Join socket room
        socket.join(roomCode);
        socket.currentRoom = roomCode;
        socket.playerName = playerName;
        
        socket.emit('roomJoined', { roomCode, isHost: false });
        io.to(roomCode).emit('playersUpdate', room.players);
        
        console.log(`Player ${playerName} joined room ${roomCode}. Total players: ${room.players.length}`);
    });
    
    // Update categories (host only)
    socket.on('updateCategories', (data) => {
        const { roomCode, categories, selectedCategories } = data;
        
        const room = gameRooms.get(roomCode);
        
        if (!room) {
            socket.emit('error', 'Stanza non trovata');
            return;
        }
        
        if (room.host !== socket.id) {
            socket.emit('error', 'Solo l\'host puÃ² modificare le categorie');
            return;
        }
        
        if (room.gameStarted) {
            socket.emit('error', 'Non puoi modificare le categorie durante una partita');
            return;
        }
        
        // Update room categories and selected categories
        room.categories = categories;
        room.selectedCategories = selectedCategories;
        
        console.log(`Categories updated for room ${roomCode} by ${socket.playerName}`);
    });
    
    // Start game
    socket.on('startGame', (data) => {
        const { roomCode, category, word } = data;
        
        console.log(`Starting game in room ${roomCode}`);
        
        const room = gameRooms.get(roomCode);
        
        if (!room) {
            socket.emit('error', 'Stanza non trovata');
            return;
        }
        
        if (room.host !== socket.id) {
            socket.emit('error', 'Solo l\'host puÃ² avviare la partita');
            return;
        }

        if (room.gameStarted) {
            socket.emit('error', 'La partita Ã¨ giÃ  iniziata');
            return;
        }

        if (room.players.length < 3) {
            socket.emit('error', 'Servono almeno 3 giocatori per iniziare');
            return;
        }

        // Scegli un giocatore casuale come impostore
        const impostorIndex = Math.floor(Math.random() * room.players.length);

        room.gameData = {
            category,
            word,
            impostorIndex
        };

        room.gameStarted = true;

        // Invia a tutti i giocatori i dati del gioco
        room.players.forEach((player, index) => {
            const isImpostor = index === impostorIndex;
            io.to(player.socketId).emit('gameStarted', {
                category,
                word: isImpostor ? null : word,
                isImpostor,
                players: room.players.map(p => p.name)
            });
        });

        console.log(`Game started in room ${roomCode}. Impostor index: ${impostorIndex}`);
    });

    // NUOVO: Restart game (solo per host)
    // Restart game (host only)
// Restart game (host only)
socket.on('restartGame', (data) => {
    const { roomCode } = data;
    const room = gameRooms.get(roomCode);

    if (!room) {
        socket.emit('error', 'Stanza non trovata');
        return;
    }

    if (room.host !== socket.id) {
        socket.emit('error', 'Solo l\'host può riavviare la partita');
        return;
    }

    room.gameStarted = false;
    room.gameData = null;

    // Notifica tutti i client che la partita è stata riavviata
    io.to(roomCode).emit('gameRestarted', { players: room.players });
    // Aggiorna la lista giocatori (utile per ridisegnare la UI)
    io.to(roomCode).emit('playersUpdate', room.players);

    console.log(`Game restarted in room ${roomCode}`);
});


    // Leave room
    socket.on('leaveRoom', () => {
        const roomCode = socket.currentRoom;
        const playerName = socket.playerName;

        if (!roomCode) return;

        const room = gameRooms.get(roomCode);
        if (!room) return;

        // NUOVO: Se l'host esce durante una partita, avvisa tutti
        if (room.gameStarted && room.host === socket.id) {
            room.gameStarted = false;
            room.gameData = null;
            io.to(roomCode).emit('hostLeftGame');
        }

        // Rimuovi il giocatore
        room.players = room.players.filter(p => p.socketId !== socket.id);

        // Se l'host se ne va, scegli un nuovo host
        if (room.host === socket.id && room.players.length > 0) {
            room.host = room.players[0].socketId;
            room.players[0].isHost = true;
            io.to(room.host).emit('youAreHost');
        }

        io.to(roomCode).emit('playersUpdate', room.players);

        // Se la stanza Ã¨ vuota, cancellala
        if (room.players.length === 0) {
            gameRooms.delete(roomCode);
            console.log(`Room ${roomCode} deleted because empty`);
        }

        socket.leave(roomCode);
        socket.currentRoom = null;
        socket.playerName = null;

        console.log(`Player ${playerName} left room ${roomCode}`);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        const roomCode = socket.currentRoom;
        const playerName = socket.playerName;

        if (!roomCode) return;

        const room = gameRooms.get(roomCode);
        if (!room) return;

        // NUOVO: Se l'host si disconnette durante una partita, avvisa tutti
        if (room.gameStarted && room.host === socket.id) {
            room.gameStarted = false;
            room.gameData = null;
            io.to(roomCode).emit('hostLeftGame');
        }

        // Rimuovi il giocatore
        room.players = room.players.filter(p => p.socketId !== socket.id);

        // Se l'host se ne va, scegli un nuovo host
        if (room.host === socket.id && room.players.length > 0) {
            room.host = room.players[0].socketId;
            room.players[0].isHost = true;
            io.to(room.host).emit('youAreHost');
        }

        io.to(roomCode).emit('playersUpdate', room.players);

        // Se la stanza Ã¨ vuota, cancellala
        if (room.players.length === 0) {
            gameRooms.delete(roomCode);
            console.log(`Room ${roomCode} deleted because empty`);
        }

        console.log(`Client disconnected: ${socket.id} (${playerName})`);
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});


