import React, { ComponentType, createElement } from 'react';

interface State {
  hasError?: boolean;
  error: Error | null;
}

interface FallbackProps {
  error: Error | null;
  resetErrorBoundary: () => void;
}

export type ErrorBoundaryFallback = ComponentType<FallbackProps>;

interface Props {
  fallback?: ErrorBoundaryFallback;
  onReset: () => void;
  children?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  resetErrorBoundary(): void {
    this.props.onReset();

    this.setState({
      hasError: false,
      error: null,
    });
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error boundary error', error);
    console.error('Error boundary errorInfo', errorInfo);
  }

  render() {
    const { state, props, resetErrorBoundary } = this;
    const { hasError, error } = state;
    const { fallback, children } = props;
    const fallbackProps: FallbackProps = {
      error,
      resetErrorBoundary,
    };
    const fallbackComponent = createElement(fallback, fallbackProps);

    return hasError ? fallbackComponent : children;
  }
}