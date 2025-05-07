
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { OnboardingPage } from "@/components/onboarding/OnboardingPage";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden w-full min-h-screen">
        <OnboardingPage />
      </div>
    </ThemeProvider>
  );
};

export default Index;
