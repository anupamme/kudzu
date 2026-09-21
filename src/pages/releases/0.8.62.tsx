import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.8.62 - Outside-click Hook Ownership",
  description: "Compile a direct React createRef and parameterized outside-click hook through existing effect ownership.",
  url: "https://kudzujs.cloud/releases/0.8.62"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.8.62" title="Outside-click hook ownership">
    <h2>Preserve the familiar hook shape</h2>
    <p>A direct React createRef call lowers to existing null-initialized DOM-ref ownership. A relative outside-click hook can accept that ref and an inline literal setter callback.</p>
    <p>The hook owns one static document mousedown listener, checks ref.current.contains(event.target), and removes the same listener in cleanup. Aliases, private callback captures, dynamic events, multiple refs/listeners and mismatched cleanup remain unsupported.</p>
    <h2>Validation</h2>
    <p>The ClimateCompatibleGrowth-derived fixture proves inside-click retention, outside-click closure, listener cleanup on conditional removal and fresh remount ownership. A static sibling ships zero JavaScript. No outside-click, listener, ref or callback runtime is added.</p>
    <pre><code>npm install @kudzujs/core@^0.8.62</code></pre>
  </ReleaseNotes>
}
