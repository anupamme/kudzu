import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.33 - Conditional DOM Mount Exclusion",
  description: "Exclude unused conditional mount traversal using existing runtime-family ownership facts.",
  url: "https://kudzujs.cloud/releases/0.16.33"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.33" title="Conditional DOM mount exclusion">
    <h2>Retain mounts only where needed</h2>
    <p>Existing condition.mount metadata excludes descendant lifecycle traversal and fragment child collection when no branch needs mounting. Stateful, effectful, nested reactive and shared-owner branches retain that work.</p>
    <h2>Measured output</h2>
    <p>Imported article search removes 215 raw / 116 aggregate gzip JavaScript bytes. The all-property binding control removes 210 raw / 110 gzip bytes. Controls needing conditional mounts retain their raw size.</p>
    <p>Seven fresh-profile pairs measured about 3.8 ms for 200 search transitions before and after. This checks DOM completion, not paint or cross-framework superiority. Ordinary TSX, keyed identity, effect cleanup and static zero-JavaScript siblings remain intact.</p>
    <pre><code>npm install @kudzujs/core@^0.16.33</code></pre>
  </ReleaseNotes>
}
