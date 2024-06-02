import { MarkdownLoader } from "../../../src/server/pages/components/text/markdown-loader.js";
import { PageRouter } from "../../../src/server/pages/page-router.js";
import { GeneratedPage } from "../../../src/server/pages/generated-page.js";
import { HeaderSection } from "../../../src/server/pages/sections/header-section.js";
import { PaddedSection } from "../../../src/server/pages/sections/padded-section.js";
import { HeadingComponent } from "../../../src/server/pages/components/text/heading-component.js";
import { RowComponent } from "../../../src/server/pages/components/layout/row-component.js";
import { ImageComponent } from "../../../src/server/pages/components/media/image-component.js";
import { ItemComponent } from "../../../src/server/pages/components/layout/item-component.js";
import { MarginComponent } from "../../../src/server/pages/components/layout/margin-component.js";
import { DividerComponent } from "../../../src/server/pages/components/layout/divider-component.js";
import { VideoComponent } from "../../../src/server/pages/components/media/video-component.js";
import { AudioComponent } from "../../../src/server/pages/components/media/audio-component.js";
import { TabsComponent } from "../../../src/server/pages/components/tabs/tabs-component.js";
import { Tab } from "../../../src/server/pages/components/tabs/tab.js";
import { AttachmentComponent } from "../../../src/server/pages/components/media/attachment-component.js";
import { EmbedComponent } from "../../../src/server/pages/components/media/embed-component.js";

class MainPage extends GeneratedPage {
    async generateWebpage(): Promise<string> {
        this.add(new HeaderSection());
        this.add(new PaddedSection(
            ...MarkdownLoader.load(this.getResources().getContent('Section 1')),
            new HeadingComponent('Attachments'),
            new AttachmentComponent([
                new AttachmentComponent.DownloadAttachment('Letter of Bobness', './letter.txt', "letter-of-bobness.txt"),
                new AttachmentComponent.LinkAttachment('Alien Bobliod Investigation Report', 'https://example.com/bobliod-investigation-report.pdf')
            ]),
            new HeadingComponent("Images of King Bob III"),
            ...MarkdownLoader.load("This is a collection of images of **King Bob III**, the greatest king named \"Bob\" alive."),
            new MarginComponent(),
            new RowComponent([
                new ItemComponent(1.0, new ImageComponent('./bob1.jpeg', {
                    caption: "This is me, Bob!"
                })),
                new ItemComponent(1.0, new ImageComponent('./bob2.webp', {
                    caption: "This is also me, Bob."
                }))
            ]),
            new DividerComponent(),
            ...MarkdownLoader.load("I'm also a fan of the **Bob the Builder** series. Here's one of my favorite videos:"),
            new MarginComponent(),
            new VideoComponent("Geec2sfumEo"),
            new MarginComponent(),
            new HeadingComponent("Bob's Noise™"),
            ...MarkdownLoader.load("Bob's Noise™ is a company that I founded. We specialize in creating noise. Here's a sample of our work:\n> **Bob's Noise™**\n>\n> *\"The sound of a thousand Bobs\"* \n\n"),
            new MarginComponent(),
            new AudioComponent('./bobnoise.mp3'),
            new MarginComponent(),
            ...MarkdownLoader.load("After listening, please send by $1000 to my PayPal account. Thank you."),
            new HeadingComponent("Top Bobs"),
            new TabsComponent([
                new Tab("Bob the Builder", [
                    ...MarkdownLoader.load("Bob the Builder is a British children's animated television show created by Keith Chapman. In the original series, Bob appears in a stop motion animated programme as a building contractor, specialising in masonry, along with his colleague Wendy, various neighbours and friends, and their gang of anthropomorphised work-vehicles and equipment. He's a great Bob!"),
                ]),
                new Tab("Bob Ross", [
                    ...MarkdownLoader.load("Bob Ross was an American painter, art instructor and television host. He was the creator and host of The Joy of Painting, an instructional television program that aired from 1983 to 1994 on PBS in the United States, Canada, Latin America, and Europe. He's a great Bob!")
                ]),
                new Tab("Bob the Tomato", [
                    ...MarkdownLoader.load("Bob the Tomato is the deuteragonist of the VeggieTales series. He is Larry's best friend and the co-host of the show. He's a great Bob!")
                ])
            ]),
            new MarginComponent(),
            new HeadingComponent("BobNet Example"),
            new MarginComponent(),
            ...MarkdownLoader.load("Here is an example page on BobNet, a new network for Bobs encryped with BobCrypto by BobCorp™. This page is current broken because it doesn't have any Bob references on it."),
            new MarginComponent(),
            new EmbedComponent('http://example.com', { height: 400 }),
            new MarginComponent()
        ));
        
        return await super.generateWebpage();
    }
}

const router = new PageRouter();

router.addPage('/', new MainPage());

export default router;