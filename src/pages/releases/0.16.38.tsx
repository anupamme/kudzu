import { ReleaseNotes } from "../../components/ReleaseNotes"

export const metadata = {
  title: "Kudzu 0.16.38 - Release Website Coverage",
  description: "Restore missing website release notes, update current release links, and prevent future page omissions.",
  url: "https://kudzujs.cloud/releases/0.16.38"
}

export default function ReleasePage() {
  return <ReleaseNotes version="0.16.38" title="Release website coverage">
    <h2>Restore the missing pages</h2>
    <p>Website notes for 0.16.32–0.16.37 and 0.8.60–0.8.62 are restored. Their GitHub release bodies already existed, but separately authored website routes had been omitted.</p>
    <p>Current homepage, documentation and example links now point to this release. Release pages remain complete static HTML with no browser JavaScript.</p>
    <h2>Prevent the same omission</h2>
    <p>A regression check requires a website page for every released entry in RELEASES.md and current package-version links across release navigation. Explicitly unreleased records are excluded. Canonical URLs, sitemap entries and browser headings are checked separately.</p>
    <h2>Scope and evidence</h2>
    <p>This is a website and release-process repair, not a compiler feature. Compiler/runtime source and create-kudzu 0.1.157 remain unchanged. R20 records a mixed AI-guidance result; the experimental instruction is not shipped and no reliable cost saving is claimed.</p>
  </ReleaseNotes>
}
