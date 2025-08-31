import { useReducer, useState } from "react";
import { produce } from "immer";

interface CartItem {
    id: number;
    item: string;
    quantity: number;
}

type Action =
    | { type: "added"; id: number; item: string; quantity: number }
    | { type: "removed"; id: number }
    | { type: "increased_quantity"; id: number; quantity: number }
    | { type: "decreased_quantity"; id: number; quantity: number };

function reducerFunction(cartItem: CartItem[], action: Action) {
    return produce(cartItem, (draft) => {
        switch (action.type) {
            case "added":
                draft.push({ id: action.id, item: action.item, quantity: action.quantity });
                break;

            case "removed": {
                const index = draft.findIndex((item) => item.id === action.id);
                if (index !== -1) draft.splice(index, 1);
                break;
            }

            case "increased_quantity": {
                const found = draft.find((item) => item.id === action.id);
                if (found) {
                    found.quantity += 1;
                }
                break;
            }

            case "decreased_quantity": {
                const dec = draft.find((item) => item.id === action.id);
                if (dec && dec.quantity > 0) {
                    dec.quantity -= 1;
                }
                break;
            }

            default:
                return draft;
        }
    });
}

let nextId = 1;

function Cart() {
    const [form, setForm] = useState<CartItem>({ id: 0, item: "", quantity: 0 });
    const [cartItem, dispatch] = useReducer(reducerFunction, [] as CartItem[]);

    function handleFormItem(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, id: nextId++, item: e.target.value });
    }

    function handleFormQuant(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, quantity: Number(e.target.value) });
    }

    function handleAddClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        dispatch({ type: "added", id: form.id, item: form.item, quantity: form.quantity });
    }

    return (
        <>
            <form>
                <br />
                <input
                    type="text"
                    value={form.item}
                    onChange={handleFormItem}
                    placeholder="enter item"
                />
                <input
                    type="text"
                    value={form.quantity}
                    onChange={handleFormQuant}
                    placeholder=" enter quantity"
                />
                <button onClick={handleAddClick}> add</button>
                <br />
                <br />
                <ul>
                    {cartItem.map((items) => (
                        <li key={items.id}>
                            <span>
                                {items.item}, {items.quantity}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "removed", id: items.id });
                                }}
                            >
                                Remove Item
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "increased_quantity", id: items.id, quantity: 1 });
                                }}
                            >
                                +
                            </button>
                            <span> {items.quantity}</span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "decreased_quantity", id: items.id, quantity: 1 });
                                }}
                            >
                                -
                            </button>
                        </li>
                    ))}
                </ul>
            </form>
        </>
    );
}

export default Cart;
