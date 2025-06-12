import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Assumes utils.ts exists in src/lib

interface StyledInfoCardProps {
  title: string;
  category?: string; // e.g., "Gold Sponsor", "1st Place Winner"
  imageUrl?: string;
  description: string;
  hoverDetails?: string; // Text to reveal on hover
  imageAlt?: string;
  className?: string;
}

const StyledInfoCard: React.FC<StyledInfoCardProps> = ({
  title,
  category,
  imageUrl,
  description,
  hoverDetails,
  imageAlt,
  className,
}) => {
  console.log('StyledInfoCard loaded for:', title);

  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.02]",
        "bg-card text-card-foreground border", // Ensures shadcn theme variables are used
        className
      )}
    >
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden relative">
          <img
            src={imageUrl}
            alt={imageAlt || title} // Default alt to title if specific alt not provided
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* Optional: Add a subtle gradient overlay if text needs to be placed over image for better legibility */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div> */}
        </div>
      )}

      <CardHeader className={cn("pb-2", imageUrl ? "pt-4" : "pt-6")}>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        {category && (
          <Badge variant="secondary" className="mt-1.5 text-xs w-fit">
            {category}
          </Badge>
        )}
      </CardHeader>

      <CardContent className="pb-4 space-y-2">
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
        {hoverDetails && (
          <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:pt-2">
            <p className="text-sm text-muted-foreground">{hoverDetails}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StyledInfoCard;