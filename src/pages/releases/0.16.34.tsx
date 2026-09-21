import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.34 - Optional AI Authoring Tools",
  description: "Opt-in application instructions, installed-version documentation lookup, and bounded typecheck/build checks.",
  url: "https://kudzujs.cloud/releases/0.16.34"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.34" title="Optional AI authoring tools">
    <h2>Opt in to local developer guidance</h2>
    <p>create-kudzu 0.1.156 adds an optional --ai mode with application instructions, a dependency-free Node tool, an ai npm script and ignored local logs.</p>
    <p>Installed-version README lookup returns selected sections. The check command runs the real typecheck/build, preserves failures, timeouts and full logs, and bounds the returned excerpt. Build checks do not certify browser behavior or accessibility.</p>
    <h2>Keep application output equivalent</h2>
    <p>Packaged default and AI starters produce byte-identical deploy output, including a JavaScript-free static route. Compiler/runtime implementation is unchanged. Instructions and tool calls consume context; AI-token and monetary savings were unmeasured in this release.</p>
    <pre><code>npm create kudzu@0.1.156 my-app -- --ai</code></pre>
  </ReleaseNotes>
}
