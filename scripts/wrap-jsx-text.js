/**
 * A jscodeshift transform that wraps plain JSXText in t("…").
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    // Find all JSXText (text between tags)
    .find(j.JSXText)
    .filter(path => {
      // only wrap if it’s non‑empty and not already all whitespace
      return path.node.value.trim().length > 0;
    })
    .forEach(path => {
      const text = path.node.value.trim();
      j(path).replaceWith(
        j.jsxExpressionContainer(
          j.callExpression(
            // CALL window.__i18n_t("…")
            j.memberExpression(
              j.identifier("window"),
              j.identifier("__i18n_t")
            ),
            [j.literal(text)]
          )
        )
      );
    })
    .toSource({ quote: "double" });
}
