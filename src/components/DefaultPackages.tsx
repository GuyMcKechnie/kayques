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
        price: 350,
        description:
            "Perfect for small occasions, consisting of a small selection of treats and goodies to make your loved one feel loved on their special day.",
        buttonText: "Buy Now",
        benefitList: [
            "1 small balloon bunch",
            "2 treats",
            "1 personalised birthday card",
            "1 small scented candle",
            "4 cupcakes",
        ],
    },
    {
        title: "Medium",
        popular: 1,
        price: 500,
        description:
            "Our medium gift box is perfect for special occasions, featuring a curated selection of treats and goodies to make your loved one feel extra special.",
        buttonText: "Buy Now",
        benefitList: [
            "1 large balloon bunch",
            "5 treats",
            "1 personalised birthday card",
            "1 large scented candle",
            "1 bottle of sparkling juice",
            "1 teddy bear",
        ],
    },
    {
        title: "Large",
        popular: 0,
        price: 700,
        description:
            "Our large gift box is perfect for extra special occasions, featuring a premium selection of treats and goodies to make your loved one feel truly loved on their special day.",
        buttonText: "Buy Now",
        benefitList: [
            "1 large helium balloon bunch",
            "12 cupcakes",
            "8 treats",
            "1 personalised birthday card",
            "1 large scented candle",
            "1 bottle of sparkling juice",
            "1 bathing set",
            "1 teddy bear",
        ],
    },
];

export const Pricing = () => {
    return (
        <section id="packages" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Packages Priced to
                <span className="bg-gradient-to-b from-primary to-accent text-transparent bg-clip-text">
                    {" "}
                    Go
                </span>
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Our pricing plans are designed to fit your gift-giving needs, no
                matter the purpose.
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
