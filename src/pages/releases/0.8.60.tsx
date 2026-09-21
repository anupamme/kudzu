import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.8.60 - Array Draft Effect Sync",
  description: "Synchronize a specialized child's array draft through its matching parent setter in an owned effect.",
  url: "https://kudzujs.cloud/releases/0.8.60"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.8.60" title="Array draft effect sync">
    <h2>Commit the child-owned draft</h2>
    <p>A specialized child can synchronize direct prop-derived array draft state through its matching parent setter in a top-level synchronous inline effect. Exact state/setter dependencies reuse existing Object.is scheduling after removing the stable setter dependency.</p>
    <p>Parent replacement does not automatically synchronize the independent child draft. Setter aliases, composed values, mismatched pairs, cleanup and additional callback uses remain unsupported.</p>
    <h2>Validation</h2>
    <p>The ClimateCompatibleGrowth-derived dropdown proves initial setup, child replacement commit, independent parent reset and effect rerun. Static siblings retain zero JavaScript. No runtime module, new effect kind or component tree is introduced.</p>
    <pre><code>npm install @kudzujs/core@^0.8.60</code></pre>
  </ReleaseNotes>
}
