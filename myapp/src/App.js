import { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [done, setDone] = useState(false);

  if (done)
    return (
      <div>
        <h3>Thanks for the REgistration!</h3>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
        <p>Password: {form.password}</p>
      </div>
    );

  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <label>Name</label>
      <input onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <label>Email</label>
      <input onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <label>Password</label>
      <input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button>Submit</button>
    </form>
  );
}

export default App;
