// Placeholder support: any string containing "[CẦN ANH ĐIỀN…]" renders the
// marker as a highlighted <mark>, so unfinished content is obvious on the page.
const MARKER = /(\[CẦN ANH ĐIỀN[^\]]*\])/;

export const isTodo = (value) =>
  typeof value === "string" && value.includes("[CẦN ANH ĐIỀN");

export const T = ({ children }) => {
  if (!isTodo(children)) return children;
  return children.split(MARKER).map((part, i) =>
    MARKER.test(part) ? (
      <mark key={i} className="todo">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

// A link whose href may still be a placeholder: renders a non-interactive
// element with the marker instead of a broken link.
export const MaybeLink = ({ href, className = "", children, external, ...rest }) => {
  if (isTodo(href)) {
    return (
      <span className={`${className} is-todo`} aria-disabled="true">
        {children}
        <mark className="todo">{href}</mark>
      </span>
    );
  }
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={className} {...ext} {...rest}>
      {children}
    </a>
  );
};
