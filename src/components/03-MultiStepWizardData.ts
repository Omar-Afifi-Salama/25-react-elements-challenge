export type InputType =
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "dropdown";

export interface FormFieldData {
    label: string;
    name: string;
    inputType: InputType;
    placeholder?: string;
    required?: boolean;
    options?: string[]; // Strongly typed string array for dropdowns
}

export interface StepConfig {
    id: string;
    title: string;
    description: string;
    fields: FormFieldData[];
}

// 1. Static schema configuration (Clean, scalable, defined outside component)
export const WIZARD_STEPS: StepConfig[] = [
    {
        id: "account",
        title: "Create Account",
        description: "Sign up using your personal credentials",
        fields: [
            {
                label: "First Name",
                name: "firstName",
                inputType: "text",
                placeholder: "John",
                required: true,
            },
            {
                label: "Last Name",
                name: "lastName",
                inputType: "text",
                placeholder: "Doe",
                required: true,
            },
            {
                label: "Email",
                name: "email",
                inputType: "email",
                placeholder: "john.doe@example.com",
                required: true,
            },
            {
                label: "Password",
                name: "password",
                inputType: "password",
                placeholder: "••••••••",
                required: true,
            },
        ],
    },
    {
        id: "shipping",
        title: "Shipping Details",
        description: "Where should we send your orders?",
        fields: [
            {
                label: "Country",
                name: "country",
                inputType: "dropdown",
                placeholder: "Select a country",
                required: true,
                options: [
                    "United States",
                    "Canada",
                    "United Kingdom",
                    "Germany",
                    "France",
                    "Japan",
                ],
            },
            {
                label: "Street Address",
                name: "address",
                inputType: "text",
                placeholder: "123 Broadway Ave",
                required: true,
            },
            {
                label: "City",
                name: "city",
                inputType: "text",
                placeholder: "New York",
                required: true,
            },
            {
                label: "Zip / Postal Code",
                name: "zipCode",
                inputType: "text",
                placeholder: "10023",
                required: true,
            },
        ],
    },
    {
        id: "payment",
        title: "Payment Method",
        description: "Enter your billing details securely",
        fields: [
            {
                label: "Cardholder Name",
                name: "cardName",
                inputType: "text",
                placeholder: "John Doe",
                required: true,
            },
            {
                label: "Card Number",
                name: "cardNumber",
                inputType: "text",
                placeholder: "4532 •••• •••• 8910",
                required: true,
            },
            {
                label: "Expiry Date",
                name: "cardExpiry",
                inputType: "text",
                placeholder: "MM/YY",
                required: true,
            },
            {
                label: "CVV / CVC",
                name: "cardCvv",
                inputType: "password",
                placeholder: "123",
                required: true,
            },
        ],
    },
    {
        id: "review",
        title: "Review & Submit",
        description: "Confirm all details before final confirmation",
        fields: [], // Step 4 can render a read-only summary card of all entered data
    },
];
