import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "EN", name: "English", fullName: "English" },
  { code: "HI", name: "हिंदी", fullName: "Hindi" },
  { code: "SI", name: "སིཀིམ", fullName: "Sikkimese" },
  { code: "MR", name: "मराठी", fullName: "Marathi" }
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 px-2 text-sm font-medium">
          <Globe className="w-4 h-4 mr-1" />
          {selectedLanguage.code}
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language)}
            className="cursor-pointer"
          >
            <span className="font-medium mr-2">{language.code}</span>
            <span className="text-muted-foreground text-xs">{language.fullName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;