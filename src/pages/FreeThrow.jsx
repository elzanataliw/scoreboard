import { HtmlHead } from "../components/HtmlHead";

import FreeThrow1 from "../components/freethrow1";

export default function FreeThrow() {
  return (
    <>
    <HtmlHead
        title="Free Throw Mode"
        decription="[insert page description]"
        link="/FreeThrowMode"
      />
    <main className="overflow-hidden">
      <FreeThrow1/>
      </main>
    </>
  );
} 