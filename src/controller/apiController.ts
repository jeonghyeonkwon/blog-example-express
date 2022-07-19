import * as axios from "axios";
import { NextFunction, Request, Response } from "express";
import { IApiRequest } from "../interfaces/aboutapi/apiDto";

export const apiReceive = (req: Request, res: Response, next: NextFunction) => {
  const { userName, userArray }: IApiRequest = req.body;
  console.log("userName", userName);
  console.log("userArray", userArray);
  const result = userArray.map((data) => data + " 응답완료");
  const responseBody = {
    userName: userName + " 응답 완료",
    userArray: result,
  };
  res.status(200).send(responseBody);
};
export const callAxios = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userName, userArray }: IApiRequest = req.body;
  const response = await axios.default.post(
    "http://localhost:8080/api/receive",
    { userName, userArray }
  );

  res.status(200).send(response.data);
};
