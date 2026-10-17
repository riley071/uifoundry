import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

/** Shows a static fallback if WebGL is unavailable or the 3D scene throws. */
export default class SceneBoundary extends Component<
  Props,
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
