import { MarkdownLoader } from "../../../src/server/pages/components/text/markdown-loader.js";
import { PageRouter } from "../../../src/server/pages/page-router.js";
import { GeneratedPage } from "../../../src/server/pages/generated-page.js";
import { HeaderSection } from "../../../src/server/pages/sections/header-section.js";
import { PaddedSection } from "../../../src/server/pages/sections/padded-section.js";
import { AttachmentComponent } from "../../../src/server/pages/components/attachment-component.js";
import { HeadingComponent } from "../../../src/server/pages/components/heading-component.js";
import { RowComponent } from "../../../src/server/pages/components/row-component.js";
import { ImageComponent } from "../../../src/server/pages/components/image-component.js";
import { ItemComponent } from "../../../src/server/pages/components/item-component.js";

class MainPage extends GeneratedPage {
    async generateWebpage(): Promise<string> {
        this.addPageSections(new HeaderSection());
        this.addPageSections(new PaddedSection(
            ...MarkdownLoader.load(this.getResources().getPageContent()['Section 1'])
        ));
        this.addPageSections(new PaddedSection(
            new HeadingComponent('Attachments'),
            new AttachmentComponent([
                new AttachmentComponent.Attachment('My webpage', '/projects/bob', "bobs-page")
            ]),
            new RowComponent([
                new ItemComponent(1.0, new ImageComponent('./bob1.jpeg', {
                    caption: "This is me, Bob!"
                })),
                new ItemComponent(1.0, new ImageComponent('./bob2.webp', {
                    caption: "This is also me, Bob."
                }))
            ])
        ));
        
        return await super.generateWebpage();
    }
}

const router = new PageRouter();

router.addPage('/', new MainPage());

export default router;