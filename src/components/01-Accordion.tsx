import { useRef, useState, type KeyboardEvent } from "react";
import "../css/Accordion.css";

interface ItemType {
    id: string;
    title: string;
    value: string;
}

const items: ItemType[] = [
    {
        id: "faq-1",
        title: "How do I reset my password?",
        value: "Click on the 'Forgot Password' link on the login page, enter your registered email address, and follow the instructions sent to your inbox to set a new password.",
    },
    {
        id: "faq-2",
        title: "What payment methods do you accept?",
        value: "We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.",
    },
    {
        id: "faq-3",
        title: "Can I cancel or change my subscription at any time?",
        value: "Yes, you can upgrade, downgrade, or cancel your subscription from your Account Settings under the 'Billing' tab. Changes take effect at the end of the current billing cycle.",
    },
    {
        id: "faq-4",
        title: "How does the 14-day free trial work?",
        value: "You get full access to all premium features for 14 days without entering credit card details. When the trial ends, you can choose a paid plan or continue with the free tier.",
    },
    {
        id: "faq-5",
        title: "How can I contact customer support?",
        value: "Our support team is available 24/7 via the live chat widget in the bottom right corner of the dashboard or by email at support@example.com.",
    },
];

export default function Accordion() {
    const [currentSelected, setCurrentSelected] = useState<ItemType["id"][]>(
        [],
    );
    const [canMultiSelect, setCanMultiSelect] = useState<boolean>(false);

    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    function handleCanMultiSelect() {
        setCurrentSelected([]);
        setCanMultiSelect((prev) => !prev);
    }

    function handleSelect(id: ItemType["id"]) {
        if (canMultiSelect) {
            if (currentSelected.includes(id)) {
                // remove it if it exists
                setCurrentSelected((prev) =>
                    prev.filter((itemId) => itemId !== id),
                );
            } else {
                // add it if it doesn't exist
                setCurrentSelected((prev) => [...prev, id]);
            }
        } else {
            if (!currentSelected.includes(id)) {
                // if it is already selected deselect it
                setCurrentSelected([id]);
            } else {
                // else select it
                setCurrentSelected([]);
            }
        }
    }

    function handleKeyDown(event: KeyboardEvent, currentIndex: number) {
        const totalItems = items.length;
        let nextIndex;

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                nextIndex = (currentIndex + 1) % totalItems;
                break;
            case "ArrowUp":
                event.preventDefault();
                nextIndex = (currentIndex - 1 + totalItems) % totalItems;
                break;
            case "Home":
                event.preventDefault();
                nextIndex = 0;
                break;
            case "End":
                event.preventDefault();
                nextIndex = totalItems - 1;
                break;
            default:
                return;
        }

        if (nextIndex !== undefined) buttonRefs.current[nextIndex]?.focus();
    }

    return (
        <div className="wrapper accordion-root" tabIndex={0}>
            <h2>Frequently Asked Questions</h2>
            <button
                type="button"
                className="toggle-btn"
                onClick={handleCanMultiSelect}
            >
                Multi-Select:{" "}
                <span className={canMultiSelect ? "on" : "off"}>
                    {canMultiSelect ? "ON" : "OFF"}
                </span>
            </button>

            <div className="container">
                {items.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        item={item}
                        isSelected={currentSelected.includes(item.id)}
                        onToggle={() => handleSelect(item.id)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        buttonRef={(el) => (buttonRefs.current[index] = el)}
                    />
                ))}
            </div>
        </div>
    );
}

type AccordionItemProps = {
    item: ItemType;
    isSelected: boolean;
    onToggle: () => void;
    onKeyDown: (event: KeyboardEvent) => void;
    buttonRef: (el: HTMLButtonElement | null) => void;
};

export function AccordionItem({
    item,
    isSelected,
    onToggle,
    onKeyDown,
    buttonRef,
}: AccordionItemProps) {
    const headerId = `accordion-header-${item.id}`;
    const panelId = `accordion-panel-${item.id}`;

    return (
        <div className="card">
            <h3 className="heading-wrapper">
                <button
                    ref={buttonRef}
                    id={headerId}
                    type="button"
                    className="header-btn"
                    onClick={onToggle}
                    onKeyDown={onKeyDown}
                    aria-expanded={isSelected}
                    aria-controls={panelId}
                >
                    <span>{item.title}</span>
                    <span
                        className={`icon ${isSelected ? "open" : ""}`}
                        aria-hidden="true"
                    >
                        +
                    </span>
                </button>
            </h3>

            <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className={`accordion-collapse ${isSelected ? "open" : ""}`}
            >
                <div className="accordion-body">
                    <p className="content">{item.value}</p>
                </div>
            </div>
        </div>
    );
}
