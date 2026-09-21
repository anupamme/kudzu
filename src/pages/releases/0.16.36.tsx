import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.36 - Managed AI Check Cancellation",
  description: "Bounded cancellation for managed AI checks, preserving sibling work and complete logs.",
  url: "https://kudzujs.cloud/releases/0.16.36"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.36" title="Managed AI check cancellation">
    <h2>Keep checks inside their owner</h2>
    <p>create-kudzu 0.1.157 corrects cancellation in the optional AI check tool. Managed Unix checks inherit their outer process group so hard cancellation reaches ordinary descendants.</p>
    <p>A check-local timeout or SIGTERM stops that check's bounded descendant snapshot while preserving sibling work. Complete logs, nonzero failure codes and the distinction between build and browser checks remain intact.</p>
    <h2>Validation and boundaries</h2>
    <p>Regressions cover outer-group termination, local timeout, SIGTERM, grandchildren and sibling survival. This is trusted-process supervision, not containment of deliberately detached jobs. Compiler/runtime behavior and deploy output are unchanged.</p>
    <p>Generated kudzu-ai.mjs files are snapshots. Upgrading core alone does not replace an existing application's tool; review the generator's existing-app update instructions.</p>
    <pre><code>npm create kudzu@0.1.157 my-app -- --ai</code></pre>
  </ReleaseNotes>
}
