import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.32 - Conditional State Exclusion",
  description: "Skip conditional state cloning and release work in runtime families without branch-owned state.",
  url: "https://kudzujs.cloud/releases/0.16.32"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.32" title="Conditional state exclusion">
    <h2>Follow existing state ownership</h2>
    <p>Runtime families whose branches own no state omit state cloning and release code. Stateful branches and mixed families retain their lifecycle; generic source calls stay enabled.</p>
    <h2>Measured output</h2>
    <p>Paired local artifacts remove 334 raw / 119 aggregate gzip JavaScript bytes from imported search and 1,002 raw / 359 gzip bytes from the Project application. The stateful positive control retains its raw size.</p>
    <p>React-shaped TSX, keyed identity, fresh conditional remounts and static zero-JavaScript siblings are preserved. No semantic primitive, compiler pass, dependency or public API is added. The unreleased 0.16.31 evidence review is carried into this release rather than published separately.</p>
    <pre><code>npm install @kudzujs/core@^0.16.32</code></pre>
  </ReleaseNotes>
}
