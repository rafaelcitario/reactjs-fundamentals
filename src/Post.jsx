export function Post({ author, content }) {
  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  );
}

// Default exports vs Named exports
// default exports: to import this is needle import from
// name exports: to import this is needle import {} from

// props is a object
