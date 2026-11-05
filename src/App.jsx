import { CallbackModalProvider } from "./context/CallbackModalContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Eligibility from "./components/Eligibility";
import WhatYouLearn from "./components/WhatYouLearn";
import PlacementAssistance from "./components/PlacementAssistance";
import KickOff from "./components/KickOff";
import CallbackModal from "./components/CallbackModal";

export default function App() {
  return (
    <CallbackModalProvider>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Eligibility />
        <WhatYouLearn />
        <PlacementAssistance />
        <KickOff />
      </main>
      <CallbackModal />
    </CallbackModalProvider>
  );
}
