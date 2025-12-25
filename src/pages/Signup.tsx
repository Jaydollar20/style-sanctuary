import SignupForm from "@/components/SignupForm";

interface SignupPageProps {
  onSignup: (email: string, password: string) => Promise<{ error?: { message: string } }>;
}

const Signup = ({ onSignup }: SignupPageProps) => {
  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container-fashion">
        <SignupForm onSignup={onSignup} />
      </div>
    </main>
  );
};

export default Signup;
