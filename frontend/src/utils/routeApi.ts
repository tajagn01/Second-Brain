const VITE_API_HOST = import.meta.env.VITE_API_HOST as string | undefined;

// If VITE_API_HOST is set (e.g. in production), use full host; otherwise
// use relative /api paths so the Vite dev server proxy can forward requests
const base = VITE_API_HOST ? `${VITE_API_HOST}/api/v1` : `/api/v1`;

export const ApiRoutes = {
    signup: `${base}/user/signup`,
    signin: `${base}/user/signin`,
    contents: `${base}/user/contents`,
    alltags: `${base}/tag/alltags`,
    createtag: `${base}/tag/createtag`,
    create: `${base}/content/create`,
    remove: `${base}/content/remove`,
    share: `${base}/brain/share`,
    shareHexVal: `${base}/brain/share/user`,
    summary: `${base}/content/summarize`,
    search: `${base}/content/search`,
};