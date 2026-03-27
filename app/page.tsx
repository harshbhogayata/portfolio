import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Changelog from "@/components/Changelog";
import Features from "@/components/Features";
import Dependencies from "@/components/Dependencies";
import KnownIssues from "@/components/KnownIssues";
import Installation from "@/components/Installation";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Latest />
      <Changelog />
      <Features />
      <Dependencies />
      <KnownIssues />
      <Installation />
    </main>
  );
}
