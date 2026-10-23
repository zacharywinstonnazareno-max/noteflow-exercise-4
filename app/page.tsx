
"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (email.trim() === "") {
      setError("Please enter your email.");
    } else if (email.trim() !== "g@gmail.com") {
      setError("Incorrect email address.");
    } else if (password.length <= 6) {
      setError("Password must be more than 6 characters.");
    } else {
      sessionStorage.setItem("noteflowLoggedIn", "true");
      setLoggedIn(true);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("noteflowLoggedIn");
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setError("");
  }

  if (loggedIn) {
    return (
      <main className="container">
        <header>
          <h2>NoteFlow</h2>
          <button onClick={handleLogout}>Logout</button>
        </header>

        <section className="dashboard">
          <h1>Welcome to NoteFlow!</h1>
          <p>You have successfully logged in.</p>
          <p>This is your notes page.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <header>
        <h2>NoteFlow</h2>
        <p>My Notes App</p>
      </header>

      <section className="login-box">
        <h1>Login</h1>
        <p>Please enter your account details.</p>

        <form onSubmit={handleLogin} noValidate>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
          />

          <button type="submit">Login</button>

          <p className={error ? "error" : "message"} role="alert">
            {error || "Enter your details to continue."}
          </p>
        </form>
      </section>

      <footer>NoteFlow © 2026</footer>
    </main>
  );
}
