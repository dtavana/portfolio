import type { MetaFunction } from "@remix-run/node";

import logoLight from "/logo-light.png";
import logoDark from "/logo-dark.png";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <p>Index</p>
  );
}
