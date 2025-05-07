
import { useState } from 'react';
import { MapPin, Calendar, Users, User, Heart, Home, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

type GroupType = 'solo' | 'couple' | 'family' | 'friends';

export function OnboardingForm() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [groupType, setGroupType] = useState<GroupType>('solo');
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !duration) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setSidePanelOpen(true);
    
    toast({
      title: "Journey information saved!",
      description: `Planning your trip to ${destination} for ${duration} as ${groupType}`,
    });
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
        <div className="space-y-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Where to?"
              className="pl-10 py-6 bg-background/80 dark:bg-secondary/30 shadow-input transition-all text-lg"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="pl-10 py-6 bg-background/80 dark:bg-secondary/30 shadow-input text-lg">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent className="bg-background/95 backdrop-blur-md">
                <SelectItem value="weekend">Weekend Getaway (2-3 days)</SelectItem>
                <SelectItem value="week">One Week (5-7 days)</SelectItem>
                <SelectItem value="twoweeks">Two Weeks (12-14 days)</SelectItem>
                <SelectItem value="month">Extended Trip (3+ weeks)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <Users className="h-5 w-5" />
            <span>Group Type</span>
          </div>
          
          <ToggleGroup 
            type="single" 
            className="flex flex-wrap justify-between gap-2" 
            value={groupType}
            onValueChange={(value) => {
              if (value) setGroupType(value as GroupType);
            }}
          >
            <ToggleGroupItem 
              value="solo" 
              aria-label="Solo" 
              className="flex-1 py-3 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground transition-all flex items-center justify-center gap-2"
            >
              <User className="h-4 w-4" />
              <span>Solo</span>
            </ToggleGroupItem>
            
            <ToggleGroupItem 
              value="couple" 
              aria-label="Couple" 
              className="flex-1 py-3 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground transition-all flex items-center justify-center gap-2"
            >
              <Heart className="h-4 w-4" />
              <span>Couple</span>
            </ToggleGroupItem>
            
            <ToggleGroupItem 
              value="family" 
              aria-label="Family" 
              className="flex-1 py-3 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground transition-all flex items-center justify-center gap-2"
            >
              <Home className="h-4 w-4" />
              <span>Family</span>
            </ToggleGroupItem>
            
            <ToggleGroupItem 
              value="friends" 
              aria-label="Friends" 
              className="flex-1 py-3 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground transition-all flex items-center justify-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Friends</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <Button 
          type="submit" 
          className="w-full py-6 text-lg bg-accent hover:bg-accent/90 transition-all"
        >
          Continue
        </Button>
      </form>

      {sidePanelOpen && isMobile && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="glass-card p-6 max-w-md w-full">
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl font-bold">Your Journey Plan</h2>
              
              <div className="space-y-4 text-left w-full">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Destination</h3>
                  <p className="text-lg font-medium">{destination}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Duration</h3>
                  <p className="text-lg font-medium">
                    {duration === 'weekend' && 'Weekend Getaway (2-3 days)'}
                    {duration === 'week' && 'One Week (5-7 days)'}
                    {duration === 'twoweeks' && 'Two Weeks (12-14 days)'}
                    {duration === 'month' && 'Extended Trip (3+ weeks)'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Group Type</h3>
                  <p className="text-lg font-medium capitalize flex items-center gap-2">
                    {groupType === 'solo' && <><User className="h-4 w-4" /> Solo</>}
                    {groupType === 'couple' && <><Heart className="h-4 w-4" /> Couple</>}
                    {groupType === 'family' && <><Home className="h-4 w-4" /> Family</>}
                    {groupType === 'friends' && <><UserPlus className="h-4 w-4" /> Friends</>}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  className="flex-1" 
                  onClick={() => setSidePanelOpen(false)}
                  variant="outline"
                >
                  Back
                </Button>
                <Button className="flex-1">
                  Personalize Your Trip
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {sidePanelOpen && !isMobile && (
        <div className="fixed top-0 right-0 bottom-0 z-50 w-1/3 h-full bg-background/95 backdrop-blur-xl border-l border-border p-6 transform transition-all duration-300 ease-in-out flex flex-col">
          <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
            <h2 className="text-2xl font-bold">Your Journey Plan</h2>
            
            <div className="space-y-4 text-left w-full">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Destination</h3>
                <p className="text-lg font-medium">{destination}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Duration</h3>
                <p className="text-lg font-medium">
                  {duration === 'weekend' && 'Weekend Getaway (2-3 days)'}
                  {duration === 'week' && 'One Week (5-7 days)'}
                  {duration === 'twoweeks' && 'Two Weeks (12-14 days)'}
                  {duration === 'month' && 'Extended Trip (3+ weeks)'}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Group Type</h3>
                <p className="text-lg font-medium capitalize flex items-center gap-2">
                  {groupType === 'solo' && <><User className="h-4 w-4" /> Solo</>}
                  {groupType === 'couple' && <><Heart className="h-4 w-4" /> Couple</>}
                  {groupType === 'family' && <><Home className="h-4 w-4" /> Family</>}
                  {groupType === 'friends' && <><UserPlus className="h-4 w-4" /> Friends</>}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 w-full">
              <Button 
                className="flex-1" 
                onClick={() => setSidePanelOpen(false)}
                variant="outline"
              >
                Back
              </Button>
              <Button className="flex-1">
                Personalize Your Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
