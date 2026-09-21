import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.35 - Nested Evaluator Exclusion",
  description: "Exclude unused nested evaluator work while preserving mixed and nested runtime ownership.",
  url: "https://kudzujs.cloud/releases/0.16.35"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.35" title="Nested evaluator exclusion">
    <h2>Emit only the required scope work</h2>
    <p>Existing nested-scope descriptors determine whether a runtime family needs nested context preparation, lookup and recursive state-ID collection. Flat families omit that work; mixed families retain it.</p>
    <h2>Measured output</h2>
    <p>Imported search removes 172 raw / 50 aggregate gzip JavaScript bytes. The Project fixture removes 516 raw / 151 gzip bytes. Static siblings retain zero JavaScript, and nested component-prop consumers preserve latest-state behavior.</p>
    <p>The timing samples do not establish cold-page readiness, paint, memory, AI cost or framework rankings. No semantic primitive, compiler pass, runtime concept or dependency is added. The released AI tools and create-kudzu 0.1.156 remain unchanged.</p>
    <pre><code>npm install @kudzujs/core@^0.16.35</code></pre>
  </ReleaseNotes>
}
