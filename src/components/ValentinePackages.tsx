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
            "Celebrate the love of your life with our thoughtfully curated small gift box, featuring an assortment of decadent chocolates, sentimental trinkets, and heartfelt gestures to make this Valentine's Day truly unforgettable.",
        buttonText: "Buy Now",
        benefitList: [
            "1 small flower bouqet",
            "1 personalised love note",
            "1 box of chocolates",
            "1 small scented candle",
        ],
    },
    {
        title: "Medium",
        popular: 1,
        price: 450,
        description:
            "Our medium gift box is perfect for special occasions, featuring a curated selection of treats and goodies to make your loved one feel extra special, including gourmet chocolates, sweet treats, and sentimental keepsakes.",
        buttonText: "Buy Now",
        benefitList: [
            "1 teddy bear",
            "1 balloon bunch",
            "1 personalised birthday card",
            "1 large scented candle",
            "1 bottle of wine",
            "1 set of bath bombs",
        ],
    },
    {
        title: "Large",
        popular: 0,
        price: 700,
        description:
            "Indulge your loved one in a luxurious Valentine's Day gift box, carefully curated with decadent chocolates, plush teddy bears, and sentimental keepsakes to make this day truly unforgettable.",
        buttonText: "Buy Now",
        benefitList: [
            "1 bracelet or necklace",
            "1 boquet of flowers",
            "1 music personalised photo",
            "1 personalised love note",
        ],
    },
];

export const ValentinePackages = () => {
    return (
        <section id="packages" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Packages for the Season of
                <span className="bg-gradient-to-b from-primary to-accent text-transparent bg-clip-text">
                    {" "}
                    Love{" "}
                </span>
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Our Valentine's Day gift boxes are carefully curated to help you
                express your love and affection, no matter the occasion.
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
