export default function TechItem({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  return (
    <div className="flex flex-col p-4 mx-5 text-left text-xl w-64">
      <p className="ml-1">{ title }</p>
      <div className="bg-secondary h-3 mt-1 rounded-full w-full">
        <span className="bg-primary block h-full rounded-full" style={{ width: `${progress}%` }}></span>
      </div>
    </div>
  );
}
