import "./App.css";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { CustomPackages } from "./components/CustomPackages";
import { Pricing } from "./components/DefaultPackages";
import { EasterPackages } from "./components/EasterPackages";
import { ExamPackages } from "./components/ExamPackages";
import { FathersPackages } from "./components/FathersPackages";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { MothersPackages } from "./components/MothersPackages";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { SelfCarePackages } from "./components/SelfCarePackages";
import { Services } from "./components/Services";
import { ValentinePackages } from "./components/ValentinePackages";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <HowItWorks />
            <Services />
            <Cta />
            <Pricing />
            <ValentinePackages />
            <ExamPackages />
            <SelfCarePackages />
            <FathersPackages />
            <MothersPackages />
            <EasterPackages />
            <CustomPackages />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
