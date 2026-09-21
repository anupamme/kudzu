import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import test from "node:test"

test("every released note has a site page and current site links target the latest release", async () => {
  const root = new URL("../", import.meta.url)
  const notes = await readFile(new URL("RELEASES.md", root), "utf8")
  const releases = [...notes.matchAll(/^## (\d+\.\d+\.\d+) - (.+)$/gm)].filter(match => !/\bunreleased\b/i.test(match[2]))
  const pages = new Set(await readdir(new URL("src/pages/releases/", root)))
  assert.ok(releases.length > 0)
  assert.deepEqual(releases.filter(match => !pages.has(`${match[1]}.tsx`)).map(match => match[1]), [], "RELEASES.md entries need deployable release pages")
  const { version } = JSON.parse(await readFile(new URL("package.json", root), "utf8"))
  assert.equal(releases[0][1], version, "the current package needs a release record")
  for (const path of ["src/pages/index.tsx", "src/pages/example/index.tsx", "src/pages/example/blog/[slug].tsx", "src/components/docs/DocsLayout.tsx", "src/components/docs/ReferenceSections.tsx"]) {
    const source = await readFile(new URL(path, root), "utf8")
    const links = [...source.matchAll(/href="\/releases\/(\d+\.\d+\.\d+)"/g)].map(match => match[1])
    assert.ok(links.length > 0, `${path} needs a release link`)
    assert.ok(links.every(link => link === version), `${path} links to an outdated release`)
  }
})
