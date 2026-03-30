"use server";
import { z } from "zod";
import { subscribeService } from "./services";
import { servicesSubscribeService } from "./services";
import { ServicesSubscribeProps } from "./services";

const subscribeSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function subscribeAction(prevState: any, formData: FormData) {
  console.log("Our first server action");
  const email = formData.get("email");

  const validatedFields = subscribeSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    console.dir(validatedFields.error.flatten().fieldErrors, { depth: null });

    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }

  const responseData = await subscribeService(validatedFields.data.email);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      errorMessage: "Oops! Something went wrong. Please try again.",
    };
  }

  // if (responseData.error) {
  //   return {
  //     ...prevState,
  //     strapiErrors: responseData.error,
  //     zodErrors: null,
  //     errorMessage: "Fialed to Subscribe.",
  //   };
  // }

  // actions.ts

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      errorMessage: null,
    };
  }

  return {
    ...prevState,
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: "Successfully Subscribed!",
  };

  console.log(email, "Our email input from form");
}
/////////////////////////
//form action for service emmail signups
////////////////////////////////////
const servicesSubscribeSchema = z.object({
  firstName: z.string().min(1, {
    message: "Please enter your first name",
  }),
  lastName: z.string().min(1, {
    message: "Please enter your last name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  telephone: z
    .string()
    .min(1, { message: "Please enter your phone number" })
    .regex(
      // /^(\+\d{1,3}[-.]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      /^\+?[1-9]\d{6,14}$/,
      {
        message: "Please enter a valid phone number",
      },
    ),
});

interface ServicesSubscribeState {
  zodErrors: Record<string, string[]> | null;
  strapiErrors: {
    status: number;
    name: string;
    message: string;
  } | null;
  errorMessage: string | null;
  successMessage: string | null;
  formData: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    telephone: string | null;
    serviceId: string | null;
  } | null;
}

export async function servicesSubscribeAction(
  prevState: ServicesSubscribeState,
  formData: FormData,
) {
  const formDataObject = {
    firstName: formData.get("firstName") as string | null,
    lastName: formData.get("lastName") as string | null,
    email: formData.get("email") as string | null,
    telephone: formData.get("telephone") as string | null,
    serviceId: formData.get("serviceId") as string | null,
  };

  const validatedFields = servicesSubscribeSchema.safeParse(formDataObject);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      formData: { ...formDataObject },
    };
  }

  const dataToSend: ServicesSubscribeProps = {
    ...validatedFields.data,
    service: {
      connect: [formDataObject.serviceId as string],
    },
  };

  const responseData = await servicesSubscribeService(dataToSend);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      errorMessage: "Oops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      formData: { ...formDataObject },
      errorMessage: "Failed to Subscribe.",
    };
  }

  return {
    ...prevState,
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    formData: null,
    successMessage: "Successfully Subscribed!",
  };
}

export type { ServicesSubscribeState };
