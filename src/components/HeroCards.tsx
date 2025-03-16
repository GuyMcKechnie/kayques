import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Circle } from "lucide-react";
import { GiftIcon } from "./Icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* Testimonial */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage
                            alt=""
                            src="https://i.pravatar.cc/150?img=4"
                        />
                        <AvatarFallback>SH</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">Emily Walker</CardTitle>
                        <CardDescription>@emily_walker</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>The Valentine's package was adorable!</CardContent>
            </Card>

            {/* Team */}
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src="https://i.pravatar.cc/150?img=52"
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">Leo Miranda</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Birthday Package
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        I purchased the birthday package for my wife and it
                        exceeded my expectations. The package was filled with a
                        wide variety of goodies that she absolutely loved.
                    </p>
                </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Small Easter Package
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">R300</span>
                    </div>
                    <CardDescription>
                        Hopping into Easter with joy and delight, surrounded by
                        colorful eggs and sweet treats.
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
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {[
                            "Chocolate bunny",
                            "Basket",
                            "Plush bunny",
                            "Personalised card",
                        ].map((benefit: string) => (
                            <span key={benefit} className="flex">
                                <Circle className="text-primary" />{" "}
                                <h3 className="ml-2">{benefit}</h3>
                            </span>
                        ))}
                    </div>
                </CardFooter>
            </Card>

            {/* Service */}
            <Card className="absolute w-[300px] right-[40px] bottom-[10px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <GiftIcon />
                    </div>
                    <div>
                        <CardTitle>Customiseable Packages</CardTitle>
                        <CardDescription className="text-md mt-2">
                            Choose from a variety of themes, colours, and treats
                            to make your gift truly special.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
