
import React from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Battery, Signal, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusBarProps {
  className?: string;
  time?: string;
}

export function StatusBar({ className, time = "9:41" }: StatusBarProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div 
      className={cn(
        "w-full h-6 px-5 flex items-center justify-between",
        isDark ? "text-white" : "text-black",
        className
      )}
    >
      <div className="font-medium text-sm">{time}</div>
      <div className="flex items-center space-x-2">
        <Signal className="h-3.5 w-3.5" />
        <Wifi className="h-3.5 w-3.5" />
        <Battery className="h-4 w-4" />
      </div>
    </div>
  );
}