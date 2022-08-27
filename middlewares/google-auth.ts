import { NextRequest, NextResponse } from "next/server";

async function validate(request: NextRequest) {
  const tokenid = "test";
  if (tokenid) {
    try {
      // in case of error
      throw new Error("test");
    } catch (error) {
      console.error("validate: ", error);
    }
  }
  throw new Error("tokenId validation failed");
}

export async function googleAuthValidate(request: NextRequest) {
  let response = NextResponse.next();
  try {
    validate(request);
    console.log("throw didnt go into catch");
  } catch (error) {
    console.error(error);
    response = NextResponse.rewrite("/unauthorized");
  } finally {
    return response;
  }
}
