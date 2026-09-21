import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.8.61 - Parameterized Debounce Hooks",
  description: "Specialize a relative primitive debounce hook with a literal delay through existing state and effect ownership.",
  url: "https://kudzujs.cloud/releases/0.8.61"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.8.61" title="Parameterized debounce hooks">
    <h2>Debounce through owned effects</h2>
    <p>A named or default synchronous relative hook can accept direct primitive state and a numeric literal delay, initialize its state from that value, own one timeout dependency effect with cleanup, and return the debounced state.</p>
    <p>Dynamic delays, non-primitive source state, aliases, extra statements/effects, intervals and missing cleanup remain unsupported. No debounce runtime, component tree or hydration is added.</p>
    <h2>Validation</h2>
    <p>The ClimateCompatibleGrowth-derived fixture proves rapid replacement, pending-timeout cleanup on conditional removal, fresh remount state and latest-value commit. A static sibling remains JavaScript-free, and dynamic delay input fails at its authored source.</p>
    <pre><code>npm install @kudzujs/core@^0.8.61</code></pre>
  </ReleaseNotes>
}
