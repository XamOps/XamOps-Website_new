import { useEffect, useRef } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/cosmic-404";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nf-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", stagger: 0.12 }
      );

      gsap.fromTo(
        globeRef.current,
        { scale: 0.85, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          onComplete() {
            gsap.to(globeRef.current, {
              y: -6,
              duration: 2.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center px-4 h-[88vh] bg-background"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-6 mb-10">
          <span className="nf-item text-7xl md:text-8xl font-bold text-foreground/80 select-none">
            4
          </span>

          <div ref={globeRef} className="relative w-24 h-24 md:w-32 md:h-32 opacity-0">
            <Globe />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,transparent_70%)]" />
          </div>

          <span className="nf-item text-7xl md:text-8xl font-bold text-foreground/80 select-none">
            4
          </span>
        </div>

        <h1 className="nf-item mb-4 text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
          Ups! Lost in space
        </h1>

        <p className="nf-item mx-auto mb-10 max-w-md text-base md:text-lg text-muted-foreground/70">
          We couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>

        <div className="nf-item">
          <Button
            className="gap-2 hover:scale-105 transition-all duration-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
