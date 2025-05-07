import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { OnboardingForm } from './OnboardingForm';
import { useIsMobile } from '@/hooks/use-mobile';
import { StatusBar } from '@/components/ui/status-bar';

export function OnboardingPage() {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <StatusBar className="py-2" />
      
      <header className="w-full p-4 flex justify-end">
        <ThemeToggle />
      </header>
      
      <main className="flex-1 flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className={`w-full ${isMobile ? 'mb-8' : 'md:w-1/2 md:pr-8'} space-y-8`}>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500 dark:from-blue-400 dark:to-purple-400">
                Plan Your Journey,
              </span>
              <br />
              <span>Your Way!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Create personalized travel itineraries tailored to your preferences, schedule and travel style.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-green-500 mr-2"></div>
                <span>Personalized Recommendations</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-blue-500 mr-2"></div>
                <span>AI-Powered Itineraries</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-purple-500 mr-2"></div>
                <span>Local Insights</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`w-full ${isMobile ? '' : 'md:w-1/2'}`}>
          <div className="glass-card p-6 md:p-10 w-full max-w-md mx-auto">
            <OnboardingForm />
          </div>
        </div>
      </main>
      
      <div className="absolute inset-0 -z-10 dark:onboarding-bg-dark light:onboarding-bg-light">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
      </div>
    </div>
  );
}
