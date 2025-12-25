import { useNavigate } from "react-router-dom";
import Profile from "@/components/Profile";
import { useEffect } from "react";

interface ProfilePageProps {
  user: { email: string; created_at?: string } | null;
  onLogout: () => void;
}

const ProfilePage = ({ user, onLogout }: ProfilePageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container-fashion">
        <Profile user={user} onLogout={onLogout} />
      </div>
    </main>
  );
};

export default ProfilePage;
