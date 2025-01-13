export const performanceCal = (result: number) => {
    if (result > 1 && result <= 25) {
        return { performance: "Low", insight: "Needs improvement, focus on basics." }
    }
    else if (result > 26 && result <= 50) {
        return { performance: "Moderate", insight: "Average result, identify weak areas." }
    }
    else if (result > 51 && result <= 75) {
        return { performance: "Good", insight: "Good progress, aim for excellence." }
    }
    else if (result > 76 && result <= 100) {
        return { performance: "Excellent", insight: "Outstanding work, keep it up!" }
    }
}