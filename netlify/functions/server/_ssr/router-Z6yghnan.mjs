import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-P7uTYnCq.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nritya Dance Academy — Kathak & Semi-Classical" },
      {
        name: "description",
        content: "Kathak & Semi-Classical Dance Academy in Kolkata — classes for all ages, workshops and performances."
      },
      { property: "og:title", content: "Nritya Dance Academy" },
      {
        property: "og:description",
        content: "Where tradition meets expression — Kathak & Semi-Classical classes for all ages."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&family=Tiro+Bangla:ital@0;1&family=Noto+Serif+Bengali:wght@500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$2 = () => import("./workshops-BWWGgqbd.mjs");
const Route$2 = createFileRoute("/workshops")({
  head: () => ({
    meta: [{
      title: "Workshops — Nritya Dance Academy | Kathak Intensives & Online"
    }, {
      name: "description",
      content: "Seasonal Kathak & Semi-Classical workshops — abhinaya, taal labs, and choreography intensives. Online and in-studio in Kolkata."
    }, {
      property: "og:title",
      content: "Workshops at Nritya Dance Academy"
    }, {
      property: "og:description",
      content: "Reserve your spot in our upcoming Kathak workshops — both online and in-studio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./classes-Bn1CSuOY.mjs");
const Route$1 = createFileRoute("/classes")({
  head: () => ({
    meta: [{
      title: "Classes — Nritya Dance Academy | Kathak & Semi-Classical, Kolkata"
    }, {
      name: "description",
      content: "Weekly batches in Kathak and Semi-Classical dance for ages 4 through adult. Find the right class for your dancer at Nritya, Kolkata."
    }, {
      property: "og:title",
      content: "Classes at Nritya Dance Academy"
    }, {
      property: "og:description",
      content: "From Little Stars to Adult batches — disciplined, joyful Kathak training rooted in tradition."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-pdZIc2PS.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Nritya Dance Academy — Kathak & Semi-Classical, Kolkata"
    }, {
      name: "description",
      content: "Kathak & Semi-Classical dance classes for all ages in Kolkata. Workshops, batches, and stage training rooted in tradition."
    }, {
      property: "og:title",
      content: "Nritya Dance Academy"
    }, {
      property: "og:description",
      content: "Where tradition meets expression — classes & workshops for every age."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkshopsRoute = Route$2.update({
  id: "/workshops",
  path: "/workshops",
  getParentRoute: () => Route$3
});
const ClassesRoute = Route$1.update({
  id: "/classes",
  path: "/classes",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  ClassesRoute,
  WorkshopsRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
