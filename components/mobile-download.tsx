export default function MobileDownload() {
  return (
    <section className="relative py-16 px-6 sm:py-20 overflow-hidden border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Available On Mobile
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our community on the go. Download RightSignal for iOS and Android.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">iOS App</h3>
              <p className="text-muted-foreground">
                Download RightSignal for iPhone and iPad. Stay connected to the ecosystem wherever you are.
              </p>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all duration-200 w-fit"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.51.93.64 1.54 1.65 1.54 2.8 0 .66-.17 1.28-.47 1.82.18.08.37.12.57.12 1.66 0 3-1.34 3-3s-1.34-3-3-3zm-5.08-2c-1.35 0-2.58.84-3.07 2.02.31.12.63.19.97.19 1.99 0 3.6 1.61 3.6 3.6 0 .66-.17 1.28-.48 1.82.23.1.47.15.73.15 1.99 0 3.6-1.61 3.6-3.6 0-1.99-1.61-3.6-3.6-3.6z" />
                </svg>
                Get on App Store
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Android App</h3>
              <p className="text-muted-foreground">
                Download RightSignal for Android devices. Full access to all features and opportunities.
              </p>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all duration-200 w-fit"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13.5h8v8H3z" />
                  <path d="M13 3h8v8h-8z" />
                  <path d="M13 13h8v8h-8z" />
                  <path d="M3 3h8v8H3z" />
                </svg>
                Get on Play Store
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs">
              <div className="space-y-6">
                <div className="h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/40 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-primary/60 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-muted-foreground">iPhone App Preview</p>
                  </div>
                </div>
                <div className="h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/40 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-primary/60 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-muted-foreground">Android App Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
