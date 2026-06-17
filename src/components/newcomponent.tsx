
export function NewComponent() : JSX.Element {
  return (
    <div>
      <h1>New Component</h1>
      <p>This is a new component.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}