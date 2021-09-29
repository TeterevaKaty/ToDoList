const firebaseConfig = {
        apiKey: "AIzaSyBTCIxDYWKCMYhO7tQ55s9QpPwT3K9flns",
        authDomain: "to-do-list-ba03e.firebaseapp.com",
        projectId: "to-do-list-ba03e",
        storageBucket: "to-do-list-ba03e.appspot.com",
        messagingSenderId: "576158277368",
        appId: "1:576158277368:web:9579b2bfbfa97ac21ee50d",
        measurementId: "G-4BE0J4QHZ2"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

