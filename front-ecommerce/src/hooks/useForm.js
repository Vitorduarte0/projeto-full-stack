import { useState } from "react";

const UseForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const clearFields = () => {
        setForm(initialState);
    };

    return { form, onChange, clearFields };
};
export default UseForm;
