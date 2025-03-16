import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

interface PricingProps {
    title: string;
    popular: PopularPlanType;
    description: string;
    buttonText: string;
}

const pricingList: PricingProps[] = [
    {
        title: "Custom Packages",
        popular: 0,
        description:
            "Create your own unique gift box with our custom packages, tailored to make your loved one feel special. Choose from a variety of treats and goodies to make it a one-of-a-kind gift.",
        buttonText: "Buy Now",
    },
];

export const CustomPackages = () => {
    return (
        <section
            id="packages"
            className="container py-24 sm:py-32 flex flex-col items-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Can't find what you're looking for?
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Create your own unique gift box with our custom packages,
                tailored to make your loved one feel special.
            </h3>
            <div className="grid gap-8 max-w-xl">
                {pricingList.map((pricing: PricingProps) => (
                    <Card
                        key={pricing.title}
                        className={
                            pricing.popular === PopularPlanType.YES
                                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                                : ""
                        }
                    >
                        <CardHeader>
                            <CardTitle className="flex item-center justify-between">
                                {pricing.title}
                                {pricing.popular === PopularPlanType.YES ? (
                                    <Badge
                                        variant="secondary"
                                        className="text-sm"
                                    >
                                        Most popular
                                    </Badge>
                                ) : null}
                            </CardTitle>

                            <CardDescription>
                                {pricing.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Button
                                className="w-full"
                                onClick={() =>
                                    (window.location.href =
                                        "https://wa.me/qr/JPGEATOPYQMIH1")
                                }
                            >
                                Buy Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
