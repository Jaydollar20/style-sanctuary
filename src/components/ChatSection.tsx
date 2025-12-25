import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: string;
  username: string;
  message: string;
  createdAt: string;
}

interface ChatSectionProps {
  user?: { email: string } | null;
}

const ChatSection = ({ user }: ChatSectionProps) => {
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      username: "Sophie M.",
      message: "Love the new collection! The wool coat is absolutely stunning.",
      createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: "2",
      username: "James K.",
      message: "Quality is exceptional. Worth every penny.",
      createdAt: new Date(Date.now() - 7200000).toISOString(),
    },
    {
      id: "3",
      username: "Emma L.",
      message: "The silk dress fits perfectly. Highly recommend!",
      createdAt: new Date(Date.now() - 10800000).toISOString(),
    },
  ]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be logged in to post comments.",
        variant: "destructive",
      });
      return;
    }
    if (!message.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      username: user.email.split("@")[0],
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    setComments((prev) => [newComment, ...prev]);
    setMessage("");
    toast({
      title: "Comment posted",
      description: "Your comment has been added.",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container-fashion max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
            Community
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3">
            Join the Conversation
          </h2>
        </motion.div>

        {/* Comment Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mb-10"
        >
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={user ? "Share your thoughts..." : "Sign in to comment..."}
              className="input-fashion flex-1"
              disabled={!user}
            />
            <button
              type="submit"
              disabled={!user || !message.trim()}
              className="btn-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </motion.form>

        {/* Comments List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
                className="bg-card p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={18} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-medium">{comment.username}</span>
                      <span className="text-muted-foreground text-sm">
                        {formatTime(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {comment.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
