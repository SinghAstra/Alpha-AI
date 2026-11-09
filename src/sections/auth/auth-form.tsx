import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthForm({
  emailMode,
  setEmailMode,
  showPassword,
  setShowPassword,
  loading,
  onSubmit,
  onBack,
}: {
  emailMode: boolean;
  setEmailMode: (value: boolean) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  loading: boolean;
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <div className="mx-auto my-auto w-full max-w-[420px]">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="grid size-[38px] shrink-0 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink transition-all hover:-translate-y-px hover:border-ink hover:bg-ink hover:text-white hover:shadow-[0_8px_20px_rgba(23,33,30,0.16)] active:translate-y-0 active:scale-95"
          onClick={onBack}
          aria-label="Back to home"
        >
          <Icon name="arrow" size={17} className="rotate-180" />
        </button>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-brand">
          {emailMode ? "Welcome back" : "Start validating"}
        </span>
      </div>
      <h2 className="mt-3 mb-2.5 text-[34px] leading-[1.08] font-semibold tracking-[-0.05em]">
        {emailMode ? "Sign in with email." : "Two free checks. Every day."}
      </h2>
      <p className="mb-7 text-[13px] leading-[1.65] text-muted">
        {emailMode
          ? "Enter the details linked to your account."
          : "No card required. No broker connection needed."}
      </p>

      {!emailMode ? (
        <>
          <button
            className="flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] border border-line bg-surface px-5 text-[13px] font-bold transition-colors hover:border-[#aab5af] hover:bg-[#f5f6f2] disabled:opacity-50"
            onClick={onSubmit}
            disabled={loading}
          >
            <span className="text-[17px] font-bold text-[#4285f4]">G</span>
            {loading ? "Opening Google…" : "Continue with Google"}
          </button>
          <div className="relative my-5 border-t border-line text-center">
            <span className="relative -top-2.5 bg-surface px-2.5 text-[10px] tracking-[0.03em] text-muted">
              or
            </span>
          </div>
          <button
            className="relative flex min-h-[52px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-ink px-12 text-[13px] font-bold text-white transition-colors hover:bg-ink-2"
            onClick={() => setEmailMode(true)}
          >
            Continue with email
            <Icon name="arrow" className="absolute right-[18px]" />
          </button>
        </>
      ) : (
        <form
          className="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <Label htmlFor="email" className="mb-2">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            className="mb-5"
          />
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <button
              type="button"
              className="mb-2 cursor-pointer text-[10px] font-bold text-brand transition-colors hover:text-brand-dark"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative mb-5">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              minLength={6}
              autoComplete="current-password"
              className="pr-14"
            />
            <button
              type="button"
              className="absolute top-4 right-3.5 cursor-pointer text-[10px] font-bold text-brand transition-colors hover:text-brand-dark"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <Button type="submit" className="w-full">
            {loading ? "Signing in…" : "Sign in"} {!loading && <Icon name="arrow" />}
          </Button>
          <button
            type="button"
            className="mt-2 min-h-11 cursor-pointer text-[10px] font-bold text-brand transition-colors hover:text-brand-dark"
            onClick={() => setEmailMode(false)}
          >
            Back to all sign-in options
          </button>
        </form>
      )}

      <p className="mt-5 mb-4 text-center text-[10px] leading-relaxed">
        By continuing, you agree to our{" "}
        <button type="button" className="cursor-pointer font-bold text-brand hover:text-brand-dark">
          Terms
        </button>{" "}
        and{" "}
        <button type="button" className="cursor-pointer font-bold text-brand hover:text-brand-dark">
          Privacy Policy
        </button>
        .
      </p>

      <div className="rounded-[10px] border border-line p-[18px] text-center text-xs">
        {emailMode ? (
          <>
            New to Alphashots?{" "}
            <button
              type="button"
              className="cursor-pointer font-bold text-brand hover:text-brand-dark"
              onClick={() => setEmailMode(false)}
            >
              Create a free account
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              className="cursor-pointer font-bold text-brand hover:text-brand-dark"
              onClick={() => setEmailMode(true)}
            >
              Sign in
            </button>
          </>
        )}
      </div>

      <div className="mt-5 flex items-start justify-center gap-2 text-[10px] leading-[1.6] text-muted">
        <Icon name="lock" size={15} className="shrink-0" /> Protected by encrypted sign-in. We never
        ask for brokerage credentials.
      </div>
    </div>
  );
}
