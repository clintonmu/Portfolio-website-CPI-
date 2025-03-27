import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {post.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
