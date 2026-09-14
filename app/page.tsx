import { Demo } from "@/components/demo";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Service } from "@/components/service";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Service />
        <Features />
        <Demo />
        <Team />
      </main>
      <SiteFooter />
    </>
  );
}
