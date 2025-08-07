import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "https://sepulcroydoloresmotril.es/bono-feria") {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "https://buy.stripe.com/eVq3cw6GS9q39KHas47ss05",
      },
    });
  }

  return next();
});