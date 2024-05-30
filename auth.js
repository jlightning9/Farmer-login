function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            alert("Sign up successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}

function signIn() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            alert("Sign in successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}
