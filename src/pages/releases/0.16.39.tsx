import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.39 - Browser Target Release Before Navigation",
  description: "Release temporary browser targets before navigation and preserve reliable publication verification.",
  url: "https://kudzujs.cloud/releases/0.16.39"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.39" title="Browser target release before navigation">
    <h2>Release the handle before the document leaves</h2>
    <p>The repository browser smoke tool releases its temporary DOM target after the last target check and before sending native click or fill events. Navigation can then replace the document without a later cleanup request referencing a destroyed execution context.</p>
    <h2>Reproduce the failure, preserve the checks</h2>
    <p>Real Chrome reproduces the original missing-context error. Link navigation and navigation from an input handler now pass, as does the exact historical ten-command sequence. Target validation remains intact and errors are not silently ignored.</p>
    <h2>Keep publication and experiment records honest</h2>
    <p>The npm verifier retains lookup errors and requires a successful command plus the expected version. R20's independent confirmation did not reproduce the guidance improvement: both arms scored 4/5, with candidate token cost 19.36% higher. The instruction candidate was rejected.</p>
    <p>Compiler/runtime source and create-kudzu 0.1.157 remain unchanged. This repository utility fix is not a measured AI-cost saving, and historical scores and failures remain preserved.</p>
  </ReleaseNotes>
}
