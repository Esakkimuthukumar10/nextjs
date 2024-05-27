import { Epilogue } from "next/font/google";

const epilouge = Epilogue({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={epilouge.className}></main>
  );
}
