import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

/**
 * Hook to apply color scheme from siteConfig to CSS variables
 * This allows the color scheme to be configured via siteConfig.ts
 */
export function useThemeColors() {
  useEffect(() => {
    const root = document.documentElement;
    const { colors } = siteConfig;

    // Apply light mode colors
    const lightColors = colors.light;
    root.style.setProperty("--primary", lightColors.primary);
    root.style.setProperty("--primary-foreground", lightColors.primaryForeground);
    root.style.setProperty("--accent", lightColors.accent);
    root.style.setProperty("--accent-foreground", lightColors.accentForeground);
    root.style.setProperty("--background", lightColors.background);
    root.style.setProperty("--foreground", lightColors.foreground);
    root.style.setProperty("--card", lightColors.card);
    root.style.setProperty("--card-foreground", lightColors.cardForeground);
    root.style.setProperty("--secondary", lightColors.secondary);
    root.style.setProperty("--secondary-foreground", lightColors.secondaryForeground);
    root.style.setProperty("--muted", lightColors.muted);
    root.style.setProperty("--muted-foreground", lightColors.mutedForeground);
    root.style.setProperty("--border", lightColors.border);
    root.style.setProperty("--input", lightColors.border);
    root.style.setProperty("--ring", lightColors.accent);

    // Update hero overlay based on primary color
    root.style.setProperty(
      "--hero-overlay",
      `linear-gradient(135deg, hsl(${lightColors.primary.split(' ')[0]} ${lightColors.primary.split(' ')[1]} 12% / 0.85) 0%, hsl(${lightColors.primary.split(' ')[0]} 45% 22% / 0.75) 100%)`
    );
  }, []);
}
