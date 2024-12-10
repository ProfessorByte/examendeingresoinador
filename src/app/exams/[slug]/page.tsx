interface ExamsPageParams {
  slug: string;
}

export default async function ExamsPage({
  params,
}: {
  params: Promise<ExamsPageParams>;
}) {
  const slug = (await params).slug;

  return <p>{slug}</p>;
}
