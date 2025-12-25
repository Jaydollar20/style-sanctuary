import LoginForm from "@/components/LoginForm";

interface LoginPageProps {
  onLogin: (email: string, password: string) => Promise<{ error?: { message: string } }>;
}

const Login = ({ onLogin }: LoginPageProps) => {
  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container-fashion">
        <LoginForm onLogin={onLogin} />
      </div>
    </main>
  );
};

export default Login;
