import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { ChevronRight, Package } from "lucide-react";

export const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl lg:text-5xl font-bold">
                    <h2>
                        <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
                            Packages
                        </span>{" "}
                        for All Occasions
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Personalized gifts, hassle-free ordering, and seamless
                    delivery—making every occasion special.
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button
                        className="w-full md:w-1/3"
                        onClick={() =>
                            (window.location.href =
                                "https://wa.me/qr/JPGEATOPYQMIH1")
                        }
                    >
                        Get Started
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>

                    <a
                        href="#packages"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        View Packages
                        <Package className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10">
                <HeroCards />
            </div>

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};
