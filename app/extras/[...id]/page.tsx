export default function Extras({ params }: { params: { id: string[] } }) {
  console.log(params);
  return (
    <div className="flex flex-col gap-3 py-10">
      <h1 className="text-6xl">Extras!</h1>
      <h2>So much more to learn!</h2>
    </div>
  );
}
