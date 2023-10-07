
export default function Project({
    params,
  }: {
    params: { slug: string };
  }) {
    return (
        <div className="flex flex-grow justify-center">
            <div>{params.slug}</div>
        </div>
    )
}
