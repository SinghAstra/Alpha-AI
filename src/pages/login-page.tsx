import { useState } from "react";
import { AuthForm } from "@/sections/auth/auth-form";
import { AuthStory } from "@/sections/auth/auth-story";
import { AuthSuccess } from "@/sections/auth/auth-success";

export function LoginPage({
  onBack,
  onComplete,
  onPricing,
}: {
  onBack: () => void;
  onComplete: () => void;
  onPricing: () => void;
}) {
  const [emailMode, setEmailMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const signIn = () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setComplete(true);
    }, 850);
  };

  if (complete) {
    return <AuthSuccess onComplete={onComplete} onPricing={onPricing} />;
  }

  return (
    <main
      className="min-h-dvh bg-surface lg:grid lg:h-dvh lg:grid-cols-2 lg:overflow-hidden"
      id="top"
    >
      <AuthStory onBack={onBack} />
      <section className="grid px-6 py-12 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:px-12 lg:py-16 [scrollbar-gutter:stable]">
        <AuthForm
          emailMode={emailMode}
          setEmailMode={setEmailMode}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          loading={loading}
          onSubmit={signIn}
          onBack={onBack}
        />
      </section>
    </main>
  );
}
