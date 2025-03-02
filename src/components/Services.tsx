import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ServicesIcon } from "./Icons";
import { BoxIcon, PaintbrushIcon, PaperclipIcon } from "lucide-react";

interface ServiceProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
    {
        title: "Gift Boxes",
        description:
            "Our gift boxes are carefully curated to make your special occasions even more memorable. We offer a wide range of gift boxes to suit every taste and preference.",
        icon: <BoxIcon />,
    },
    {
        title: "Personalized Messages",
        description:
            "Add a personal touch to your gifts with our personalized message service. Our team will help you craft the perfect message to make your gift even more special.",
        icon: <PaperclipIcon />,
    },
    {
        title: "Curated Gift Sets",
        description:
            "Our curated gift sets are designed to make gift-giving easy and convenient. We offer a range of gift sets that cater to different interests and occasions.",
        icon: <PaintbrushIcon />,
    },
];

export const Services = () => {
    return (
        <section className="container py-24 sm:py-32">
            <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="bg-gradient-to-b from-primary to-accent text-transparent bg-clip-text">
                            Client-Centric{" "}
                        </span>
                        Services
                    </h2>

                    <p className="text-muted-foreground text-xl mt-4 mb-8 ">
                        Our gift packages services are designed to make your
                        special occasions even more memorable. From carefully
                        curated gift boxes to personalized messages, we'll help
                        you show your loved ones how much you care.
                    </p>

                    <div className="flex flex-col gap-8">
                        {serviceList.map(
                            ({ icon, title, description }: ServiceProps) => (
                                <Card key={title}>
                                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                                        <div className="mt-1 bg-primary-foreground p-2 rounded-2xl text-primary">
                                            {icon}
                                        </div>
                                        <div>
                                            <CardTitle>{title}</CardTitle>
                                            <CardDescription className="text-md mt-2">
                                                {description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            )
                        )}
                    </div>
                </div>

                <ServicesIcon />
            </div>
        </section>
    );
};
