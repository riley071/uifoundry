import { useParams, Link } from "react-router-dom";
import { getDesignComponent } from "../designs";

/**
 * Full-page live preview of a design.
 * Renders without any UIFoundry chrome — meant for iframes or full-screen viewing.
 */
const Preview = () => {
  const { slug } = useParams<{ slug: string }>();
  const DesignComponent = slug ? getDesignComponent(slug) : null;

  if (!DesignComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-5">
            <svg
              className="w-8 h-8 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Design not found
          </h1>
          <p className="text-slate-500 mb-6">
            No preview is available for{" "}
            <span className="font-medium text-slate-700">“{slug}”</span>.
          </p>
          <Link
            to="/explore"
            className="inline-flex px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition"
          >
            Browse Designs
          </Link>
        </div>
      </div>
    );
  }

  return <DesignComponent />;
};

export default Preview;
