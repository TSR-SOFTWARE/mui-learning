const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function calculate(principal, rate, time) {
    const params = new URLSearchParams({ principal, rate, time });
    const response = await fetch(`${BASE_URL}/api/calculate?${params}`);

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Calculation failed");
    }

    return await response.json();
}