import { CheckIcon } from "lucide-react";

export const StepIndicator: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const totalSteps = 4;

  return (
    <div className="flex gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isCurrentStep = currentStep === stepNumber;
        const isLastStep = stepNumber === totalSteps;

        return (
          <span
            key={stepNumber}
            className={`h-20 w-20 rounded-full text-[2.5rem] text-center flex items-center justify-center font-bold text-black mb-4 ${
              isCurrentStep ? "bg-amarelo-100" : "bg-branco-100"
            }`}
          >
            {isLastStep ? <CheckIcon className="w-10 h-10" /> : stepNumber}
          </span>
        );
      })}
    </div>
  );
};
