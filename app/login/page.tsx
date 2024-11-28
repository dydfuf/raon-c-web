import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 pt-32">
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
      </form>
    </div>
  );
}
