import Layout from "@/app/layout";
import Card from "@/components/Card";

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-5xl text-center">Our Projects</h1>

      <Card
        href="https://markdown-parser-sigma.vercel.app/"
        title="Mark Down Editor"
        body="Write better Documentation with our Mark Down Editor"
      />
    </Layout>
  );
}
