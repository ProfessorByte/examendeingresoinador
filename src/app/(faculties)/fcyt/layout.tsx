import { Hero } from "@/components/Hero";

interface FcytLayoutProps {
  children: React.ReactNode;
}

export default function FcytLayout({ children }: FcytLayoutProps) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
