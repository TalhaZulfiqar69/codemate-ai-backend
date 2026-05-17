import { Request, Response } from 'express';
import axios from "axios";
import { marked } from "marked";
import ResponseHelper from "../utils/response.utils.js";

const LLM_URL = process.env.LLM_MODEL_BASE_URL;

class LLMController {
  static async getLLMResponse(req: Request, res: Response) {
    let response = ResponseHelper.getResponse(
      false,
      "Something went wrong",
      {},
      400
    );
    try {
      const { prompt } = req.body;
      console.log("promptpromptpromptprompt :", prompt)
      const llm = await axios.post(`${LLM_URL}/api/generate`, {
          model: "qwen2.5-coder:latest",
          prompt,
          stream: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("llmllm :", llm.data);
      if (!llm.data.response) {
        response.message = "LLM Model is down";
        response.status = 500;
        response.success = false;
      }
      response.message = "LLM response is success";
      response.data = { message: llm.data };
      response.status = 200;
      response.success = false;

    } catch (error) {
      response.message = String(error);
    } finally {
      return res.status(response.status).json(response);
    }
  }
}

export default LLMController;
