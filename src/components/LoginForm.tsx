import { FC, FormEvent, useState } from "react";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isDisabled = () => !username || !password;

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess("Success Logging In");
      })
      .catch((e) => setError("Error Logging In"));
  };

  return (
    <form className="space-y-10">
      {error && (
        <div className="w-[200px] px-4 py-2 bg-red-700 text-red-200">
          {error}
        </div>
      )}
      {success && (
        <div className="w-[200px] px-4 py-2 bg-green-700 text-green-200">
          {success}
        </div>
      )}

      <label htmlFor="username">Username:</label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        id="username"
        className="border border-slate-500 p-3 rounded-lg"
      />

      <div className="space-y-5">
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          id="password"
          className="border border-slate-500 p-3 rounded-lg"
        />
      </div>
      <button
        disabled={isDisabled()}
        className={`px-4 py-2 rounded-lg bg-slate-800 text-slate-100 ${
          isDisabled() ? "bg-gray-500 cursor-not-allowed" : ""
        }"`}
        onClick={handleLogin}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
