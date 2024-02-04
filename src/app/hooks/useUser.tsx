import { cookies } from "next/headers";
export default function useUser() {
  const store = cookies();
  const username = store.get("username")?.value;
  console.log("useUser", username);
  return [username];
}