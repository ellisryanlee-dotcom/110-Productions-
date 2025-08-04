import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, Trash2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { CommentWithArtist, TrackWithDetails } from "@shared/schema";

interface TrackCommentsProps {
  trackId: string;
  currentArtistId?: string;
}

export function TrackComments({ trackId, currentArtistId = "artist-1" }: TrackCommentsProps) {
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: comments = [], isLoading } = useQuery<CommentWithArtist[]>({
    queryKey: ["/api/tracks", trackId, "comments"],
    enabled: showComments,
  });

  const { data: trackDetails } = useQuery<TrackWithDetails>({
    queryKey: ["/api/tracks", trackId, "details"],
    queryFn: () => apiRequest(`/api/tracks/${trackId}/details?artistId=${currentArtistId}`),
  });

  const likeMutation = useMutation({
    mutationFn: () => apiRequest(`/api/tracks/${trackId}/like`, {
      method: "POST",
      body: { artistId: currentArtistId },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tracks", trackId, "details"] });
      queryClient.invalidateQueries({ queryKey: ["/api/tracks"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update like status",
        variant: "destructive",
      });
    },
  });

  const commentMutation = useMutation({
    mutationFn: (content: string) => apiRequest(`/api/tracks/${trackId}/comments`, {
      method: "POST",
      body: { content, artistId: currentArtistId },
    }),
    onSuccess: () => {
      setNewComment("");
      queryClient.invalidateQueries({ queryKey: ["/api/tracks", trackId, "comments"] });
      queryClient.invalidateQueries({ queryKey: ["/api/tracks", trackId, "details"] });
      toast({
        title: "Success",
        description: "Comment added successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error", 
        description: "Failed to add comment",
        variant: "destructive",
      });
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: string) => apiRequest(`/api/comments/${commentId}`, {
      method: "DELETE",
      body: { artistId: currentArtistId },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tracks", trackId, "comments"] });
      queryClient.invalidateQueries({ queryKey: ["/api/tracks", trackId, "details"] });
      toast({
        title: "Success",
        description: "Comment deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete comment",
        variant: "destructive",
      });
    },
  });

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    commentMutation.mutate(newComment);
  };

  const handleDeleteComment = (commentId: string) => {
    deleteCommentMutation.mutate(commentId);
  };

  const formatDate = (date: string | Date | null | undefined) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-4">
      {/* Like and Comment Actions */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => likeMutation.mutate()}
          disabled={likeMutation.isPending}
          className={`text-gray-400 hover:text-orange-accent ${
            trackDetails?.isLiked ? "text-orange-accent" : ""
          }`}
          data-testid="button-like"
        >
          <Heart 
            className={`h-5 w-5 mr-2 ${trackDetails?.isLiked ? "fill-current" : ""}`} 
          />
          {trackDetails?.likesCount || 0}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowComments(!showComments)}
          className="text-gray-400 hover:text-teal-accent"
          data-testid="button-comments"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          {trackDetails?.commentsCount || 0}
        </Button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="space-y-4">
          {/* Add Comment Form */}
          <Card className="p-4 bg-dark-elevated border-gray-border">
            <form onSubmit={handleSubmitComment} className="space-y-3">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="bg-dark-bg border-gray-border focus:border-orange-accent resize-none"
                rows={3}
                data-testid="textarea-comment"
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="sm"
                  disabled={!newComment.trim() || commentMutation.isPending}
                  className="bg-orange-accent hover:bg-orange-600 text-white"
                  data-testid="button-submit-comment"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {commentMutation.isPending ? "Posting..." : "Post"}
                </Button>
              </div>
            </form>
          </Card>

          {/* Comments List */}
          <div className="space-y-3">
            {isLoading ? (
              <div className="text-center text-gray-400 py-4">Loading comments...</div>
            ) : comments.length === 0 ? (
              <div className="text-center text-gray-400 py-4">
                No comments yet. Be the first to comment!
              </div>
            ) : (
              comments.map((comment) => (
                <Card 
                  key={comment.id} 
                  className="p-4 bg-dark-elevated border-gray-border"
                  data-testid={`comment-${comment.id}`}
                >
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.artist.avatar || undefined} />
                      <AvatarFallback className="bg-orange-accent text-white text-sm">
                        {comment.artist.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">
                            {comment.artist.name}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {formatDate(comment.createdAt || "")}
                          </span>
                        </div>
                        
                        {comment.artistId === currentArtistId && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteComment(comment.id)}
                            disabled={deleteCommentMutation.isPending}
                            className="text-gray-400 hover:text-red-400 p-1 h-auto"
                            data-testid={`button-delete-comment-${comment.id}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}