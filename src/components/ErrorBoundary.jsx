import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Kriscel Handicraft render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-ivory px-6 py-20 text-walnut">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[2rem] border border-walnut/10 bg-white/70 p-8 shadow-luxury">
            <p className="text-xs uppercase tracking-[0.5em] text-bronze">KRISCEL HANDICRAFT</p>
            <h1 className="font-display text-4xl md:text-6xl">The gallery is recovering.</h1>
            <p className="max-w-2xl text-base leading-8 text-walnut/75">
              A visual component failed to render, so the page has switched to a safe fallback instead of going blank.
              The build is still intact, and I can now isolate the exact section causing the issue.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
