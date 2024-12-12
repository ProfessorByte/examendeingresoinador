"use client";

import { useParams } from "next/navigation";
// import { useState } from "react";

export default function ExamsPage() {
  // const [gridTemplate, setGridTemplate] = useState("1fr 18px 1fr");
  // const [directionSplit, setDirectionSplit] = useState(
  //   window.innerWidth < 768 ? "row" : "column"
  // );

  const { slug } = useParams<{ slug: string }>();

  return <p>{slug}</p>;
}
