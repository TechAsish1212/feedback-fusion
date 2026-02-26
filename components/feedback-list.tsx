"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { getCategoryDesign } from "@/app/data/category-data";

interface FeedbackListProps {
  initialPosts: any[];
  userId: string | null;
}

const FeedbackList = ({ initialPosts, userId }: FeedbackListProps) => {
  const [posts, setPosts] = useState(initialPosts);

  const handleVote = async (postId: string) => {
    if (!userId) {
      alert("Please sign in to vote");
      return;
    }

    try {
      const res = await fetch(`/api/vote`, {
        method: "POST",
        body: JSON.stringify({ postId }),
      });

      const data = await res.json();

      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? { ...post, votes: data.votes }
            : post
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (posts.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          No feedback yet. Be the first to share 🚀
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => {
        const design = getCategoryDesign(post.category);
        const Icon = design.icon;

        const voteCount = post.votes?.length || post._count?.votes || 0;

        return (
          <Card
            key={post.id}
            className="hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6 flex gap-6">
              
              {/* Vote Section */}
              <div className="flex flex-col items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleVote(post.id)}
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <span className="text-sm font-semibold">
                  {voteCount}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-3">
                <Link href={`/feedback/${post.id}`}>
                  <CardTitle className="text-lg hover:underline cursor-pointer">
                    {post.title}
                  </CardTitle>
                </Link>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-md border ${design.light} ${design.border}`}
                  >
                    <Icon className={`h-3 w-3 ${design.text}`} />
                    {post.category}
                  </div>

                  <span>
                    by {post.author?.name || "Anonymous"}
                  </span>

                  <span>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default FeedbackList;