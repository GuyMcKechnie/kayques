import { ChevronRight, Package } from "lucide-react";
import { Button } from "./ui/button";

export const Cta = () => {
    return (
        <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
            <div className="container lg:grid lg:grid-cols-2 place-items-center">
                <div className="lg:col-start-1">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                        All Your
                        <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                            {" "}
                            Effort & Love{" "}
                        </span>
                        In One Gift Box
                    </h2>
                    <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
                        Discover the ultimate gift solution for your loved ones.
                        Our beautifully crafted gift boxes are designed to make
                        your gift-giving experience effortless and special. With
                        a wide range of options to choose from, you're sure to
                        find the perfect fit for any occasion.
                    </p>
                </div>

                <div className="space-x-4 lg:col-start-2">
                    <Button
                        className="w-fit"
                        onClick={() =>
                            (window.location.href =
                                "https://wa.me/qr/JPGEATOPYQMIH1")
                        }
                    >
                        Get Started
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto">
                        <a href="#packages">View Packages</a>
                        <Package className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
