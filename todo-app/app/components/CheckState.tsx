import React, { useState, useEffect } from "react";

interface CheckStateProps {
    taskId: string;
}

const CheckState: React.FC<CheckStateProps> = ({ taskId }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8000/tasks/${taskId}`)
        .then((response) => response.json())
        .then((data) => {
            setIsChecked(data.completed);
        })
        .catch((error) => {
            console.error("Error loading data:", error);
        });
    }, []);

    const toggleCheckbox = () => {
        const updatedCheckedState = !isChecked;
        fetch(`http://localhost:8000/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: updatedCheckedState }),
        })
        .then((response) => response.json())
        .then((data) => {
            setIsChecked(updatedCheckedState);
            console.log("Data updated successfully:", data);
        })
        .catch((error) => {
            console.error("Error updating data:", error);
        });
    };

    return (
        <div className="form-control">
        <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={isChecked}
            onChange={toggleCheckbox}
        />
        </div>
    );
};

export default CheckState;
