import { PageRouter } from "../../../src/server/pages/page-router.js";
import { GeneratedPage } from "../../../src/server/pages/generated-page.js";
import { HeaderSection } from "../../../src/server/pages/sections/header-section.js";
import { PaddedSection } from "../../../src/server/pages/sections/padded-section.js";
import { HeadingComponent } from "../../../src/server/pages/components/text/heading-component.js";
import { MarkdownLoader } from "../../../src/server/pages/components/text/markdown-loader.js";
import { MarginComponent } from "../../../src/server/pages/components/layout/margin-component.js";
import { customize } from "../../../src/server/pages/components/customize.js";
import { RowComponent } from "../../../src/server/pages/components/layout/row-component.js";
import { ItemComponent } from "../../../src/server/pages/components/layout/item-component.js";
import { ImageComponent } from "../../../src/server/pages/components/media/image-component.js";

class WebsiteDepartmentPage extends GeneratedPage {
    async generateWebpage(): Promise<string> {
        this.add(new PaddedSection(
            ...MarkdownLoader.load(this.getResources().getContent('Overview')),
            customize(new HeadingComponent("Team Members", 2), customize.centerText()),
            new MarginComponent(),
            new RowComponent([
                new ItemComponent(1, new ItemComponent(1, new ImageComponent('nour.png', { caption: "Nour" }))),
                new ItemComponent(1, new ImageComponent('rhiannon.png', { caption: "Rhiannon" })),
                new ItemComponent(1, new ImageComponent('tyler.png', { caption: "Tyler" })),
                new ItemComponent(1, new ImageComponent('liam-b.png', { caption: "Liam B" })),
                new ItemComponent(1, new ImageComponent('sophia.png', { caption: "Sophia" })),
                new ItemComponent(1, new ImageComponent('ella.png', { caption: "Ella" })),
                new ItemComponent(1, new ImageComponent('dylan.png', { caption: "Dylan" }))
            ]),
            new MarginComponent()
        ));

        return await super.generateWebpage();
    }
}

const router = new PageRouter();

router.addPage('/', new WebsiteDepartmentPage());

export default router;