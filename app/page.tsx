import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button className="shadow-lg" variant="outline">Button</Button>

        {/* `@radix-ui/react-slot`によってLinkにButtonの見た目を渡せる。  */}
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </main>
  );
}
