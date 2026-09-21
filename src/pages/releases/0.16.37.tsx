import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.37 - Browser Observation Consistency",
  description: "Consistent browser text assertions, document parsing readiness, and the R19 AI authoring confirmation record.",
  url: "https://kudzujs.cloud/releases/0.16.37"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.37" title="Browser observation consistency">
    <h2>One observation, one text assertion</h2>
    <p>The repository browser smoke tool matches assertions and returns excerpts from the same fresh full-body read. Matching includes text beyond the excerpt limit; separately collected accessibility data is not an atomic page snapshot.</p>
    <h2>Wait for the opened document</h2>
    <p>Opening a page waits for its frame and loader's DOMContentLoaded event before observation. Regression tests cover delayed parsing, reloads, fragment navigation, timeout and cleanup.</p>
    <h2>Keep the evidence honest</h2>
    <p>The R19 independent confirmation did not reproduce the initial AI-cost improvement. Combined successes were baseline 9/10 and guided 8/10, with guided success cost unavailable because timeout tail usage was unknown.</p>
    <p>This is a repository tooling and evidence release. Compiler/runtime source is unchanged, and the browser utility is not included in npm tarballs. No AI-token or latency saving is claimed. create-kudzu 0.1.157 remains compatible.</p>
  </ReleaseNotes>
}
