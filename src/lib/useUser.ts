import { useEffect, useState } from "react";
import { UserPassport } from "./types";

export function useUser(hashKey: string) {
  const [user, setUser] = useState<UserPassport>();

  return user;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/users/${hashKey}`,
        {
          cache: "no-store",
        },
      );
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [hashKey]);

  return user;
}
