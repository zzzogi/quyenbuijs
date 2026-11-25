// Inline rich text for data strings:
//   "[CẦN ANH ĐIỀN…]"  → highlighted placeholder marker (unfinished content)
//   "==text=="          → highlighted phrase
const TOKEN = /(\[CẦN ANH ĐIỀN[^\]]*\]|==[^=]+==)/;

export const isTodo = (value) =>
  typeof value === "string" && value.includes("[CẦN ANH ĐIỀN");

// Plain-text version (e.g. for alt/aria/meta), with markup stripped
export const plain = (value) =>
  typeof value === "string" ? value.replace(/==([^=]+)==/g, "$1") : value;

export const T = ({ children }) => {
  if (typeof children !== "string" || !TOKEN.test(children)) return children;
  return children.split(TOKEN).map((part, i) => {
    if (part.startsWith("[CẦN ANH ĐIỀN")) {
      return (
        <mark key={i} className="todo">
          {part}
        </mark>
      );
    }
    if (part.startsWith("==") && part.endsWith("==")) {
      return (
        <mark key={i} className="hl">
          {part.slice(2, -2)}
        </mark>
      );
    }
    return part;
  });
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
