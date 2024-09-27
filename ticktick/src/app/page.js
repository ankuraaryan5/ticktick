import React from "react";
import Link from "next/link";
import Main from "./components/Main";
export default function Home() {
  return (
    <div >
      <Link href="/"><Main /></Link>
    </div>
  );
}
