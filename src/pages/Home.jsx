import { HtmlHead } from "../components/HtmlHead";

import Home1 from "../components/home1";

export default function Home() {
  return (
    <>
    <HtmlHead
        title="Home"
        decription="[insert page description]"
        link="/"
      />
    <main className="overflow-hidden">
      <Home1/>
      </main>
    </>
  );
}