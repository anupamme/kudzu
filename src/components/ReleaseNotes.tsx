export function ReleaseNotes({ version, title, children }: { version: string; title: string; children?: unknown }) {
  const github = `https://github.com/kudzujs/kudzu/releases/tag/v${version}`
  return <>
    <header className="site-header release-header">
      <a className="brand" href="/"><img src="/icon-128.png" alt="Kudzu" /></a>
      <nav aria-label="Release navigation"><a href="/">Home</a><a href="/docs">Documentation</a><a className="github-link" href={github}>GitHub release</a></nav>
    </header>
    <main className="release-notes">
      <section className="release-hero">
        <div className="release-version"><span>{version}</span><span>RELEASE NOTES</span></div>
        <h1>{title}</h1>
        <div className="release-links"><a className="primary-action" href={github}>Full release and evidence</a><a href="/docs">Read the documentation</a></div>
      </section>
      <section className="release-section" aria-label="Changes and validation">{children}</section>
    </main>
    <footer><a className="brand" href="/"><img src="/icon-128.png" alt="Kudzu" /></a><p>Kudzu {version} — {title}</p><a href={github}>GitHub release</a></footer>
  </>
}
