import { motion } from "framer-motion";
import { User, Calendar, LogOut, Mail } from "lucide-react";

interface ProfileProps {
  user: { email: string; created_at?: string } | null;
  onLogout: () => void;
}

const Profile = ({ user, onLogout }: ProfileProps) => {
  if (!user) return null;

  const joinDate = user.created_at 
    ? new Date(user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'N/A';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <User size={40} className="text-muted-foreground" />
        </div>
        <h1 className="font-display text-4xl lg:text-5xl">Your Profile</h1>
      </div>

      <div className="bg-card border border-border p-8 space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-border">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
            <Mail size={20} className="text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-6 border-b border-border">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
            <Calendar size={20} className="text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Member Since</p>
            <p className="font-medium">{joinDate}</p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-3 text-destructive hover:text-destructive/80 transition-colors"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">
        Avatar uploads coming soon with cloud storage
      </p>
    </motion.div>
  );
};

export default Profile;
