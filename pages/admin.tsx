import { useEffect } from "react";
import type { NetlifyCmsApp } from "netlify-cms-app";
import type { CmsConfig } from "netlify-cms-core";

const config: CmsConfig = {
  // cms_manual_init: true,
  backend: {
    name: "github",
    repo: "judewang/nextjs-netlify-cms-github-backend",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/pages/home.md",
          fields: [
            {
              label: "Hero Title",
              name: "hero_title",
              widget: "string",
            },
            {
              label: "Hero Description",
              name: "hero_description",
              widget: "markdown",
            },
            {
              label: "Hero Image",
              name: "hero_image",
              widget: "image",
            },
          ],
        },
      ],
    },
  ],
};

const Admin: React.FC = () => {
  useEffect(() => {
    async function loadCMS() {
      const cms = await import("netlify-cms-app");
      (cms as unknown as typeof NetlifyCmsApp)?.init({ config });
    }
    loadCMS();
  }, []);

  return null;
};
export default Admin;
