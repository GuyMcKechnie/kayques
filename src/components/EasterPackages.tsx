import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

interface PricingProps {
    title: string;
    popular: PopularPlanType;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const pricingList: PricingProps[] = [
    {
        title: "Small",
        popular: 0,
        price: 300,
        description:
            "Celebrate Easter with our thoughtfully curated small gift box, featuring an Easter themed chocolate bunny, a small Easter basket, a plush bunny, and a card to make this Easter truly unforgettable.",
        buttonText: "Buy Now",
        benefitList: [
            "Easter themed chocolate bunny",
            "Small Easter basket",
            "Plush bunny",
            "Card",
        ],
    },
    {
        title: "Medium",
        popular: 1,
        price: 450,
        description:
            "Our medium gift box is perfect for special occasions, featuring all the items from our small gift box, plus a small Easter egg hunt set to make your loved one feel extra special.",
        buttonText: "Buy Now",
        benefitList: [
            "Everything in the small package",
            "Small Easter egg hunt set",
        ],
    },
    {
        title: "Large",
        popular: 0,
        price: 650,
        description:
            "Indulge your loved one in a luxurious Easter gift box, carefully curated with all the items from our small and medium gift boxes, plus a large Easter egg filled with chocolates or treats to make this Easter truly unforgettable.",
        buttonText: "Buy Now",
        benefitList: [
            "Everything in the medium package",
            "Large Easter egg filled with chocolates or treats",
        ],
    },
];

export const EasterPackages = () => {
    return (
        <section id="packages" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Your Dedicated
                <span className="bg-gradient-to-b from-primary to-accent text-transparent bg-clip-text">
                    {" "}
                    Easter Bunny{" "}
                </span>
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Our Easter gift boxes are carefully curated to help you
                celebrate the joy and renewal of the season, no matter the
                occasion.
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <div>
                                <span className="text-3xl font-bold">
                                    R{pricing.price}
                                </span>
                            </div>

                            <CardDescription>
                                {pricing.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Button className="w-full">
                                <a href="https://wa.me/qr/JPGEATOPYQMIH1">
                                    {pricing.buttonText}
                                </a>
                            </Button>
                        </CardContent>

                        <hr className="w-4/5 m-auto mb-4" />

                        <CardFooter className="flex">
                            <div className="space-y-4">
                                {pricing.benefitList.map((benefit: string) => (
                                    <span key={benefit} className="flex">
                                        <Check className="text-green-500" />{" "}
                                        <h3 className="ml-2">{benefit}</h3>
                                    </span>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
