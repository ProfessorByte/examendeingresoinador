import { Footer } from "@/components/Footer";

interface FacultiesLayoutProps {
  children: React.ReactNode;
}

export default function FacultiesLayout({ children }: FacultiesLayoutProps) {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      {children}
      <Footer />
    </div>
  );
}
