export function BasicArticle({ title = "", text = "", additional }) {
  return (
    <article className="w-4/5 my-10 mx-auto">
      {title && <h3 className="text-2xl text-ferry font-medium">{title}</h3>}
      <p className="p-3 mt-2 text-base font-medium text-white bg-black rounded-lg">
        {text}
      </p>
      {additional}
    </article>
  );
}
