import Image from "next/image";
import Card from "/src/components/Card";
export default function Home() {
  return (
    <main className="text-center mt-20">
      <h1 className="text-5xl m-8">Welcome to Parallel Intersect</h1>
      <p className="text-2xl">
        This website is still under construction. Check out{" "}
        <code>
          <a href="/about">about</a>
        </code>{" "}
        To know more about <br />
        <strong>Parallel Intersect</strong> and idea behind it.
      </p>
      <ul role="list" className="link-card-grid">
        <Card
          href="/project/"
          title="Projects"
          body="Checkout some of the projects our team is working on right now."
        />
        <Card
          href="/market"
          title="Market Place"
          body="Buy Digital assets at affordable price."
        />
        <Card href="/game" title="Games" body="Checkout Games created by us." />
        <Card
          href="https://discord.gg/QvPTddkA6H"
          title="Community"
          body="Come say hi to our amazing Discord community. ❤️"
        />
      </ul>

      <div className="h-1/2 w-1/2 bg-cover absolute right-1/4 opacity-50 top-20 -z-10">
        <img aria-hidden="true" src="logo.svg" />
      </div>
    </main>
  );
}
