import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prismaClient } from "db/client";

export default async function Home() {
  const user = await prismaClient.user.findMany();
  return (
    <div>
      <main>
        <h1>Users</h1>
        <p>{JSON.stringify(user)}</p>
      </main>
    </div>
  );
}
export const dynamic = 'force-dynamic'
