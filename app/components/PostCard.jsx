export default function PostCard({ post }) {
  return (
    <article className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mt-2 text-gray-700">{post.body}</p>
    </article>
  );
}
