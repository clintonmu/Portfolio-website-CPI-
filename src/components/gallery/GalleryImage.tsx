import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

interface GalleryImageProps {
  item: GalleryItem;
  className?: string;
}

const GalleryImage = ({ item, className }: GalleryImageProps) => {
  return (
    <Card className={cn("overflow-hidden group cursor-pointer", className)}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <span className="text-sm text-white/80">{item.category}</span>
        </div>
      </div>
    </Card>
  );
};

export default GalleryImage;
