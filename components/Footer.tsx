import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          Built with{" "}
          <span className="text-foreground font-medium">Next.js</span> &{" "}
          <span className="text-foreground font-medium">Tailwind CSS</span>
        </p>
        <p className="text-muted-foreground text-sm">
          © 2026 김현제 · Seoul
        </p>
      </Container>
    </footer>
  );
}
