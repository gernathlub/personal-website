export default function LeisureTimeGridItem({
  title, description
}: {
  title: string,
  description: string
}) {
  return (
    <div>
        <h3 className="mb-10 text-primary">{title}</h3>
        <p>{description}</p>
    </div>
  );
}
