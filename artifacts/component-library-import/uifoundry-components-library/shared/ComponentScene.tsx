import type { ComponentItem } from "../types";

type ComponentSceneProps = { item: ComponentItem };

/** Full-page unscaled render for /components/preview/:id */
export default function ComponentScene({ item }: ComponentSceneProps) {
  return (
    <div className="min-h-screen">
      <item.Component />
    </div>
  );
}
