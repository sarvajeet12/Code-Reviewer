import { generateAnswer } from "../services/aiService.js";

export const getReview = async (req, resp) => {
    try {

        // Get Prompt
        const prompt = req.body.prompt;


        // If not present
        if (!prompt) {
            return resp.status(404).json({
                message: "Prompt is required"
            })
        } else {
            // Function Call
            const result = await generateAnswer(prompt)


            // Response
            resp.status(200).json({
                success: true,
                message: "Successfully",
                response: result
            })
        }

    } catch (error) {
        // console.log("Error occur while get review");

        resp.status(500).json({
            success: false,
            message: "Error occur while get review",
            error: error.message
        })
    }
}