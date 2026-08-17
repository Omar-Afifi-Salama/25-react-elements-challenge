import { useState, type ChangeEvent, type FormEvent } from "react";
import { WIZARD_STEPS, type FormFieldData } from "./03-MultiStepWizardData";
import "../css/03-MultiStepWizard.css";

export default function MultiStepWizard() {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const activeStep = WIZARD_STEPS[currentStepIndex];
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === WIZARD_STEPS.length - 1;

    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleNext() {
        if (!isLastStep) {
            setCurrentStepIndex((prev) => prev + 1);
        }
    }

    function handleBack() {
        if (!isFirstStep) {
            setCurrentStepIndex((prev) => prev - 1);
        }
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (isLastStep) {
            console.log("Final Submitted Payload:", formValues);
            setIsSubmitted(true);
        } else {
            handleNext();
        }
    }

    function handleReset() {
        setFormValues({});
        setCurrentStepIndex(0);
        setIsSubmitted(false);
    }

    return (
        <div className="wizard-root">
            {/* 1. Step Progress Indicators */}
            <div
                className="stepper-nav"
                role="tablist"
                aria-label="Wizard Steps"
            >
                {WIZARD_STEPS.map((step, idx) => {
                    const isComplete = idx < currentStepIndex || isSubmitted;
                    const isActive = idx === currentStepIndex && !isSubmitted;

                    return (
                        <div
                            key={step.id}
                            className={`step-item ${isActive ? "active" : ""} ${
                                isComplete ? "complete" : ""
                            }`}
                        >
                            <button
                                type="button"
                                className="step-circle"
                                disabled={idx > currentStepIndex || isSubmitted}
                                onClick={() => setCurrentStepIndex(idx)}
                                aria-current={isActive ? "step" : undefined}
                                aria-label={`Step ${idx + 1}: ${step.title}`}
                            >
                                {isComplete ? "✓" : idx + 1}
                            </button>
                            <span className="step-label">{step.title}</span>
                        </div>
                    );
                })}
            </div>

            {/* 2. Wizard Card Body */}
            <div className="wizard-card">
                {isSubmitted ? (
                    <div className="success-view">
                        <div className="success-icon">✓</div>
                        <h2>Submission Complete!</h2>
                        <p>Your details have been saved successfully.</p>
                        <button
                            type="button"
                            className="btn-primary"
                            onClick={handleReset}
                        >
                            Reset Wizard
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <header className="step-header">
                            <h2>{activeStep.title}</h2>
                            <p>{activeStep.description}</p>
                        </header>

                        {/* Render fields or Review Summary if on the last step */}
                        {activeStep.fields.length > 0 ? (
                            <div className="fields-grid">
                                {activeStep.fields.map((field) => (
                                    <FormField
                                        key={field.name}
                                        field={field}
                                        value={formValues[field.name]}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="review-summary">
                                {Object.keys(formValues).length === 0 ? (
                                    <p className="empty-msg">
                                        No information entered yet.
                                    </p>
                                ) : (
                                    <dl className="summary-list">
                                        {Object.entries(formValues).map(
                                            ([key, val]) => (
                                                <div
                                                    key={key}
                                                    className="summary-row"
                                                >
                                                    <dt>{key}:</dt>
                                                    <dd>{val || "—"}</dd>
                                                </div>
                                            ),
                                        )}
                                    </dl>
                                )}
                            </div>
                        )}

                        {/* Controls */}
                        <footer className="wizard-controls">
                            <button
                                type="button"
                                className="btn-secondary"
                                disabled={isFirstStep}
                                onClick={handleBack}
                            >
                                Back
                            </button>
                            {isLastStep ? (
                                <button type="submit" className="btn-primary">
                                    Confirm & Submit
                                </button>
                            ) : (
                                <button type="submit" className="btn-primary">
                                    Next Step →
                                </button>
                            )}
                        </footer>
                    </form>
                )}
            </div>
        </div>
    );
}

type FormFieldProps = {
    field: FormFieldData;
    value: string | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export function FormField({ field, value, onChange }: FormFieldProps) {
    const isDropdown = field.inputType === "dropdown";

    return (
        <div className="form-field">
            <label htmlFor={field.name}>
                {field.label}
                {field.required && <span className="req-star">*</span>}
            </label>

            {isDropdown ? (
                <select
                    id={field.name}
                    name={field.name}
                    value={value ?? ""}
                    required={field.required}
                    onChange={onChange}
                >
                    <option value="">
                        {field.placeholder || "Please choose..."}
                    </option>
                    {field.options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={field.name}
                    type={field.inputType}
                    name={field.name}
                    value={value ?? ""}
                    required={field.required}
                    placeholder={field.placeholder}
                    onChange={onChange}
                />
            )}
        </div>
    );
}
