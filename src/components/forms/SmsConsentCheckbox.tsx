import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

interface SmsConsentCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  className?: string;
}

export function SmsConsentCheckbox({ 
  checked, 
  onCheckedChange, 
  id = "smsConsent",
  className
}: SmsConsentCheckboxProps) {
  return (
    <div className={cn("flex items-start gap-3 p-3 md:p-4 bg-muted rounded-xl", className)}>
      <Checkbox 
        id={id} 
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        className="mt-0.5 flex-shrink-0"
      />
      <Label htmlFor={id} className="text-xs md:text-sm text-muted-foreground cursor-pointer leading-relaxed">
        By checking this box, you agree to receive SMS messages from {siteConfig.company.name} related to conversational purposes. 
        You may reply STOP to opt out at any time. Reply HELP to {siteConfig.contact.phone} for assistance. 
        Messages and data rates may apply. Message frequency will vary. 
        Learn more on our{" "}
        <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>
        {" "}page and{" "}
        <Link to="/terms-and-conditions" className="text-accent hover:underline">Terms & Conditions</Link>.
      </Label>
    </div>
  );
}
