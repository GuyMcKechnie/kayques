import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
    PaletteIcon,
    PhoneIcon,
    ShoppingCartIcon,
    SmileIcon,
} from "lucide-react";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <PhoneIcon />,
        title: "Contact",
        description: "Get in touch with us to discuss your gift package needs.",
    },
    {
        icon: <PaletteIcon />,
        title: "Customise",
        description:
            "Personalise your gift package with a variety of options to make it extra special.",
    },
    {
        icon: <ShoppingCartIcon />,
        title: "Order",
        description: "Place your order and let us take care of the rest.",
    },
    {
        icon: <SmileIcon />,
        title: "Enjoy",
        description:
            "Sit back, relax, and enjoy the joy of giving and receiving a unique gift package.",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                How It{" "}
                <span className="bg-gradient-to-b from-primary to-accent text-transparent bg-clip-text">
                    Works{" "}
                </span>
                Step-by-Step Guide
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Discover how our gift packages provide a unique and exciting
                experience for your loved ones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card key={title} className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                <span className="text-primary">{icon}</span>
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
