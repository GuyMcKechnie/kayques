import { Statistics } from "./Statistics";
import { ShoppingIcon } from "./Icons";

export const About = () => {
    return (
        <section id="about" className="container py-24 sm:py-32">
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-accent to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                Keyques
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                Finding the perfect gift shouldn’t be stressful.
                                Our platform makes it easy to browse, customize,
                                and order curated packages for any
                                occasion—whether it’s an exam care package, a
                                Valentine’s Day surprise, or a thoughtful
                                birthday gift. With seamless checkout, secure
                                payments, and convenient delivery or pickup
                                options, we take the hassle out of gifting.
                                Celebrate every moment effortlessly with our
                                personalized packages!
                            </p>
                        </div>
                        <Statistics />
                    </div>
                    <ShoppingIcon />
                </div>
            </div>
        </section>
    );
};
