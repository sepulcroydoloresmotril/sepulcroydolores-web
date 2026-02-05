import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { request } = context;
  const { pathname } = new URL(request.url);
  

  return next();
});