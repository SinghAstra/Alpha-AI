import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function CheckoutModal({
  selected,
  onClose,
  onLogin,
}: {
  selected: string;
  onClose: () => void;
  onLogin: () => void;
}) {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <span className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-brand text-white">
          <Icon name="check" size={25} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-brand">
          Plan selected
        </span>
        <DialogTitle className="mt-3 mb-3 text-[29px] font-semibold tracking-[-0.04em]">
          {selected}
        </DialogTitle>
        <DialogDescription className="mx-auto mb-6 max-w-sm text-[11px] leading-relaxed text-muted">
          Sign in to continue to the secure checkout. This prototype won’t process a payment.
        </DialogDescription>
        <Button className="w-full" onClick={onLogin}>
          Continue to sign in <Icon name="arrow" />
        </Button>
        <button
          className="mt-2 cursor-pointer text-[13px] font-bold text-ink transition-colors hover:text-brand"
          onClick={onClose}
        >
          Keep comparing
        </button>
      </DialogContent>
    </Dialog>
  );
}
