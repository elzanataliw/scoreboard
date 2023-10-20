import { HtmlHead } from "../components/HtmlHead";

import Game1 from "../components/game1";

export default function Game() {
  return (
    <>
    <HtmlHead
        title="Game Mode"
        decription="[insert page description]"
        link="/GameMode"
      />
    <main className="overflow-hidden">
      <Game1/>
      </main>
    </>
  );
}