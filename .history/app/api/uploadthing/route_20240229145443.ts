import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
import {RouteHandlerConfig} from "@/types"
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});